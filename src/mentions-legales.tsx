import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MentionsLegales from './components/MentionsLegales.tsx';
import '@fontsource-variable/urbanist';
import '@fontsource-variable/inter';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MentionsLegales />
  </StrictMode>
);
