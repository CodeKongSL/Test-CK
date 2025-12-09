import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { styles } from "../styles";
import Projects from "./Projects";
import ReachMe from "./ReachMe";
import { EarthCanvas } from "./canvas";

const EducationCard = ({ institution, degree, date, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-transparent border-tertiary border p-4 rounded-2xl flex-1"
    >
      <div className="mb-3">
        <h3 className="text-white font-bold text-[18px]">{institution}</h3>
        <p className="text-secondary text-[13px]">{degree}</p>
      </div>
      
      <p className="text-white-100 font-medium text-[15px] mb-2">{date}</p>
      <p className="text-secondary text-[13px] mb-3">{description}</p>
    </motion.div>
  );
};

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  const educationList = [
    {
      institution: "Our Vision",
      degree: "Innovation & Excellence",
      date: "Est. 2024",
      description: "Code Kong (Pvt) Ltd is a professional software company dedicated to delivering innovative, scalable, and high-quality software solutions that transform businesses."
    },
    {
      institution: "Our Mission",
      degree: "Client Success",
      date: "Every Project",
      description: "We specialize in building cutting-edge web and mobile applications using modern technologies, ensuring our clients stay ahead in the digital landscape."
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Ivan-6332",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "http://www.linkedin.com/in/ivan-de-zoysa-28640b338",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:ivanakalanka@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
    },
    {
      name: "Phone",
      url: "tel:+94772606332",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
    },
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-screen h-screen flex justify-center items-center relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        className="relative rounded-lg overflow-hidden shadow-2xl z-10"
        style={{
          width: isMobile ? "95%" : "90%",
          height: isMobile ? "75%" : "90%",
        }}
      >
        <div 
            className="w-full h-full overflow-y-auto scrollbar-hide flex flex-col" 
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {/* Profile Section - Moved higher with negative margin-top */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col justify-center items-center p-6 rounded-2xl pointer-events-auto min-h-screen"
              style={{ marginTop: "-10vh" }} // Added negative margin to move it higher
            >
              {/* Earth Canvas - Only visible on mobile */}
              {isMobile && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="w-full max-w-sm h-64 mb-6 mx-auto"
                >
                  <EarthCanvas />
                </motion.div>
              )}

              <h2 className={`${styles.sectionSubText} text-secondary mb-2 text-center`}>
                Welcome to
              </h2>
              <h1 className={`${styles.sectionHeadText} text-white text-center`}>
                Code Kong
              </h1>

              <h2 className={`${styles.sectionSubText} mb-3 text-center`}>
                Professional Software Solutions
              </h2>

              <div className="mb-3"></div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-white-100 text-lg text-center mb-6"
              >
                Building scalable web and mobile applications with cutting-edge technologies.
                Specializing in React, Flutter, Node.js, Next.js, and modern cloud solutions.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex gap-6 mt-4"
              >
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-secondary transition-colors duration-300 p-2 rounded-full hover:bg-white-100 hover:bg-opacity-10"
                    aria-label={link.name}
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className='w-full p-6 rounded-2xl pointer-events-auto'
            >
              <h1 className={`${styles.sectionHeadText} text-white`}>
                Who We Are
              </h1>

              <h2 className={`${styles.sectionSubText} mb-6`}>
                About Code Kong
              </h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-white-100 text-lg mb-6"
              >
                Code Kong (Pvt) Ltd is a professional, innovative software company committed to delivering exceptional digital solutions.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-5">
                {educationList.map((education, index) => (
                  <EducationCard 
                    key={`education-${index}`}
                    {...education} 
                  />
                ))}
              </div>
            </motion.div>

            {/* Projects Section - Updated width to match Education */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full p-6 rounded-2xl pointer-events-auto"
            >
              <Projects />
            </motion.div>

            {/* Reach Me Section */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full px-2 py-6 rounded-2xl pointer-events-auto"
            >
              <ReachMe />
            </motion.div>
          </div>
        </motion.div>
    </motion.div>
  );
};

export default Home;