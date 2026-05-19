# TextUtils - Your Go-To Text Utility

A clean, responsive, and fast React.js web application designed to analyze, manipulate, and format text in real-time. 

## 🚀 Features

*   **Convert to UpperCase**: Instantly transform all input text into CAPITAL letters.
*   **Convert to LowerCase**: Change all text to lowercase letters effortlessly.
*   **Clear Text**: Wipe the entire input text box clean with a single click.
*   **Copy Text**: Copy the processed text directly to your clipboard for quick sharing.
*   **Remove Extra Spaces**: Clean up messy formatting by removing redundant spaces between words.
*   **Real-Time Text Summary**: Instantly track your exact word count, character count, and estimated reading time (e.g., 0.024 minutes read).
*   **Live Preview**: View a dynamic preview of your text formatting before copying it elsewhere.
*   **Dark Mode Support**: Built-in navigation toggle switch to shift comfortably between light and dark themes.

## 📦 Prerequisites

Before running this project locally, ensure you have the following installed:
*   [Node.js](https://nodejs.org) (v16 or higher recommended)
*   npm (comes bundled with Node.js)

## 🛠️ Getting Started

Follow these quick steps to get a local development copy up and running:

### 1. Clone the Repository
```bash
git clone https://github.com
cd TextUtils-Your-Go-To-Text-Utility
```

### 2. Install Dependencies
This command reads your configuration and safely builds your local tracking directory without cluttering the repository:
```bash
npm install
```

### 3. Run the Application
Start the local development server:
```bash
npm start
```
*Open [http://localhost:3000](http://localhost:3000) to view your text utility app in the browser.*

## 📁 Project Structure

```text
├── node_modules/   # Third-party dependencies (git-ignored)
├── public/         # Static assets and index.html
├── src/            # React components, text utility logic, and CSS styles
├── .gitignore      # Specifies files for Git to ignore
├── package.json    # Project metadata and dependencies configuration
└── README.md       # Project documentation
```

## 🏗️ Production Build

To build the application for a live production deployment, run:
```bash
npm run build
```
This generates an optimized, minified production package inside a newly created `build/` folder, ready to be hosted on platforms like Netlify, Vercel, or GitHub Pages.
