import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const EducationCard = ({ institution, degree, date, description }) => {
  return (
    <div className="bg-black-200 p-4 rounded-2xl flex-1 border border-tertiary">
      <div className="mb-3">
        <h3 className="text-white font-bold text-[18px]">{institution}</h3>
        <p className="text-secondary text-[13px]">{degree}</p>
      </div>
      
      <p className="text-white-100 font-medium text-[15px] mb-2">{date}</p>

      {/* Added extra blank line for spacing */}
      <p className="text-secondary text-[13px] mb-3">{description}</p>
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
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className='w-full max-w-2xl bg-black-100 p-6 rounded-2xl pointer-events-auto border-2 border-tertiary'
    >
      <h1 className={`${styles.sectionHeadText} text-white`}>
        Who We Are
      </h1>

      {/* Added extra margin for more space below this title */}
      <h2 className={`${styles.sectionSubText} mb-6`}>
        About Code Kong
      </h2>
      
      <p className="text-white-100 text-lg mb-6">
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
