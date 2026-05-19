import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // This useEffect hook applies the theme to the entire document body.
  useEffect(() => {
    // Define a professional color palette
    const lightTheme = {
      bg: "#F3F4F6", // Light gray background
      text: "#1F2937", // Dark gray text
    };
    const darkTheme = {
      bg: "#1F2937", // Dark gray background
      text: "#E5E7EB", // Light gray text
    };

    const theme = isDarkMode ? darkTheme : lightTheme;

    // Apply styles directly to the document body for a full-page effect.
    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.text;
    document.body.style.transition =
      "background-color 0.3s ease, color 0.3s ease";

    // Cleanup function to reset the body styles when the component unmounts.
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
      document.body.style.transition = "";
    };
  }, [isDarkMode]); // The effect re-runs whenever isDarkMode changes.

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About Utils"
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />

        {/* This div no longer needs the appStyle, as the body is now styled. */}
        <div className="container mt-4">
          <Routes>
            <Route
              exact
              path="/about"
              element={<About isDarkMode={isDarkMode} />}
            />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to Analyze"
                  isDarkMode={isDarkMode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
