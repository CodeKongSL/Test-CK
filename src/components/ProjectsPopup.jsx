import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const HorizontalProjectCard = ({ title, techStack, year, description, githubLink, projectLink }) => {
  const handleViewProject = () => {
    if (projectLink) {
      window.open(projectLink, "_blank");
    } else {
      alert("Sorry, link is not available at this moment. For more information contact 0772606332 - Ivan");
    }
  };

  return (
    <motion.div 
      className="bg-black-200/60 p-4 sm:p-6 rounded-2xl border border-tertiary/40 min-w-[280px] sm:min-w-[320px] max-w-[280px] sm:max-w-[320px] h-[380px] sm:h-[400px] flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group backdrop-blur-sm"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-3 sm:mb-4 flex justify-between items-start">
        <div className="flex-1 pr-2">
          <h3 className="text-white font-bold text-[16px] sm:text-[18px] mb-2 leading-tight">{title}</h3>
          <p className="text-tertiary text-[12px] sm:text-[13px] font-medium">{techStack}</p>
        </div>
        {githubLink && (
          <motion.a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-tertiary transition-colors ml-2 opacity-70 hover:opacity-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-[22px] sm:h-[22px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>
        )}
      </div>
      
      <p className="text-secondary text-[12px] sm:text-[13px] mb-2 sm:mb-3 font-light opacity-80">{year}</p>

      <div className="flex-grow overflow-y-auto mb-4 pr-1">
        <p className="text-white-100 text-[13px] sm:text-[14px] leading-relaxed opacity-90">
          {description}
        </p>
      </div>

      {/* View Project Button */}
      <motion.button
        onClick={handleViewProject}
        className="w-full bg-tertiary hover:bg-tertiary/80 py-2 sm:py-2.5 px-4 rounded-lg text-white font-semibold text-[13px] sm:text-[14px] shadow-lg hover:shadow-xl transition-all duration-300 mt-auto"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        View Project
      </motion.button>

      {/* Gradient overlay for visual depth */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

const ProjectsPopup = ({ isOpen, onClose, projects, githubProfileUrl }) => {
  const handleGitHubClick = () => {
    window.open(githubProfileUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-primary/95 backdrop-blur-xl rounded-3xl p-8 max-w-6xl w-full max-h-[90vh] overflow-hidden border border-tertiary/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <motion.h2 
                  className="text-white text-4xl font-bold mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Our Projects
                </motion.h2>
                <motion.p 
                  className="text-secondary text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  A showcase of our recent work and expertise
                </motion.p>
              </div>
              
              <div className="flex items-center gap-4">
                <motion.button 
                  onClick={handleGitHubClick}
                  className="bg-tertiary hover:bg-tertiary/80 py-3 px-6 rounded-xl text-white font-bold shadow-lg transition-all flex items-center gap-3 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="group-hover:rotate-12 transition-transform">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View GitHub
                </motion.button>
                
                <motion.button
                  onClick={onClose}
                  className="text-white hover:text-tertiary transition-colors p-2 hover:bg-white/10 rounded-xl"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <X size={28} />
                </motion.button>
              </div>
            </div>

            {/* Projects Container */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {/* Scroll hint */}
              <div className="text-secondary text-sm mb-4 flex items-center gap-2">
                <span>Scroll horizontally to explore projects</span>
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-tertiary"
                >
                  →
                </motion.div>
              </div>

              {/* Horizontal scrollable container */}
              <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-tertiary hover:scrollbar-thumb-tertiary/80">
                <div className="flex gap-4 sm:gap-6 pb-2">
                  {projects.map((project, index) => (
                    <motion.div
                      key={`project-${index}`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + (index * 0.1) }}
                    >
                      <HorizontalProjectCard {...project} />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Gradient overlays for scroll indication */}
              <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-primary/95 to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-primary/95 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectsPopup;