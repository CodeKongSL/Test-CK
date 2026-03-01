import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaAngular,
  FaJava,
  FaPython,
  FaHtml5,
  FaDatabase,
  FaNodeJs,
  FaCss3
} from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { Folder, ChevronRight } from 'lucide-react';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import ProjectsPopup from "./ProjectsPopup";
import techMatrixHero from "../assets/tech_matrix_hero.png";

const TechIcon = ({ Icon, tooltip }) => (
  <div className="group relative">
    <motion.div
      whileHover={{ scale: 1.2, rotate: 360 }}
      transition={{ duration: 0.3 }}
    >
      <Icon className="w-8 h-8 text-slate-700 dark:text-white hover:text-slate-900 dark:hover:text-secondary transition-colors" />
    </motion.div>
    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 
      bg-slate-800 dark:bg-black-200 text-white text-xs px-2 py-1 rounded opacity-0 
      group-hover:opacity-100 transition-opacity duration-300 
      pointer-events-none whitespace-nowrap shadow-lg">
      {tooltip}
    </span>
  </div>
);

const Projects = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const projectsList = [
    {
      title: "POS System",
      techStack: "Next.js, Tailwind CSS, MongoDB, golang",
      year: "2025",
      description: "POS System is a comprehensive point-of-sale solution designed to streamline retail operations. It features an intuitive interface for sales processing, inventory management, and customer relationship management, all built with modern web technologies for optimal performance and scalability.",
      projectLink: "https://pos-frontend-tan.vercel.app/",
      githubLink: ""
    },
    {
      title: "Fresh Track SL",
      techStack: "Flutter, Node.js, Supabase, Linear regression",
      year: "2024",
      description: "An innovative mobile application bridging the gap between farmers and buyers. Provides real-time crop price insights and implements a sophisticated demand management system to optimize agricultural marketplace dynamics.",
      projectLink: "",
      githubLink: ""
    },
    {
      title: "A/L Past Papers Website",
      techStack: "React, Tailwind CSS, Node.js",
      year: "2025",
      description: "A user-friendly web platform offering a vast collection of A/L past examination papers. Features include advanced search capabilities, categorized listings, and downloadable resources to aid students in their exam preparations.",
      projectLink: "https://kuppi-sigma.vercel.app/",
      githubLink: ""
    },
    {
      title: "Wawanamaga",
      techStack: "Flutter, Firebase, Google Maps API",
      year: "2025",
      description: "A mobile application designed to help farmers monitor and manage their agricultural activities efficiently. It integrates weather forecasting, crop management tools, and location-based services to enhance productivity and decision-making.",
      projectLink: "",
      githubLink: ""
    },
    {
      title: "Bone Rush 2D Animated Game",
      techStack: "Unity, C#, 2D Game Development",
      year: "Ongoing",
      description: "An engaging 2D animated game featuring unique mechanical interactions and an immersive gameplay experience. Developed with intricate design principles and creative game development techniques.",
      projectLink: "",
      githubLink: ""
    }
  ];

  const techStack = [
    { icon: FaReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: FaAngular, name: "Angular" },
    { icon: FaJava, name: "Java" },
    { icon: FaPython, name: "Python" },
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3, name: "CSS" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: FaDatabase, name: "SQL" }
  ];

  const githubProfileUrl = "https://github.com/Ivan-6332";

  const handleProjectsClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl pt-4">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 z-[-1] opacity-5 dark:opacity-10 pointer-events-none bg-cover bg-center bg-no-repeat rounded-3xl mix-blend-screen"
        style={{ backgroundImage: `url(${techMatrixHero})` }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className='w-full max-w-4xl mx-auto flex flex-col items-center pointer-events-auto mt-12'
      >
        <h1 className={`${styles.sectionHeadText} dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-accent dark:to-teal-400`}>
          Projects
        </h1>

        <p className="text-slate-700 dark:text-secondary text-lg sm:text-xl text-center mb-10 max-w-3xl leading-relaxed">
          Our projects showcase our expertise in web development and software engineering,
          focusing on clean code, scalability, and modern technologies.
        </p>

        {/* Tech Stack Section */}
        <div className="mb-10 w-full bg-white/30 dark:bg-black-100/20 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/30 dark:border-tertiary/50">
          <h3 className={`${styles.sectionSubText}`}>Our Tech Stack</h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TechIcon Icon={tech.icon} tooltip={tech.name} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Button */}
        <div className="text-center mt-8">
          <motion.button
            onClick={handleProjectsClick}
            className="group relative bg-slate-900 border border-accent/50 hover:bg-black-100 dark:bg-black-100 dark:hover:bg-primary backdrop-blur-md
              py-4 px-10 rounded-2xl text-white font-tech tracking-wider uppercase shadow-[0_0_20px_rgba(57,255,20,0.2)] hover:shadow-[0_0_40px_rgba(57,255,20,0.4)]
              transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-4 relative z-10">
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="text-accent"
              >
                <Folder size={26} />
              </motion.div>
              <span className="text-xl font-bold group-hover:text-accent transition-colors duration-300">View Our Projects</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="group-hover:translate-x-2 transition-transform text-accent"
              >
                <ChevronRight size={24} />
              </motion.div>
            </div>

            {/* Internal Glow Fill Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.button>

          <motion.p
            className="text-slate-600 dark:text-secondary text-sm mt-3 opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Click to explore {projectsList.length} amazing projects
          </motion.p>
        </div>
      </motion.div>

      {/* Projects Popup */}
      <ProjectsPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        projects={projectsList}
        githubProfileUrl={githubProfileUrl}
      />
    </div>
  );
};

export default SectionWrapper(Projects, "projects");