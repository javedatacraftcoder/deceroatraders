'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  useEffect(() => {
    // Asegurar que Bootstrap JS esté disponible en el cliente
    if (typeof window !== "undefined" && window.bootstrap) {
      const dropdownElements = document.querySelectorAll('.dropdown-toggle');
      dropdownElements.forEach(dropdown => {
        new window.bootstrap.Dropdown(dropdown);
      });
    } else {
      console.error("Bootstrap JS no está cargado correctamente.");
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">Mi Sitio</Link>

        {/* Botón de menú hamburguesa */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú principal */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contacto">Contacto</Link>
            </li>

            {/* Dropdown de Herramientas */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="herramientasDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Herramientas
              </a>
              <ul className="dropdown-menu" aria-labelledby="herramientasDropdown">
                <li><Link className="dropdown-item" href="/herramientas/opcion1">Opción 1</Link></li>
                <li><Link className="dropdown-item" href="/herramientas/opcion2">Opción 2</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/videos">Videos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/foro">Foro</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
