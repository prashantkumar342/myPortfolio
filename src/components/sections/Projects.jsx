import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/common";
import { PROJECTS } from "@/constants";
import {
  Users,
  GraduationCap,
  Heart,
  ExternalLink,
  Code2,
  Github,
} from "lucide-react";

const iconMap = {
  Users,
  GraduationCap,
  Heart,
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-3">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work demonstrating full-stack development
            expertise and real-time application capabilities
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => {
            const IconComponent = iconMap[project.icon];

            return (
              <motion.div
                key={project.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group"
              >
                <div className="bg-card border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="p-6 border-b">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent size={24} className="text-primary" />
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github size={16} />
                      </Button>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <Code2
                          size={14}
                          className="mr-1.5 text-muted-foreground"
                        />
                        <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">
                          Tech Stack
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-auto">
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              window.open("https://github.com/prashantkumar342", "_blank")
            }
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
