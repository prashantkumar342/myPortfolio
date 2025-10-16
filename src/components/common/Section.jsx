import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ 
  id, 
  children, 
  className = "", 
  title,
  subtitle,
  titleClassName = "",
  subtitleClassName = ""
}) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div 
            className="text-center mb-16"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title && (
              <h2 className={`text-4xl font-bold text-white mb-4 ${titleClassName}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-gray-300 text-lg max-w-2xl mx-auto ${subtitleClassName}`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
