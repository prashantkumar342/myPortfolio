import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ 
  skill, 
  color = "from-blue-500/20 to-blue-600/20", 
  textColor = "text-blue-300",
  borderColor = "border-blue-500/30",
  hoverBorderColor = "hover:border-blue-400/50"
}) => {
  return (
    <motion.span
      className={`px-4 py-2 bg-gradient-to-r ${color} ${textColor} text-sm rounded-full border ${borderColor} ${hoverBorderColor} transition-all duration-300`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {skill}
    </motion.span>
  );
};

export default SkillBadge;
