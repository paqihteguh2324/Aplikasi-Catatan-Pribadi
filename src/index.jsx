import React from 'react';
import { createRoot } from 'react-dom/client';
import AppNotes from './AppNotes';
import { BrowserRouter } from 'react-router-dom';

import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <div className="app-container">
  <BrowserRouter>
  <AppNotes />
  </BrowserRouter>
  </div>
);
