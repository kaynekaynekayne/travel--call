import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './style/globalStyle';
import App from './app';
import { AuthContextProvider } from "./context/authContext";
import { PostContextProvider } from './context/postContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostContextProvider>
        <GlobalStyles />
        <App />
      </PostContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

