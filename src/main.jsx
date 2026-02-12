import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ColorConverter from './components/ColorConverter.jsx';
import './ColorConverter.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorConverter />
  </StrictMode>
);