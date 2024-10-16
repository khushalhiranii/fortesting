import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Function to render the app
export const renderReactApp = (containerId) => {
  const container = document.getElementById(containerId);
  if (container) {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error(`No container found with ID: ${containerId}`);
  }
};

// Expose render function globally
window.renderReactApp = renderReactApp;
