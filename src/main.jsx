// // src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Self-executing function to load the widget
(function () {
    const widgetDiv = document.createElement('div');
    widgetDiv.id = 'lms-widget';
    document.body.appendChild(widgetDiv);

    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('lms-widget')
    );
})();
