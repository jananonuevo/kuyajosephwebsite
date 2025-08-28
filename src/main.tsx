import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'

const clientId = '655279390543-ce4g000dm0duq97oicvbo3n35i6k624n.apps.googleusercontent.com'; //hide this please

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <GoogleOAuthProvider clientId={clientId}>
        <BrowserRouter>
         <App />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </React.StrictMode>
  );
} else {
  console.error('Root element with ID "root" not found in the document.');
}