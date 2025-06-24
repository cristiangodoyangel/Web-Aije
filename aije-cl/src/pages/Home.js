import React from 'react';
import { FiSettings, FiDroplet, FiTool, FiWind, FiZap, FiAlertCircle, FiCpu, FiRefreshCcw, FiPackage, FiSliders, FiUserCheck } from 'react-icons/fi';

const servicios = [
  {
    nombre: 'Mecánica Premium',
    icono: <FiSettings color="#e10600" size="2.3rem" style={{strokeWidth: 0.8, opacity: 0.7}} />,
    descripcion: 'Mantención, reparación y diagnóstico para autos de alta gama con tecnología avanzada.'
  },
  {
    nombre: 'Mecánica General',
    icono: <FiTool color="#e10600" size="2.3rem" style={{strokeWidth: 0.8, opacity: 0.7}} />,
    descripcion: 'Reparaciones y soluciones mecánicas para todo tipo de vehículos.'
  },
  {
    nombre: 'Escáner Automotriz',
    icono: <FiCpu color="#e10600" size="2.3rem" style={{strokeWidth: 0.8, opacity: 0.7}} />,
    descripcion: 'Diagnóstico computarizado y escaneo de sistemas electrónicos.'
  },
  {
    nombre: 'Regeneración DPF Electrónica',
    icono: <FiRefreshCcw color="#e10600" size="2.3rem" style={{strokeWidth: 0.8, opacity: 0.7}} />,
    descripcion: 'Limpieza y regeneración de filtros de partículas diésel (DPF).'
  },
  {
    nombre: 'Fabricación de Piezas',
    icono: <FiPackage color="#e10600" size="2.3rem" style={{strokeWidth: 0.8, opacity: 0.7}} />,
    descripcion: 'Fabricación y ajuste de piezas y estructuras a medida.'
  },
  {
    nombre: 'Afinamiento',
    icono: <FiSliders color="#e10600" size="2.3rem" style={{strokeWidth: 0.8, opacity: 0.7}} />,
    descripcion: 'Optimización y ajuste de motor para máximo rendimiento.'
  },
  {
    nombre: 'Servicio de Asesoría',
    icono: <FiUserCheck color="#e10600" size="2.3rem" style={{strokeWidth: 0.8, opacity: 0.7}} />,
    descripcion: 'Asesoría profesional para compra y revisión de vehículos.'
  },
  {
    descripcion: 'Fabricación y ajuste de piezas y estructuras a medida.'
  },
  {
    nombre: 'Afinamiento',
    icono: <FiSliders color="#e10600" size="2.3rem" style={{strokeWidth: 0.8, opacity: 0.7}} />,
    descripcion: 'Optimización y ajuste de motor para máximo rendimiento.'
  },
  {
    nombre: 'Servicio de Asesoría',
    icono: <FiUserCheck color="#e10600" size="2.3rem" style={{strokeWidth: 0.8, opacity: 0.7}} />,
    descripcion: 'Asesoría profesional para compra y revisión de vehículos.'
  },
  {
    nombre: 'Pintura de Alta Gama',
    icono: <FiDroplet color="#e10600" size="2.3rem" style={{strokeWidth: 0.8, opacity: 0.7}} />,
    descripcion: 'Acabados de pintura premium, detailing y protección para vehículos exclusivos.'
  },
  {
    nombre: 'Diagnóstico Avanzado',
    icono: <FiTool color="#e10600" size="2.3rem" style={{strokeWidth: 0.8, opacity: 0.7}} />,
    descripcion: 'Equipos de escaneo y diagnóstico electrónico para todas las marcas de lujo.'
  },
  {
    nombre: 'Aire Acondicionado',
    icono: <FiWind color="#e10600" size="2.3rem" style={{strokeWidth: 0.8, opacity: 0.7}} />,
    descripcion: 'Servicio y reparación de climatización para máximo confort en tu auto premium.'
  },
  {
    nombre: 'Soldadura Especializada',
    icono: <FiZap color="#e10600" size="2.3rem" style={{strokeWidth: 0.8, opacity: 0.7}} />,
    descripcion: 'Soldaduras finas y estructurales, restauración de partes y piezas exclusivas.'
  },
  {
    nombre: 'Asistencia en Ruta',
    icono: <FiAlertCircle color="#e10600" size="2.3rem" style={{strokeWidth: 0.8, opacity: 0.7}} />,
    descripcion: 'Rescate, grúa y asistencia rápida para vehículos de alta gama.'
  },
];

