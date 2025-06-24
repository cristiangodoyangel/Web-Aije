import React from 'react';

export default function Header() {
  return (
    <header style={{background:'#111', color:'#fff', padding:'1rem 0'}}>
      <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <div style={{fontWeight:'bold', fontSize:'1.5rem', color:'#e10600'}}>AJE Servicios Integrales</div>
        <nav>
          <a href="/" style={{margin:'0 1rem'}}>Inicio</a>
          <a href="/about" style={{margin:'0 1rem'}}>Nosotros</a>
          <a href="/services" style={{margin:'0 1rem'}}>Servicios</a>
          <a href="/rentals" style={{margin:'0 1rem'}}>Arriendos</a>
          <a href="/solarpanels" style={{margin:'0 1rem'}}>Paneles Solares</a>
          <a href="/parts" style={{margin:'0 1rem'}}>Repuestos</a>
          <a href="/clients" style={{margin:'0 1rem'}}>Clientes</a>
          <a href="/contact" style={{margin:'0 1rem'}}>Contacto</a>
        </nav>
      </div>
    </header>
  );
}
