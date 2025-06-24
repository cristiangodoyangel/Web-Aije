import React from 'react';
import { FiSettings, FiDroplet, FiTool, FiWind, FiZap, FiAlertCircle, FiCpu, FiRefreshCcw, FiPackage, FiSliders, FiUserCheck } from 'react-icons/fi';
import { themeVars } from '../theme';

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

export default function Home({ theme = 'dark' }) {
  const colors = themeVars[theme] || themeVars.dark;
  return (
    <div style={{background: colors.background, minHeight:'100vh', paddingBottom:'2rem', color: colors.text}}>
      {/* HERO MINIMALISTA */}
      <section
        style={{
          minHeight: '38vh',
          background: `url('/assets/img/hero.png') center/cover no-repeat`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '3.8rem 2rem 1.5rem 2rem',
          color: theme === 'dark' ? '#fff' : '#222',
          borderBottom: theme === 'dark' ? '1px solid #232323' : '1px solid #e2e2e2',
          borderRadius: '0 0 24px 24px',
          backgroundColor: theme === 'dark' ? 'transparent' : '#e6e6e6',
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

         {/* CONTACTO Y UBICACIÓN */}
         <section style={{maxWidth:1100, margin:'0 auto', padding:'3.5rem 0 1rem 0'}}>
          <div style={{background: colors.sectionBg, borderRadius:18, boxShadow:'0 2px 18px #0004', padding:'2.5rem 2rem', display:'flex', flexWrap:'wrap', gap:'2.5rem', justifyContent:'space-between', alignItems:'stretch'}}>
            <div style={{flex:'1 1 350px', minWidth:260, display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <h2 style={{color: colors.heroText, fontSize:'2rem', fontWeight:700, marginBottom:'1.1rem', letterSpacing:'-1px'}}>CONTACTO</h2>
              <div style={{color: colors.cardText, fontSize:'1.1rem', marginBottom:'0.5rem'}}><b>Email:</b> <a href="mailto:contacto@aije.cl" style={{color: colors.buttonBg, textDecoration:'none'}}>adm.talleresaje@gmail.com</a></div>
              <div style={{color: colors.cardText, fontSize:'1.1rem', marginBottom:'0.5rem'}}><b>WhatsApp:</b> <a href="https://wa.me/56948572202" style={{color: colors.buttonBg, textDecoration:'none'}}>+56 9 4857 2202</a></div>
              <div style={{color: colors.cardText, fontSize:'1.1rem', marginBottom:'0.5rem'}}><b>Empresa:</b> Aje Servicios Integrales</div>
              <div style={{color: colors.cardText, fontSize:'1.1rem', marginBottom:'1.1rem'}}><b>Dirección:</b> Llanquihue 3932, Antofagasta</div>
              <form style={{display:'flex', flexDirection:'column', gap:'1rem', marginTop:'0.2rem'}} onSubmit={e => {e.preventDefault(); alert('¡Mensaje enviado!');}}>
                <input type="text" placeholder="Nombre y Apellido" required style={{padding:'0.8rem', borderRadius:8, border:`1.5px solid ${colors.inputBorder}`, background:colors.inputBg, color:colors.inputText, fontSize:'1.07rem', outline:'none'}} />
                <input type="email" placeholder="Correo Electrónico" required style={{padding:'0.8rem', borderRadius:8, border:`1.5px solid ${colors.inputBorder}`, background:colors.inputBg, color:colors.inputText, fontSize:'1.07rem', outline:'none'}} />
                <input type="text" placeholder="WhatsApp" required style={{padding:'0.8rem', borderRadius:8, border:`1.5px solid ${colors.inputBorder}`, background:colors.inputBg, color:colors.inputText, fontSize:'1.07rem', outline:'none'}} />
                <textarea placeholder="Mensaje" required rows={3} style={{padding:'0.8rem', borderRadius:8, border:`1.5px solid ${colors.inputBorder}`, background:colors.inputBg, color:colors.inputText, fontSize:'1.07rem', outline:'none', resize:'vertical', minHeight:'60px'}} />
                <button type="submit" style={{padding:'0.9rem', borderRadius:8, border:'none', background:colors.buttonBg, color:colors.buttonText, fontWeight:600, fontSize:'1.1rem', letterSpacing:'1px', boxShadow:`0 2px 12px ${colors.buttonShadow}`, cursor:'pointer', transition:'background 0.2s'}}>Enviar</button>
              </form>
            </div>
            <div style={{flex:'1 1 370px', minWidth:260, maxWidth:510, display:'flex', alignItems:'center'}}>
              <div style={{borderRadius:14, overflow:'hidden', boxShadow:'0 2px 14px #0006', width:'100%'}}>
                <iframe
                  title="Mapa Aje Servicios Integrales"
                  src="https://www.google.com/maps?q=-23.6583289,-70.4007852&z=17&output=embed"
                  width="100%"
                  height="320"
                  style={{border:0, width:'100%', minHeight:'220px'}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
