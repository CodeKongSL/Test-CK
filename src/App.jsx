import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Education, Navbar, StarsCanvas, TechCanvas, Projects, ReachMe } from "./components";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/Home"; // Importing Home component

const App = () => {
  // State to track which page is currently active
  const [activePage, setActivePage] = useState("home");

  // Function to handle page navigation
  const handlePageChange = (pageId) => {
    setActivePage(pageId);
  };

  return (
    <BrowserRouter>
      <div className='relative z-0 dark:bg-primary bg-light-primary transition-colors duration-300 min-h-screen'>
        <div className='bg-hero-pattern-light dark:bg-none bg-cover bg-no-repeat bg-center'>
          <Navbar onNavLinkClick={handlePageChange} activePage={activePage} />
        </div>

        {/* Tech and stars background (persistent full screen) */}
        <div className='fixed inset-0 z-0 bg-light-primary dark:bg-primary transition-colors duration-300'>
          <div className="absolute inset-0 hidden dark:block">
            <TechCanvas />
          </div>
          <StarsCanvas />
        </div>

        {/* Main content layout - Centered and full width */}
        <div className='relative z-10 pt-24 pb-12 flex justify-center w-full min-h-screen'>
          <div className='w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
            <AnimatePresence mode="wait">
              {/* Home Page */}
              {activePage === "home" && (
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center items-center min-h-[80vh]"
                >
                  <Home />
                </motion.div>
              )}

              {/* Education Page */}
              {activePage === "education" && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center items-center min-h-[80vh]"
                >
                  <Education />
                </motion.div>
              )}

              {/* Projects Page */}
              {activePage === "projects" && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center items-center min-h-[80vh]"
                >
                  <Projects />
                </motion.div>
              )}

              {/* Reach Me (Contact) Page */}
              {activePage === "contact" && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center items-center min-h-[80vh]"
                >
                  <ReachMe />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
