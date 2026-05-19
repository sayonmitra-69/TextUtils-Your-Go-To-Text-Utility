import React, { useState } from "react";

export default function TextForm(props) {
  // State for the text content in the textarea
  const [text, setText] = useState("Enter text here");

  // Styles for the card and textarea
  const cardStyle = {
    backgroundColor: "transparent",
    color: props.isDarkMode ? "#e2e8f0" : "#1a202c",
    transition: "all 0.3s ease",
    borderRadius: "0",
    boxShadow: "none",
  };

  // Neon effect styles (reduced and in blue)
  const neonShadow = props.isDarkMode
    ? "0 0 3px #007BFF, 0 0 5px #007BFF"
    : "none";

  const textAreaStyle = {
    backgroundColor: props.isDarkMode ? "#1f2937" : "#f9fafb",
    color: props.isDarkMode ? "#e2e8f0" : "#1a202c",
    border: `1px solid ${props.isDarkMode ? "#007BFF" : "#d1d5db"}`,
    transition: "all 0.3s ease",
    borderRadius: "8px",
    boxShadow: neonShadow,
  };

  const buttonStyle = {
    backgroundColor: props.isDarkMode ? "#2c5282" : "#3b82f6",
    color: props.isDarkMode ? "#ffffff" : "#ffffff",
    transition: "all 0.3s ease",
    border: `1px solid ${props.isDarkMode ? "#007BFF" : "none"}`,
    borderRadius: "8px",
    boxShadow: props.isDarkMode
      ? "0 0 3px #007BFF, 0 0 5px #007BFF" // Separate shadow for buttons
      : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  };
  const textTitleStyle = {
    color: props.isDarkMode ? "#e2e8f0" : "#1a202c",
    transition: "all 0.3s ease",
    textShadow: props.isDarkMode ? neonShadow : "none",
  };

  /**
   * Converts the text in the textarea to uppercase.
   */
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  /**
   * Converts the text in the textarea to lowercase.
   */
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  /**
   * Clears all text from the textarea.
   */
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  /**
   * Copies the current text from the textarea to the clipboard.
   * Uses document.execCommand('copy') for broader compatibility in iframes.
   */
  const handleCopyClick = () => {
    const textArea = document.getElementById("MyBox");
    if (textArea) {
      textArea.select();
      textArea.setSelectionRange(0, 99999); // For mobile devices
      document.execCommand("copy");
    }
  };

  /**
   * Removes extra spaces from the text, replacing multiple spaces with a single space
   * and trimming leading/trailing spaces.
   */
  const removeExtraSpaces = () => {
    const cleanedText = text.replace(/\s+/g, " ").trim();
    setText(cleanedText);
  };

  /**
   * Handles changes in the textarea input.
   * Updates the 'text' state as the user types.
   */
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    // Outer container with flexbox for centering
    <div className="min-h-screen d-flex flex-column align-items-center justify-content-center p-4 font-sans">
      {/* Main content card */}
      <div className="p-8 w-full max-w-md" style={cardStyle}>
        <h1
          className="text-3xl font-bold mb-6 text-center"
          style={textTitleStyle}
        >
          {props.heading}
        </h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            id="MyBox"
            rows="8"
            onChange={handleOnChange}
            value={text}
            style={textAreaStyle}
          ></textarea>
        </div>

        {/* Buttons for text manipulation */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          <button
            className="btn btn-primary"
            onClick={handleUpClick}
            style={buttonStyle}
          >
            Convert to UpperCase
          </button>
          <button
            className="btn btn-primary"
            onClick={handleLoClick}
            style={buttonStyle}
          >
            Convert to LowerCase
          </button>
          <button
            className="btn btn-primary"
            onClick={handleClearClick}
            style={buttonStyle}
          >
            Clear Text
          </button>
          <button
            className="btn btn-primary"
            onClick={handleCopyClick}
            style={buttonStyle}
          >
            Copy Text
          </button>
          <button
            onClick={removeExtraSpaces}
            className="btn btn-primary"
            style={buttonStyle}
          >
            Remove Extra Spaces
          </button>
        </div>

        <div className="container my-3" style={textTitleStyle}>
          <h1 className="text-2xl font-semibold mb-2" style={textTitleStyle}>
            Your Summary
          </h1>
          <p>
            {text.split(/\s+/).filter((word) => word.length > 0).length} words
            and {text.length} characters
          </p>
          <p>
            {0.008 * text.split(/\s+/).filter((word) => word.length > 0).length}{" "}
            minutes read
          </p>
          <h2 className="text-xl font-semibold mb-2" style={textTitleStyle}>
            Preview
          </h2>
          <p>
            {text.length > 0
              ? text
              : "Enter something in the textbox above to preview it here"}
          </p>
        </div>
      </div>
    </div>
  );
}
