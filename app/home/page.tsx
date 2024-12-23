/* eslint-disable prettier/prettier */
// pages/index.tsx
import React from "react";

import HomeLayout from "./layout";

const HomePage = () => {
  return (
    <HomeLayout>
      <div>
        <h2>Welcome to the Home Page</h2>
        <p>This is the main content of the home page.</p>
      </div>
    </HomeLayout>
  );
};

export default HomePage;
