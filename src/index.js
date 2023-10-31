import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// axios.defaults.baseURL = 'http://10.129.2.207:5050/';
// axios.defaults.baseURL = 'http://10.129.2.25:7000/';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

