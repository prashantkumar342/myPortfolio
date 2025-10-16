import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const IconButton = ({ 
  icon: Icon, 
  onClick, 
  className = "", 
  size = 20,
  variant = "ghost",
  ...props 
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        variant={variant}
        size="icon"
        onClick={onClick}
        className={`w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-white transition-all duration-300 ${className}`}
        {...props}
      >
        <Icon size={size} />
      </Button>
    </motion.div>
  );
};

export default IconButton;
