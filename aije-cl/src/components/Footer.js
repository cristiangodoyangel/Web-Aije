import React from 'react';

export default function Footer() {
  return (
    <footer style={{background:'#111', color:'#d1d1d1', textAlign:'center', padding:'1.5rem 0', marginTop:'2rem'}}>
      <div>AJE Servicios Integrales &copy; {new Date().getFullYear()} | Autos de Alta Gama</div>
    </footer>
  );
}
