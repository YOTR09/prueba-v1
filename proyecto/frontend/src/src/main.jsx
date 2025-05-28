// Importamos StrictMode para detectar problemas potenciales en la aplicación
import { StrictMode } from 'react';
// Importamos createRoot para renderizar la aplicación en el DOM
import { createRoot } from 'react-dom/client';
// Importamos los estilos globales
import './index.css';
// Importamos el componente principal de la aplicación
import App from './App.jsx';

// Renderizamos la aplicación en el elemento con id "root" en el archivo HTML
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Envolvemos la aplicación en StrictMode para habilitar comprobaciones adicionales */}
    <App />
  </StrictMode>,
);
