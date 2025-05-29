import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider 
      theme={{
        colors: {
          vert: [
            "#e8fcfa", "#daf5f2", "#b4e9e3", "#8cddd3", "#6bd3c6", 
            "#56cdbe", "#49caba", "#39b2a3", "#2a9d8f", "#0c8a7d"
          ,]
        },
        primaryColor: 'vert',
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);

reportWebVitals();
