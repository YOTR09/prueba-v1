import React, { useEffect, useState } from "react";
import "./Card.css"; // Estilos de las tarjetas

function Card({ title, endpoint }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Llamado al backend (por ahora no recibe datos)
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error al obtener datos:", error));
  }, [endpoint]);

  return (
    <div className="card">
      <h3>{title}</h3>
      {/* Mostramos los datos o un mensaje de carga */}
      <p>{data ? JSON.stringify(data) : "Cargando datos..."}</p>
    </div>
  );
}

export default Card;