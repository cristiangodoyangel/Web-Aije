import React from 'react';
import { themeVars } from '../theme';

export default function Header({ theme, onThemeChange }) {
  const colors = themeVars[theme] || themeVars.dark;
  return (
    <header style={{background:colors.background, padding:'1.2rem 0', boxShadow:`0 2px 12px ${colors.shadow}`, position:'sticky', top:0, zIndex:10}}>
      <div style={{maxWidth:1200, margin:'0 auto', padding:'0 24px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <img src="/assets/img/logo.png" alt="AJE Servicios Logo" style={{height:'64px', marginRight:'2rem', marginLeft:'-6px', filter:`drop-shadow(0 2px 8px ${colors.shadow})`}} />
        <nav>
          <ul style={{listStyle:'none', display:'flex', gap:'2rem', margin:0, padding:0}}>
            <li><a href="/" style={{color:colors.text, textDecoration:'none', fontWeight:'bold'}}>Inicio</a></li>
            <li><a href="/services" style={{color:colors.text, textDecoration:'none'}}>Servicios</a></li>
            <li><a href="/clients" style={{color:colors.text, textDecoration:'none'}}>Clientes</a></li>
            <li><a href="/contact" style={{color:colors.text, textDecoration:'none'}}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
