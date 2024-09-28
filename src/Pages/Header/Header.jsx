import React, { useState } from "react";
import Banner from "./Banner";

const Header = () => {
  const [theme, setTheme] = useState("light"); // Light or dark mode
  const [fontSize, setFontSize] = useState(16); // Base font size

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const increaseFontSize = () => {
    setFontSize((prev) => prev + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prev) => (prev > 12 ? prev - 2 : prev));
  };

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-black" : "bg-white text-black"}`}>
      <header className="flex justify-between p-4 bg-gray-900" style={{color: "#000"}}>
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
      <Banner/>
    </div>
  );
};

export default Header;
