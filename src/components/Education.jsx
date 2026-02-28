import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const EducationCard = ({ institution, degree, date, description }) => {
  return (
    <div className="bg-white/60 dark:bg-black-100/40 backdrop-blur-md p-6 rounded-2xl flex-1 border border-slate-200/50 dark:border-tertiary shadow-lg dark:shadow-none transition-colors duration-300">
      <div className="mb-4">
        <h3 className="text-slate-900 dark:text-white font-black uppercase tracking-tight text-[22px]">{institution}</h3>
        <p className="text-blue-600 dark:text-accent font-bold uppercase tracking-widest text-[14px]">{degree}</p>
      </div>

      <p className="text-slate-700 dark:text-white-100 font-medium text-[15px] mb-2">{date}</p>

      {/* Added extra blank line for spacing */}
      <p className="text-slate-600 dark:text-secondary text-[13px] mb-3">{description}</p>
    </div>
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
      <h1 className={`${styles.sectionHeadText}`}>
        Who We Are
      </h1>

      <h2 className={`${styles.sectionSubText}`}>
        About Code Kong
      </h2>

      <p className="text-slate-700 dark:text-secondary text-lg sm:text-xl text-center mb-10 max-w-3xl leading-relaxed">
        Code Kong (Pvt) Ltd is a professional, innovative software company committed to delivering exceptional digital solutions.
      </p>

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
