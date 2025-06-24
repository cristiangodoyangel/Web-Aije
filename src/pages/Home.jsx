import React from 'react';

const servicios = [
  { nombre: 'Mecánica Premium', icono: '🚗' },
  { nombre: 'Pintura de Alta Gama', icono: '🎨' },
  { nombre: 'Diagnóstico Avanzado', icono: '🛠️' },
  { nombre: 'Aire Acondicionado', icono: '❄️' },
  { nombre: 'Soldadura Especializada', icono: '⚡' },
  { nombre: 'Asistencia en Ruta', icono: '🚨' },
];

export default function Home() {
  return (
    <div style={{background:'#111'}}>
      {/* HERO SECTION */}
      <section
        style={{
          minHeight: '60vh',
          background: `linear-gradient(90deg, rgba(17,17,17,0.95) 70%, rgba(225,6,0,0.6)), url('https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '4rem 2rem',
          color: '#fff',
        }}
      >
        <h1 style={{color:'#e10600', fontSize:'3rem', marginBottom:'1rem', textShadow:'1px 1px 8px #000'}}>AJE Servicios Integrales</h1>
        <h2 style={{color:'#fff', fontWeight:400, marginBottom:'2rem', fontSize:'2rem', maxWidth:'500px', textShadow:'1px 1px 8px #000'}}>
          Especialistas en autos de alta gama
        </h2>
        <a
          href="/contact"
          style={{
            background:'#e10600',
            color:'#fff',
            padding:'1rem 2.5rem',
            borderRadius:'30px',
            fontWeight:'bold',
            fontSize:'1.1rem',
            textDecoration:'none',
            boxShadow:'0 4px 24px rgba(225,6,0,0.3)'
          }}
        >
          Solicita tu servicio
        </a>
      </section>

      {/* SERVICIOS DESTACADOS */}
      <section style={{background:'#181818', padding:'3rem 1rem'}}>
        <h3 style={{color:'#e10600', textAlign:'center', marginBottom:'2rem', fontSize:'2rem'}}>Servicios Destacados</h3>
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'2rem'}}>
          {servicios.map((serv, idx) => (
            <div
              key={idx}
              style={{
                background:'#232323',
                color:'#fff',
                borderRadius:'16px',
                boxShadow:'0 2px 10px #0006',
                padding:'2rem 1.5rem',
                minWidth:'180px',
                textAlign:'center',
                borderTop:'3px solid #e10600',
                transition:'transform 0.2s',
                fontSize:'1.1rem',
              }}
            >
              <div style={{fontSize:'2.2rem', marginBottom:'0.7rem'}}>{serv.icono}</div>
              <span>{serv.nombre}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
