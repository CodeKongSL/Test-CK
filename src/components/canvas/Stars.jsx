import { useState, useRef, Suspense, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

const Stars = (props) => {
  const ref = useRef();

  // Hardcoded sphere calculation to prevent maath/random NaN errors
  const sphere = useMemo(() => {
    const coords = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const r = 1.2 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      coords[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      coords[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      coords[i * 3 + 2] = r * Math.cos(phi);
    }
    return coords;
  }, []);

  const initialPositions = useMemo(() => new Float32Array(sphere), [sphere]);

  // Track the mouse directly in the Canvas loop for performance
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = () => {
      // Get the CSS variables set by App.jsx
      const xNorm = parseFloat(document.documentElement.style.getPropertyValue('--mouse-x-norm')) || 0.5;
      const yNorm = parseFloat(document.documentElement.style.getPropertyValue('--mouse-y-norm')) || 0.5;

      // Convert normalized screen coordinates (0 to 1) to Three.js world coordinates (-1 to 1)
      mouseRef.current.x = (xNorm * 2) - 1;
      mouseRef.current.y = -(yNorm * 2) + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Base rotation
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;

      // Mouse repulsion logic
      const positions = ref.current.geometry.attributes.position.array;
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      // The radius of the repulsion effect
      const pushRadius = 0.3;
      const pushForce = 0.05;

      for (let i = 0; i < 2000; i++) {
        const i3 = i * 3;
        const x = initialPositions[i3];
        const y = initialPositions[i3 + 1];
        const z = initialPositions[i3 + 2];

        // Apply rotation to world coordinates matching the group rotation
        const cos45 = Math.cos(Math.PI / 4);
        const sin45 = Math.sin(Math.PI / 4);

        // Very basic projection to 2D for mouse distance check
        const worldX = x * cos45 - y * sin45;
        const worldY = x * sin45 + y * cos45;

        // Calculate distance from mouse
        const dx = worldX - mouseX;
        const dy = worldY - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < pushRadius) {
          // Calculate repulsion vector
          const repelStrength = (pushRadius - distance) / pushRadius;
          const force = repelStrength * pushForce;

          const angle = Math.atan2(dy, dx);

          // Apply repulsion (moving current position)
          // We smoothly interpolate back to original position when outside radius
          positions[i3] += (Math.cos(angle) * force + (initialPositions[i3] - positions[i3]) * 0.1);
          positions[i3 + 1] += (Math.sin(angle) * force + (initialPositions[i3 + 1] - positions[i3 + 1]) * 0.1);
        } else {
          // Smoothly return to original position
          positions[i3] += (initialPositions[i3] - positions[i3]) * 0.05;
          positions[i3 + 1] += (initialPositions[i3 + 1] - positions[i3 + 1]) * 0.05;
          positions[i3 + 2] += (initialPositions[i3 + 2] - positions[i3 + 2]) * 0.05;
        }
      }

      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#52525b' // Dark grey instead of pink
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
