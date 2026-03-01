import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import techIsometricNodes from "../assets/tech_isometric_nodes.png";

const EducationCard = ({ institution, degree, date, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white/60 dark:bg-black-100/40 backdrop-blur-md p-6 rounded-2xl flex-1 border border-slate-200/50 dark:border-tertiary shadow-lg dark:hover:shadow-[0_0_30px_rgba(57,255,20,0.15)] hover:shadow-xl dark:hover:border-accent/50 transition-all duration-300 group cursor-pointer"
    >
      <div className="mb-4 transition-transform duration-300 group-hover:translate-x-2">
        <h3 className="text-slate-900 dark:text-white font-black uppercase tracking-tight text-[22px] group-hover:text-blue-600 dark:group-hover:text-accent transition-colors duration-300">{institution}</h3>
        <p className="text-blue-600 dark:text-accent font-bold uppercase tracking-widest text-[14px]">{degree}</p>
      </div>

      <p className="text-slate-700 dark:text-white-100 font-medium text-[15px] mb-2 transition-transform duration-300 group-hover:translate-x-2">{date}</p>

      {/* Added extra blank line for spacing */}
      <p className="text-slate-600 dark:text-secondary text-[13px] mb-3 transition-transform duration-300 group-hover:translate-x-2">{description}</p>
    </motion.div>
  );
};

const Education = () => {
  // Company information
  const companyInfo = [
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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className='w-full max-w-4xl mx-auto pointer-events-auto flex flex-col items-center'
    >
      <h1 className={`${styles.sectionHeadText} dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-accent dark:to-teal-400`}>
        Who We Are
      </h1>

      <h2 className={`${styles.sectionSubText}`}>
        About Code Kong
      </h2>

      <p className="text-slate-700 dark:text-secondary text-lg sm:text-xl text-center mb-8 max-w-3xl leading-relaxed">
        Code Kong (Pvt) Ltd is a professional, innovative software company committed to delivering exceptional digital solutions.
      </p>

      {/* Isometric Tech Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full max-w-lg mb-12 relative group"
      >
        <div className="absolute inset-0 bg-accent rounded-3xl blur-xl opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
        <img src={techIsometricNodes} alt="Tech Nodes" className="w-full h-auto rounded-3xl relative z-10 border border-slate-200/50 dark:border-accent/30 shadow-2xl dark:shadow-[0_0_30px_rgba(57,255,20,0.1)] group-hover:dark:border-accent transition-colors duration-500 object-cover" />
      </motion.div>

      {/* Displaying company info cards in a straight line on larger screens */}
      <div className="flex flex-col sm:flex-row gap-5">
        {companyInfo.map((info, index) => (
          <EducationCard
            key={`company-${index}`}
            {...info}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Education, "education");
