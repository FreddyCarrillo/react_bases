import React from 'react';
import ReactDOM from 'react-dom/client';
import { SaludarUsuario } from './components/SaludarUsuario';
import { FirstApplication } from './components/FirstApplication';
import { CounterApp } from './components/CounterApp';
import "./styles.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp  value={20} />
  </React.StrictMode>,
)
