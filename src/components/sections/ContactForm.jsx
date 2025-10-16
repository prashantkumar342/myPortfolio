import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/common";
import { CONTACT_INFO } from "@/constants";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Clock,
  MessageCircle,
} from "lucide-react";

const iconMap = {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Clock,
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-3">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how I can
            help bring your ideas to life with modern web solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 space-y-4"
          >
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
                <MessageCircle className="mr-2" size={20} />
                Contact Information
              </h3>

              <div className="space-y-4">
                {CONTACT_INFO.map((contact, index) => {
                  const IconComponent = iconMap[contact.icon];

                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-3 rounded-md hover:bg-accent transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                        <IconComponent size={18} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-foreground">
                          {contact.title}
                        </h4>
                        <p className="text-xs text-muted-foreground truncate">
                          {contact.value}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(contact.link, "_blank")}
                        className="h-8 w-8 p-0"
                      >
                        <Send size={14} />
                      </Button>
                    </motion.div>
                  );
                })}

                {/* Availability Status */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="flex items-start space-x-3 p-3 rounded-md bg-green-500/10 border border-green-500/20"
                >
                  <div className="w-10 h-10 bg-green-500/20 rounded-md flex items-center justify-center flex-shrink-0">
                    <Clock
                      size={18}
                      className="text-green-600 dark:text-green-400"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-foreground">
                      Availability
                    </h4>
                    <div className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                      <span>Available for new projects</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-muted/50 border rounded-lg p-6">
              <h4 className="text-sm font-semibold text-foreground mb-2">
                Response Time
              </h4>
              <p className="text-xs text-muted-foreground">
                I typically respond within 24 hours on business days.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-card border rounded-lg p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                <Send className="mr-2" size={20} />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="Your Name"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="Project Discussion"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Info Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <div className="bg-muted/50 border rounded-lg p-6 text-center">
            <h4 className="text-base font-semibold text-foreground mb-2">
              Let's Build Something Amazing Together
            </h4>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              I'm always excited to work on new projects and collaborate with
              fellow developers and entrepreneurs. Whether you need a backend
              API, real-time features, or full-stack development, I'm here to
              help bring your vision to life.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
