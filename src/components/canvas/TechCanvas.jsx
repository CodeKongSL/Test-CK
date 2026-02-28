import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const TechGrid = (props) => {
    const ref = useRef();

    // Generate fewer random points manually to avoid maath NaN issues and ensure a wider spread
    const count = 2000;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Spread them across a larger area x, y, z
            pos[i * 3] = (Math.random() - 0.5) * 15;     // x
            pos[i * 3 + 1] = (Math.random() - 0.5) * 15; // y
            pos[i * 3 + 2] = (Math.random() - 0.5) * 15; // z
        }
        return pos;
    }, [count]);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#39ff14" // Neon hacker green
                    size={0.005}    // Reduced size
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.3}   // Lower opacity for a watermark feel
                    blending={2} // Additive blending for a glow effect
                />
            </Points>
        </group>
    );
};

const TechCanvas = () => {
    return (
        <div className="w-full h-auto absolute inset-0 z-[-1]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <TechGrid />
            </Canvas>
        </div>
    );
};

export default TechCanvas;
