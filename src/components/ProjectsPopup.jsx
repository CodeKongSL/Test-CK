import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";

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
      className="bg-white/90 dark:bg-black-200 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-tertiary/40 min-w-[280px] sm:min-w-[320px] max-w-[280px] sm:max-w-[320px] h-[380px] sm:h-[400px] flex flex-col shadow-xl hover:shadow-2xl dark:hover:shadow-[0_0_30px_rgba(57,255,20,0.15)] transition-all duration-300 transform hover:-translate-y-2 group backdrop-blur-sm dark:hover:border-accent/50"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-3 sm:mb-4 flex justify-between items-start">
        <div className="flex-1 pr-2">
          <h3 className="text-slate-900 dark:text-white font-black uppercase tracking-tight text-[18px] sm:text-[20px] mb-1 leading-tight group-hover:text-blue-600 dark:group-hover:text-accent transition-colors duration-300">{title}</h3>
          <p className="text-blue-600 dark:text-accent font-bold uppercase tracking-widest text-[11px] sm:text-[12px]">{techStack}</p>
        </div>
        {githubLink && (
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-secondary hover:text-slate-900 dark:hover:text-white transition-colors ml-2 opacity-70 hover:opacity-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-[22px] sm:h-[22px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>
        )}
      </div>

      <p className="text-slate-500 dark:text-secondary text-[12px] sm:text-[13px] mb-2 sm:mb-3 font-bold opacity-80">{year}</p>

      <div className="flex-grow overflow-y-auto mb-4 pr-1 scrollbar-thin scrollbar-thumb-tertiary">
        <p className="text-slate-700 dark:text-white-100 text-[13px] sm:text-[14px] leading-relaxed opacity-90">
          {description}
        </p>
      </div>

      {/* View Project Button */}
      <motion.button
        onClick={handleViewProject}
        className="w-full bg-slate-900 dark:bg-black-100 border border-transparent dark:border-accent/40 hover:bg-slate-800 dark:hover:bg-primary py-2.5 sm:py-3 px-4 rounded-xl text-white font-tech uppercase tracking-widest text-[12px] sm:text-[13px] shadow-[0_0_10px_rgba(57,255,20,0)] hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] dark:hover:border-accent transition-all duration-300 mt-auto flex items-center justify-center gap-2 group/btn"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>View Project</span>
        <ChevronRight size={16} className="text-accent group-hover/btn:translate-x-1 transition-transform" />
      </motion.button>

      {/* Gradient overlay for visual depth */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

const ProjectsPopup = ({ isOpen, onClose, projects, githubProfileUrl }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleGitHubClick = () => {
    window.open(githubProfileUrl, "_blank");
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 dark:bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 pt-20 sm:pt-24"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-white/95 dark:bg-black-100/90 backdrop-blur-2xl rounded-3xl max-w-6xl w-full max-h-[85vh] sm:max-h-[80vh] overflow-y-auto overflow-x-hidden border border-slate-200 dark:border-accent/40 shadow-2xl dark:shadow-[0_0_50px_rgba(57,255,20,0.1)] scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="p-4 sm:p-8">
              {/* Header */}
              <div className="mb-6 sm:mb-8">
                {/* Close button - positioned absolutely on mobile, stays in flow on desktop */}
                <div className="flex justify-between items-start mb-4 sm:mb-0">
                  <div className="flex-1 pr-4">
                    <motion.h2
                      className="text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-accent dark:to-teal-400 text-3xl sm:text-5xl font-tech font-black mb-2 uppercase tracking-tight"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      Our Projects
                    </motion.h2>
                    <motion.p
                      className="text-slate-600 dark:text-secondary text-sm sm:text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      A showcase of our recent work and expertise
                    </motion.p>
                  </div>

                  {/* Close button - always visible in top right */}
                  <motion.button
                    onClick={onClose}
                    className="text-slate-700 dark:text-white hover:text-slate-900 dark:hover:text-tertiary transition-colors p-2 hover:bg-slate-200 dark:hover:bg-white/10 rounded-xl flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <X size={24} className="sm:w-7 sm:h-7" />
                  </motion.button>
                </div>

                {/* GitHub button - below title on mobile, aligned with title on desktop */}
                <motion.button
                  onClick={handleGitHubClick}
                  className="bg-slate-800 dark:bg-black-200 hover:bg-slate-700 dark:hover:bg-primary py-2 px-4 sm:py-3 sm:px-6 rounded-xl text-white font-bold shadow-lg border border-transparent dark:border-tertiary dark:hover:border-accent/50 transition-all flex items-center gap-2 sm:gap-3 group text-sm sm:text-base mt-4 sm:mt-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="sm:w-5 sm:h-5 group-hover:text-accent group-hover:rotate-12 transition-all">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="group-hover:text-accent transition-colors">View GitHub</span>
                </motion.button>
              </div>

              {/* Projects Container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {/* Scroll hint styled as a sleek tech banner */}
                <div className="bg-slate-100 dark:bg-black-200/50 border border-slate-200 dark:border-tertiary/50 rounded-lg p-3 mb-6 flex items-center justify-between">
                  <span className="text-slate-600 dark:text-secondary font-medium text-sm sm:text-base tracking-wide uppercase">
                    Scroll horizontally to explore
                  </span>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="flex text-blue-600 dark:text-accent"
                  >
                    <ChevronRight size={20} className="-mr-2 opacity-50" />
                    <ChevronRight size={20} className="-mr-2 opacity-80" />
                    <ChevronRight size={20} />
                  </motion.div>
                </div>

                {/* Horizontal scrollable container with relative positioning for overlays */}
                <div className="relative">
                  <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-tertiary hover:scrollbar-thumb-tertiary/80">
                    <div className="flex gap-4 sm:gap-6 pb-2 px-1">
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

                  {/* Gradient overlays for scroll indication - positioned to not cover text */}
                  <div className="absolute top-0 left-0 w-4 sm:w-8 h-full bg-gradient-to-r from-white/95 dark:from-black-100/95 to-transparent pointer-events-none" />
                  <div className="absolute top-0 right-0 w-4 sm:w-8 h-full bg-gradient-to-l from-white/95 dark:from-black-100/95 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;

  return createPortal(modalContent, document.body);
};

export default ProjectsPopup;