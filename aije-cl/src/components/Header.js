import React from 'react';

export default function Header() {
  return (
    <header style={{background:'#111', padding:'1.2rem 0', boxShadow:'0 2px 12px #0005', position:'sticky', top:0, zIndex:10}}>
      <div style={{maxWidth:1200, margin:'0 auto', padding:'0 24px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <img src="/assets/img/logo.png" alt="AJE Servicios Logo" style={{height:'64px', marginRight:'2rem', marginLeft:'-6px', filter:'drop-shadow(0 2px 8px #0008)'}} />
        <nav>
          <ul style={{listStyle:'none', display:'flex', gap:'2rem', margin:0, padding:0}}>
            <li><a href="/" style={{color:'#fff', textDecoration:'none', fontWeight:'bold'}}>Inicio</a></li>
            <li><a href="/about" style={{color:'#fff', textDecoration:'none'}}>Nosotros</a></li>
            <li><a href="/services" style={{color:'#fff', textDecoration:'none'}}>Servicios</a></li>
            <li><a href="/rentals" style={{color:'#fff', textDecoration:'none'}}>Arriendos</a></li>
            <li><a href="/solarpanels" style={{color:'#fff', textDecoration:'none'}}>Paneles Solares</a></li>
            <li><a href="/parts" style={{color:'#fff', textDecoration:'none'}}>Repuestos</a></li>
            <li><a href="/clients" style={{color:'#fff', textDecoration:'none'}}>Clientes</a></li>
            <li><a href="/contact" style={{color:'#fff', textDecoration:'none'}}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
