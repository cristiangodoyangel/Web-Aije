import React from 'react';

import { themeVars } from '../theme';
export default function Footer({ theme = 'dark' }) {
  const colors = themeVars[theme] || themeVars.dark;
  return (
    <footer style={{background: colors.navBg, color: colors.cardText, textAlign:'center', padding:'1.5rem 0', marginTop:'2rem'}}>
      <div>AJE Servicios Integrales &copy; {new Date().getFullYear()} | Autos de Alta Gama</div>
    </footer>
  );
}
