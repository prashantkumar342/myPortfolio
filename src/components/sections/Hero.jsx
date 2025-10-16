import { IconButton } from "@/components/common";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/constants";
import { useScrollToSection } from "@/hooks";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Hero = () => {
  const scrollToSection = useScrollToSection();

  const socialLinks = [
    {
      icon: Linkedin,
      onClick: () => window.open(PERSONAL_INFO.linkedin, "_blank"),
    },
    {
      icon: Github,
      onClick: () => window.open(PERSONAL_INFO.github, "_blank"),
    },
    {
      icon: Mail,
      onClick: () => window.open(`mailto:${PERSONAL_INFO.email}`, "_blank"),
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Profile Card */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card border rounded-lg p-8 shadow-sm sticky top-24">
              {/* Profile Avatar */}
              <div className="flex flex-col items-center mb-6">
                <motion.div
                  className="relative mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-foreground">
                      PK
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-card">
                    <div className="w-full h-full rounded-full bg-green-400 animate-pulse"></div>
                  </div>
                </motion.div>

                <h2 className="text-xl font-semibold text-foreground text-center">
                  {PERSONAL_INFO.name}
                </h2>
                <p className="text-sm text-muted-foreground text-center mt-1">
                  {PERSONAL_INFO.title}
                </p>
              </div>

              {/* Experience Badge */}
              <div className="flex items-center justify-center mb-6">
                <div className="inline-flex items-center px-3 py-1.5 bg-secondary rounded-md">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-xs font-medium text-secondary-foreground">
                    2+ Years Experience
                  </span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Mail size={16} className="text-primary flex-shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Phone size={16} className="text-primary flex-shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-3 pt-4 border-t">
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    icon={social.icon}
                    onClick={social.onClick}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Main Content */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-8">
              {/* Introduction */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="text-sm font-medium text-primary mb-2">
                    Hello, I'm
                  </p>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    {PERSONAL_INFO.name.split(" ")[0]}{" "}
                    {PERSONAL_INFO.name.split(" ")[1]}
                    <br />
                    <span className="text-muted-foreground">
                      {PERSONAL_INFO.name.split(" ")[2]}
                    </span>
                  </h1>
                </motion.div>

                <motion.p
                  className="text-xl text-muted-foreground font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {PERSONAL_INFO.tagline}
                </motion.p>

                <motion.p
                  className="text-base text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {PERSONAL_INFO.intro}
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button size="lg" onClick={() => scrollToSection("contact")}>
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                </Button>
                <Button variant="ghost" size="lg">
                  <Download size={18} className="mr-2" />
                  Download CV
                </Button>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                className="bg-card border rounded-lg p-6 shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "React",
                    "Socket.IO",
                    "GraphQL",
                    "TypeScript",
                    "Docker",
                  ].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-md hover:bg-secondary/80 transition-colors cursor-default"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Additional Info Card */}
              <motion.div
                className="bg-muted/50 border border-border rounded-lg p-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <h3 className="text-base font-semibold text-foreground mb-3">
                  What I Do
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium text-foreground">
                      Backend Development
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Building scalable APIs and server-side applications
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium text-foreground">
                      Real-time Systems
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Creating interactive real-time experiences
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium text-foreground">
                      Database Design
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Architecting efficient data structures
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium text-foreground">
                      API Integration
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Connecting services and third-party APIs
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
