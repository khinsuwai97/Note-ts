import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NoteProvider from './context/note-context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NoteProvider>
      <App />
    </NoteProvider>
  </React.StrictMode>
);
