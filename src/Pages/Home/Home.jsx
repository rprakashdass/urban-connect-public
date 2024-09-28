import React, { useState } from "react";
import DynamicSolution from "./DyamicSolution"; // Your solution explanation component
import ProjectsByLocation from "./OngoingProjects/ProjectsByLocation"; // Component that handles location-based projects
import LoginSection from "../../Components/LoginCard";

const Home = () => {
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState(16);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Function to increase font size
  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 2);
  };

  // Function to decrease font size
  const decreaseFontSize = () => {
    setFontSize((prevSize) => (prevSize > 12 ? prevSize - 2 : 12)); // Minimum font size is 12px
  };

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <header className="flex justify-between p-4">
        <div>
          <h1 className="text-2xl">Urban Connect</h1>
        </div>
        <div>
          <button onClick={toggleTheme} className="px-4 py-2 bg-gray-200 rounded">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
          <button onClick={increaseFontSize} className="ml-2 px-2 py-1 bg-gray-200 rounded">
            A+
          </button>
          <button onClick={decreaseFontSize} className="ml-2 px-2 py-1 bg-gray-200 rounded">
            A-
          </button>
        </div>
      </header>

      <main className={`p-4`} style={{ fontSize: `${fontSize}px` }}>

        <LoginSection/>

        {/* Dynamic Solution - Explain how your system fixes issues */}
        <DynamicSolution />

        {/* Projects by Location - Allow users to view projects based on their pincode */}
        <ProjectsByLocation />
      </main>
    </div>
  );
};

export default Home;
