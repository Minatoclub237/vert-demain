import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import '@fontsource-variable/urbanist';
import '@fontsource-variable/inter';
import './index.css';
import { installerMesure } from './lib/mesure';

installerMesure();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
