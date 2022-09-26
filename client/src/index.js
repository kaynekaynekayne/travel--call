import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './style/globalStyle';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

