import React from "react";
import "./Sidebar.css"; // Importamos los estilos de la barra lateral

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-section">
        <li className="sidebar-title">Vulnerabilities</li>
        <li>By Date</li>
        <li>By Type</li>
        <li>Known Exploited</li>
        <li>Assigners</li>
        <li>CVSS Scores</li>
        <li>EPSS Scores</li>
        <li>Search</li>
      </ul>
      <ul className="sidebar-section">
        <li className="sidebar-title">Vulnerable Software</li>
        <li>Vendors</li>
        <li>Products</li>
        <li>Version Search</li>
      </ul>
      <ul className="sidebar-section">
        <li className="sidebar-title">Vulnerability Intel.</li>
        <li>Newsfeed</li>
        <li>Open Source Vulns</li>
        <li>Emerging CVEs</li>
        <li>Feeds</li>
        <li>Exploits</li>
        <li>Advisories</li>
        <li>Code Repositories</li>
        <li>Code Changes</li>
      </ul>
      <ul className="sidebar-section">
        <li className="sidebar-title">Attack Surface</li>
        <li>My Attack Surface</li>
        <li>Digital Footprint</li>
        <li>Discovered Products</li>
        <li>Detected Vulns</li>
        <li>IP Search</li>
      </ul>
      <ul className="sidebar-section">
        <li className="sidebar-title">Other</li>
      </ul>
    </div>
  );
}

export default Sidebar;