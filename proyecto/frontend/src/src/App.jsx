// Importamos React y los hooks useEffect y useState para manejar el estado y los efectos secundarios
import React, { useEffect, useState } from "react";

function App() {
  // Definimos un estado llamado "message" para almacenar el mensaje recibido de la API
  const [message, setMessage] = useState("");

  // useEffect se ejecuta después de que el componente se monta
  useEffect(() => {
    // Realizamos una solicitud a la API para obtener el mensaje
    fetch("http://localhost:8081/")
      .then((response) => {
        // Verificamos si la respuesta es válida
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        return response.json(); // Convertimos la respuesta a JSON
      })
      .then((data) => {
        // Actualizamos el estado con el mensaje recibido
        setMessage(data.message);
      })
      .catch((error) => {
        // Manejamos errores en la solicitud
        console.error("Error al consumir la API:", error);
      });
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez

  return (
    // Renderizamos el contenido del componente
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Mensaje desde API FastAPI:</h1>
      {/* Mostramos el mensaje recibido o un texto de "Cargando..." mientras esperamos */}
      <p>{message || "Cargando..."}</p>
    </div>
  );
}

export default App; // Exportamos el componente para usarlo en otros archivos
