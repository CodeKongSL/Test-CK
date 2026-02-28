import React from "react";
import { useTheme } from "../utils/ThemeContext";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`relative inline-flex items-center justify-center p-2 rounded-full cursor-pointer transition-colors duration-300
        ${theme === "dark" ? "bg-black-100 text-yellow-400 hover:bg-black-200" : "bg-gray-200 text-slate-800 hover:bg-gray-300"}
      `}
            aria-label="Toggle Dark Mode"
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "dark" ? 0 : 180,
                    scale: theme === "dark" ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute"
            >
                <FiMoon size={20} />
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "light" ? 0 : -180,
                    scale: theme === "light" ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute"
            >
                <FiSun size={20} />
            </motion.div>

            {/* Invisible placeholder to maintain square aspect ratio relative to absolute icons */}
            <div className="w-5 h-5 opacity-0 pointer-events-none" />
        </button>
    );
};

export default ThemeToggle;
