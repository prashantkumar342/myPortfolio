import React from "react";
import { motion } from "framer-motion";
import { Card, SkillBadge } from "@/components/common";
import { SKILLS } from "@/constants";
import { Server, Database, Wifi, Monitor, Settings } from "lucide-react";

const iconMap = {
  Server,
  Database,
  Wifi,
  Monitor,
  Settings,
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-3">My Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I
            use to build amazing applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((skill, index) => {
            const IconComponent = iconMap[skill.icon];

            return (
              <motion.div
                key={skill.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {skill.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((skillName, skillIndex) => (
                      <motion.span
                        key={skillName}
                        className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-md hover:bg-secondary/80 transition-colors cursor-default"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.1 + skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        {skillName}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-muted/50 border rounded-lg p-6 text-center">
            <h4 className="text-base font-semibold text-foreground mb-2">
              Always Learning
            </h4>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              I'm constantly expanding my skill set and staying up-to-date with
              the latest technologies and best practices in web development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
