import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Ensure document.getElementById('root') is valid
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("❌ Error: Could not find the 'root' element in index.html. Ensure it exists.");
}

// Create and render the React root
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
