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

const TechIcon = ({ Icon, tooltip }) => (
  <div className="group relative">
    <motion.div
      whileHover={{ scale: 1.2, rotate: 360 }}
      transition={{ duration: 0.3 }}
    >
      <Icon className="w-8 h-8 text-white hover:text-tertiary transition-colors" />
    </motion.div>
    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 
      bg-black-200 text-white text-xs px-2 py-1 rounded opacity-0 
      group-hover:opacity-100 transition-opacity duration-300 
      pointer-events-none whitespace-nowrap">
      {tooltip}
    </span>
  </div>
);

const Projects = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const projectsList = [
    {
      title: "Google Drive Clone",
      techStack: "Next.js, Tailwind CSS, Google API, Appwrite",
      year: "2025",
      description: "A comprehensive Google Drive clone featuring robust user authentication, seamless file upload capabilities, and advanced file sharing functionalities. Leveraging modern web technologies to create an intuitive cloud storage solution."
    },
    {
      title: "Fresh Track SL",
      techStack: "Flutter, Node.js, Supabase, Linear regression",
      year: "On-going",
      description: "An innovative mobile application bridging the gap between farmers and buyers. Provides real-time crop price insights and implements a sophisticated demand management system to optimize agricultural marketplace dynamics."
    },
    {
      title: "Fresh Track SL Website",
      techStack: "React, Tailwind CSS, Node.js",
      year: "2024",
      description: "Companion web platform for the Fresh Track SL mobile application. Delivers comprehensive information, resources, and interactive features to support farmers and buyers in making informed agricultural decisions.",
      githubLink: "https://github.com/yourusername/fresh-track-website"
    },
    {
      title: "Real Estate Web Platform",
      techStack: "Angular, Spring Boot, PostgreSQL",
      year: "2024",
      description: "A sophisticated real estate platform offering comprehensive property listings, secure user authentication, and advanced search capabilities. Designed to provide an seamless property discovery and management experience.",
      githubLink: "https://github.com/yourusername/real-estate-platform"
    },
    {
      title: "Bone Rush 2D Animated Game",
      techStack: "Unity, C#, 2D Game Development",
      year: "2023",
      description: "An engaging 2D animated game featuring unique mechanical interactions and an immersive gameplay experience. Developed with intricate design principles and creative game development techniques.",
      githubLink: "https://github.com/yourusername/bone-rush-game"
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
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className='w-full max-w-xl p-6 rounded-2xl pointer-events-auto'
      >
        <h1 className={`${styles.sectionHeadText} text-white mb-4`}>
          Projects
        </h1>

        <p className="text-white-100 text-lg mb-8 leading-relaxed">
          Our projects showcase our expertise in web development and software engineering, 
          focusing on clean code, scalability, and modern technologies.
        </p>

        {/* Tech Stack Section */}
        <div className="mb-10">
          <h3 className={`${styles.sectionSubText} text-white mb-6`}>Our Tech Stack</h3>
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
        <div className="text-center">
          <motion.button
            onClick={handleProjectsClick}
            className="group relative bg-gradient-to-r from-tertiary to-tertiary/80 hover:from-tertiary/90 hover:to-tertiary 
              py-4 px-8 rounded-2xl text-white font-bold shadow-xl hover:shadow-2xl 
              transition-all duration-300 transform hover:-translate-y-1 
              border border-tertiary/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <Folder size={24} />
              </motion.div>
              <span className="text-lg">View Our Projects</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="group-hover:translate-x-1 transition-transform"
              >
                <ChevronRight size={20} />
              </motion.div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-tertiary/20 to-tertiary/10 
              blur-xl group-hover:blur-2xl transition-all duration-300 -z-10" />
          </motion.button>

          <motion.p 
            className="text-secondary text-sm mt-3 opacity-70"
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
    </>
  );
};

export default SectionWrapper(Projects, "projects");