import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactQueryConfig from './reactQuery';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryConfig>
      <App />
    </ReactQueryConfig>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
