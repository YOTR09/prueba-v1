import React from "react";
import Card from "./Card"; // Importamos el componente de tarjeta
import Chart from "./Chart"; // Importamos el componente de gráfico
import "./Dashboard.css"; // Estilos del dashboard

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Contenedor de tarjetas */}
      <div className="dashboard-cards">
        <Card title="New/Updated CVEs" endpoint="/api/cves" />
        <Card title="Distribution of vulnerabilities by CVSS scores" endpoint="/api/cvss" />
      </div>

      {/* Contenedor de gráficos */}
      <div className="dashboard-charts">
        <Chart title="Vulnerabilities by type & year" endpoint="/api/vulnerabilities" />
      </div>
    </div>
  );
}

export default Dashboard;