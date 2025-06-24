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
        <div style={{marginLeft:'2rem', display:'flex', alignItems:'center'}}>
          <div style={{display:'flex', alignItems:'center', gap:'0.7rem'}}>
            <span style={{color: colors.text, fontWeight: 500, fontSize:'1rem'}}>{theme === 'dark' ? '🌙' : '☀️'}</span>
            <button
              aria-label="Cambiar tema"
              onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
              style={{
                width: 46,
                height: 26,
                borderRadius: 16,
                border: 'none',
                background: theme === 'dark' ? '#444' : '#ccc',
                boxShadow: '0 1px 4px #0002',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                cursor: 'pointer',
                transition: 'background 0.2s',
                padding: 0,
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: theme === 'dark' ? 4 : 24,
                  top: 3,
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: theme === 'dark' ? colors.buttonBg : '#fff',
                  boxShadow: '0 1px 4px #0003',
                  transition: 'left 0.2s, background 0.2s',
                  display: 'block',
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