export default function Home() {
  return (
    <div style={{background:'#181818', minHeight:'100vh', paddingBottom:'2rem'}}>
      {/* HERO MINIMALISTA */}
      <section
        style={{
          minHeight: '36vh',
          background: `url('/assets/img/hero.png') center/contain no-repeat`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '3.8rem 2rem 1.5rem 2rem',
          color: '#fff',
          borderBottom: '1px solid #232323',
          borderRadius: '0 0 24px 24px',
        }}
      >
      </section>
      <div style={{maxWidth:1200, margin:'0 auto', padding:'0 24px'}}>

        {/* GRID DE LOGOS DE AUTOS DE ALTA GAMA */}
        <section style={{maxWidth:1100, margin:'0 auto', padding:'2.5rem 0 0 0', display:'flex', justifyContent:'center'}}>
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit, minmax(100px, 1fr))',
            gap:'2.2rem',
            width:'100%',
            alignItems:'center',
            justifyItems:'center',
          }}>
            {/* Audi */}
            <span style={{transition:'filter 0.4s', filter:'grayscale(1) opacity(0.7)', cursor:'pointer'}} onMouseOver={e=>e.currentTarget.style.filter='none'} onMouseOut={e=>e.currentTarget.style.filter='grayscale(1) opacity(0.7)'}>
            <img src="/assets/img/audi.png" alt="AJE Servicios Logo" style={{height:'64px', marginRight:'2rem', marginLeft:'-6px', filter:'drop-shadow(0 2px 8px #0008)'}} />
            </span>
            {/* BMW */}
            <span style={{transition:'filter 0.4s', filter:'grayscale(1) opacity(0.7)', cursor:'pointer'}} onMouseOver={e=>e.currentTarget.style.filter='none'} onMouseOut={e=>e.currentTarget.style.filter='grayscale(1) opacity(0.7)'}>
            <img src="/assets/img/bmw.png" alt="AJE Servicios Logo" style={{height:'64px', marginRight:'2rem', marginLeft:'-6px', filter:'drop-shadow(0 2px 8px #0008)'}} />
            </span>
            {/* Mercedes */}
            <span style={{transition:'filter 0.4s', filter:'grayscale(1) opacity(0.7)', cursor:'pointer'}} onMouseOver={e=>e.currentTarget.style.filter='none'} onMouseOut={e=>e.currentTarget.style.filter='grayscale(1) opacity(0.7)'}>
            <img src="/assets/img/mercedes.png" alt="AJE Servicios Logo" style={{height:'64px', marginRight:'2rem', marginLeft:'-6px', filter:'drop-shadow(0 2px 8px #0008)'}} />
            </span>
            {/* Porsche */}
            <span style={{transition:'filter 0.4s', filter:'grayscale(1) opacity(0.7)', cursor:'pointer'}} onMouseOver={e=>e.currentTarget.style.filter='none'} onMouseOut={e=>e.currentTarget.style.filter='grayscale(1) opacity(0.7)'}>
            <img src="/assets/img/porshe.png" alt="AJE Servicios Logo" style={{height:'64px', marginRight:'2rem', marginLeft:'-6px', filter:'drop-shadow(0 2px 8px #0008)'}} />
            </span>
            {/* Ferrari */}
            <span style={{transition:'filter 0.4s', filter:'grayscale(1) opacity(0.7)', cursor:'pointer'}} onMouseOver={e=>e.currentTarget.style.filter='none'} onMouseOut={e=>e.currentTarget.style.filter='grayscale(1) opacity(0.7)'}>
            <img src="/assets/img/ferrari.png" alt="AJE Servicios Logo" style={{height:'64px', marginRight:'2rem', marginLeft:'-6px', filter:'drop-shadow(0 2px 8px #0008)'}} />
            </span>
            {/* Lamborghini */}
            <span style={{transition:'filter 0.4s', filter:'grayscale(1) opacity(0.7)', cursor:'pointer'}} onMouseOver={e=>e.currentTarget.style.filter='none'} onMouseOut={e=>e.currentTarget.style.filter='grayscale(1) opacity(0.7)'}>
            <img src="/assets/img/lambo.png" alt="AJE Servicios Logo" style={{height:'64px', marginRight:'2rem', marginLeft:'-6px', filter:'drop-shadow(0 2px 8px #0008)'}} />
            </span>
            {/* Tesla */}
            <span style={{transition:'filter 0.4s', filter:'grayscale(1) opacity(0.7)', cursor:'pointer'}} onMouseOver={e=>e.currentTarget.style.filter='none'} onMouseOut={e=>e.currentTarget.style.filter='grayscale(1) opacity(0.7)'}> 
            <img src="/assets/img/tesla.png" alt="AJE Servicios Logo" style={{height:'64px', marginRight:'2rem', marginLeft:'-6px', filter:'drop-shadow(0 2px 8px #0008)'}} />
            </span>
          </div>
        </section>

        {/* GRID DE SERVICIOS MINIMALISTA */}

        {/* CONTACTO Y UBICACIÓN */}
        <section style={{maxWidth:1100, margin:'0 auto', padding:'3.5rem 0 1rem 0'}}>
          <div style={{background:'#202124', borderRadius:18, boxShadow:'0 2px 18px #0004', padding:'2.5rem 2rem', display:'flex', flexWrap:'wrap', gap:'2.5rem', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{flex:'1 1 320px', minWidth:260}}>
              <h2 style={{color:'#fff', fontSize:'2rem', fontWeight:600, marginBottom:'1.1rem', letterSpacing:'-1px'}}>Contacto</h2>
              <div style={{color:'#eee', fontSize:'1.1rem', marginBottom:'0.7rem'}}><b>Teléfono:</b> <a href="tel:+56912345678" style={{color:'#e10600', textDecoration:'none'}}>+56 9 1234 5678</a></div>
              <div style={{color:'#eee', fontSize:'1.1rem', marginBottom:'0.7rem'}}><b>Email:</b> <a href="mailto:contacto@premiumautoservice.cl" style={{color:'#e10600', textDecoration:'none'}}>contacto@premiumautoservice.cl</a></div>
              <div style={{color:'#eee', fontSize:'1.1rem'}}><b>Dirección:</b> Av. Las Industrias 1234, Santiago, Chile</div>
            </div>
            <div style={{flex:'1 1 370px', minWidth:260, maxWidth:510}}>
              <div style={{borderRadius:14, overflow:'hidden', boxShadow:'0 2px 14px #0006'}}>
                <iframe
                  title="Mapa Premium Auto Service"
                  src="https://www.google.com/maps?q=-33.45694,-70.64827&z=15&output=embed"
                  width="100%"
                  height="260"
                  style={{border:0, width:'100%', minHeight:'220px'}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section style={{maxWidth:1100, margin:'0 auto', padding:'3rem 0 1rem 0'}}>
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))',
            gap:'1.5rem',
          }}>
            {servicios.map((serv, idx) => (
              <div
                key={idx}
                style={{
                  background:'#191919',
                  borderRadius:'13px',
                  border:'1.5px solid #232323',
                  padding:'2.2rem 1.2rem 1.6rem 1.2rem',
                  color:'#fff',
                  textAlign:'center',
                  transition:'box-shadow 0.18s, border 0.18s',
                  boxShadow:'0 1px 7px #0004',
                  minHeight:'190px',
                  display:'flex',
                  flexDirection:'column',
                  alignItems:'center',
                  justifyContent:'center',
                  cursor:'default',
               
            }}
            onMouseOver={e => {
              e.currentTarget.style.boxShadow = '0 0 10px 4px #fff9, 0 2px 10px #0002';
            }}
            onMouseOut={e => {
              e.currentTarget.style.boxShadow = '0 2px 14px #0002';
            }}
              >
                <div style={{fontSize:'2.3rem', marginBottom:'0.5rem', color:'#e10600'}}>{serv.icono}</div>
                <div style={{fontWeight:500, fontSize:'1.07rem', marginBottom:'0.45rem', letterSpacing:'-0.5px'}}>{serv.nombre}</div>
                <div style={{fontSize:'0.98rem', color:'#b8b8b8', fontWeight:300, lineHeight:1.4}}>{serv.descripcion}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
