import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigation } from "@/hooks";
import { NAV_ITEMS } from "@/constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleNavigation } = useNavigation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (item) => {
    handleNavigation(item);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative">
        {/* Glassy Background */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl border border-border rounded-full shadow-lg"></div>

        {/* Content */}
        <div className="relative px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h1 className="text-lg font-bold text-foreground tracking-tight">
                Prashant Kumar
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleNavClick(item)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-full transition-all duration-200"
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleMenuToggle}
                className="h-8 w-8 p-0 rounded-full hover:bg-accent"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden mt-2"
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-xl"></div>
            <div className="relative p-2 space-y-1">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <Button
                    variant="ghost"
                    onClick={() => handleNavClick(item)}
                    className="w-full justify-start text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl transition-all duration-200"
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
