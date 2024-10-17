import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a root reference
const root = ReactDOM.createRoot(document.getElementById('root'));

// Function to render the app in the specified container
const renderReactApp = (containerId) => {
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

// Expose the render function globally
window.renderReactApp = renderReactApp;

// Optional: Unmount function to clean up
window.unmountReactApp = (containerId) => {
  const container = document.getElementById(containerId);
  if (container) {
    ReactDOM.unmountComponentAtNode(container);
  }
};

// You can call renderReactApp immediately for local testing
if (document.getElementById('root')) {
  renderReactApp('root'); // Default container ID for local testing
}

// Measure performance if needed
reportWebVitals();
