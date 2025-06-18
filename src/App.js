// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // 保留或移除，看您是否使用此 CSS
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);