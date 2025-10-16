import { ANIMATION_VARIANTS } from "@/constants";
import { usePerformanceMode, useReducedMotion } from "@/hooks";
import { motion } from "framer-motion";
import React from "react";

const Card = ({
  children,
  className = "",
  hover = true,
  animation = "simpleFade",
  delay = 0,
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion();
  const isLowPerformance = usePerformanceMode();

  const getAnimationVariant = () => {
    if (prefersReducedMotion || isLowPerformance) {
      return ANIMATION_VARIANTS.simpleFade;
    }
    return ANIMATION_VARIANTS[animation] || ANIMATION_VARIANTS.simpleFade;
  };

  const shouldAnimate = !prefersReducedMotion && !isLowPerformance;

  return (
    <motion.div
      className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-colors duration-200 ${
        hover ? "hover:bg-white/10" : ""
      } ${className}`}
      initial={shouldAnimate ? "hidden" : false}
      whileInView={shouldAnimate ? "visible" : false}
      viewport={{ once: true, margin: "-50px" }}
      variants={shouldAnimate ? getAnimationVariant() : {}}
      whileHover={hover && shouldAnimate ? { scale: 1.01 } : {}}
      transition={{ delay: shouldAnimate ? delay : 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
