import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';  // Asegúrate de que App.js está en la misma carpeta

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
