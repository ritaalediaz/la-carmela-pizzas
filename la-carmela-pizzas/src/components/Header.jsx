import { useState } from "react";
import "../assets/styles/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="main-nav">
        <div className="menu-container">
          {/* Botón hamburguesa */}
          <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </div>

          {/* Menú principal */}
          <ul className={`menu-derecha ${menuOpen ? "open" : ""}`}>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#quienes">Quiénes Somos</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

