import { Hero, Projects, Skills } from "@/components/sections";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
