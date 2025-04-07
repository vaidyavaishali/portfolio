import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // If you have custom global styles
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Tailwind CSS
import 'tailwindcss/tailwind.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
