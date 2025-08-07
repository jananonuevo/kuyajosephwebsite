// src/main.tsx

// 1. Import React and ReactDOM to render the app
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2. Import the main App component
import App from './App.tsx';

// 3. Import the CSS file (optional but common)
import './index.css';

// 4. Import the BrowserRouter from React Router
// This makes the routing functionality available to your entire app
import { BrowserRouter } from 'react-router-dom';

// 5. Find the root element in the HTML file
const rootElement = document.getElementById('root');

if (rootElement) {
  // 6. Create the root and render the App component
  // The App component is wrapped in <BrowserRouter> and <React.StrictMode>
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  // Optional: A safety check in case the root element isn't found
  console.error('Root element with ID "root" not found in the document.');
}