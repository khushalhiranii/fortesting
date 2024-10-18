import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const renderReactApp = (containerId) => {
  const container = document.getElementById(containerId);
  if (container) {
    const root = ReactDOM.createRoot(container);
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

// Local testing
if (document.getElementById('root')) {
  renderReactApp('root');
}

reportWebVitals();
