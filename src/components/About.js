import React from "react";

// This is the About component, now using props to handle dark mode styling
const About = (props) => {
  // Style object for the accordion and its body, based on the prop
  let myStyle = {
    color: props.isDarkMode ? "#e2e8f0" : "#1a202c",
    backgroundColor: props.isDarkMode ? "#2d3748" : "#ffffff", // Refined background colors
    border: `1px solid ${props.isDarkMode ? "#4a5568" : "#e2e8f0"}`,
    borderRadius: "8px",
    transition: "all 0.3s ease-in-out",
  };

  // Style for the accordion buttons, ensuring they look good in both modes
  const buttonStyle = {
    color: props.isDarkMode ? "#cbd5e0" : "#4a5568",
    backgroundColor: props.isDarkMode ? "#2d3748" : "#f7fafc",
    border: "none",
    boxShadow: "none",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <div className="container">
      <h2
        className="my-3"
        style={{ color: props.isDarkMode ? "#e2e8f0" : "#1a202c" }}
      >
        About TextUtils
      </h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={buttonStyle}
            >
              Our Purpose
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                TextUtils is a free online tool designed to help you analyze and
                manipulate your text effortlessly. Whether you need to format
                documents, clean up text, or simply get a quick summary, our
                platform provides a clean and intuitive interface to get the job
                done efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={buttonStyle}
            >
              Key Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                TextUtils offers a range of powerful features to enhance your
                productivity:
              </p>
              <ul>
                <li>
                  <strong>Text Transformation:</strong> Convert your text to
                  uppercase or lowercase with a single click.
                </li>
                <li>
                  <strong>Text Cleaning:</strong> Easily remove extra spaces to
                  create a cleaner, more readable document.
                </li>
                <li>
                  <strong>Copy to Clipboard:</strong> Instantly copy your
                  processed text to the clipboard for use in other applications.
                </li>
                <li>
                  <strong>Content Summary:</strong> Get a quick overview of your
                  text with a word count, character count, and an estimated
                  reading time.
                </li>
                <li>
                  <strong>Live Preview:</strong> See your changes in real-time
                  with an instant preview of your text.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={buttonStyle}
            >
              Why Use TextUtils?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                Our goal is to provide a reliable, efficient, and user-friendly
                tool for all your text-related needs. TextUtils is designed for
                simplicity and speed, helping you save time and focus on your
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
