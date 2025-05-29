import React, { useState } from "react";
import "./Navbar.css"; // Importamos los estilos de la barra de navegación

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Función para alternar entre modo oscuro y claro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <nav className="navbar">
      {/* Nombre YOHA en el lado izquierdo */}
      <div className="navbar-brand">YOHA</div>

      {/* Contenedor de elementos alineados a la derecha */}
      <div className="navbar-right">
        {/* Botón para cambiar entre modo oscuro y claro */}
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>

        {/* Recuadro para loguearse */}
        <div className="login-box">
          <input type="text" placeholder="Usuario" className="login-input" />
          <button className="login-button">Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;