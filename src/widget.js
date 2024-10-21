import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const LMSWidget = {
  init: (elementId, options) => {
    ReactDOM.render(<App/>, document.getElementById(elementId));
  },
};

export default LMSWidget;
