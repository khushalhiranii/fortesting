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
    const root = ReactDOM.createRoot(container);  // Create root inside function
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error(`No container found with ID: ${containerId}`);
  }
};

window.renderReactApp = renderReactApp;
window.unmountReactApp = (containerId) => {
  const container = document.getElementById(containerId);
  if (container) {
    ReactDOM.unmountComponentAtNode(container);
  }
};

// You can call renderReactApp immediately for local testing
// if (document.getElementById('root')) {
//   renderReactApp('root'); // Default container ID for local testing
// }

// Measure performance if needed
reportWebVitals();
