import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="383660550343-qb1d6gtfknnh6eb0h5pctumgh4dui66h.apps.googleusercontent.com">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </GoogleOAuthProvider>
);
