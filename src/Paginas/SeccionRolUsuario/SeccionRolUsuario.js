import React, { useState } from 'react';
import logo from '../../Imagenes/logo-iaf.png'
import imgNuevaTecnologia from '../../Imagenes/img-nueva-tegnologia.png'
import mapa1 from '../../Imagenes/mapa1.png'
import mapa2 from '../../Imagenes/mapa2.png'
import mapa3 from '../../Imagenes/mapa3.png'
import mapa4 from '../../Imagenes/mapa4.png'

import '../../EstilosGlobales/EstilosGlobales.css'
import './SeccionRolUsuario.css'
import IconoSVG from '../../Componentes/IconosSVG/IconoSVG';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BreadCrumbs from '../../Componentes/BreadCrumbs/BreadCrumbs';
import useSimuladorAPI from '../../Hooks/useSimuladorAPI';
import VentanaModal from '../../Componentes/VentanaModal/VentanaModal';
import useSEO from '../../Hooks/useSEO';


const ContenidoModalLogin= () => {
    return(
        <div className='contenidoModal-login'>
            <span>¡Hola! Ingresa al PORTAL de IAF</span>
            <div className='imgPerfil'>
                <svg  width="90" height="90px" fill="rgba(255, 255, 255, 0.7)" style={{padding:'5px'}}  viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
            </div>
            <span>Ingresá tu e-mail o usuario</span>
            <input placeholder="Teléfono, e-mail o usuario"></input>
            <button className='boton-standar-1-EstillosGlobales' style={{ height:'50px' }}>Continuar</button>
            <button className='b2'>Crear cuenta</button>
            <Link to='/Prueba-tecnica-IAF' className='b1'>Volver al HOME</Link>  
        </div>
    )
}

const ContenidoModalContacto=()=> {
    return (
        <div className='contenedorModal-contacto'>
            <h3>DATOS DE CONTACTO</h3> 
            <div className='informacion-contacto'>
                 <span><IconoSVG tipo='telefono' width='20px' /><b>TELEFONO:</b>  (+54 11) 3221-8900</span>                       
                <span><IconoSVG tipo='email' width='20px' /><b>E-MAIL:</b>  informes@alexanderfleming.org</span>
                <span><IconoSVG tipo='direccion' width='20px' /><b>DIRECCION:</b>  1180 Crámer, CABA, Arg.</span>
        
                <br />
                <label >Nombre y Apellido:</label>
                <input />
                <label>E-mail:</label>
                <input />
                <label>Mensaje:</label>
                <textarea></textarea>
            </div>
                    
            <button className='boton-standar-1-EstillosGlobales' style={{ height:'50px' }}>Enviar</button>
           
            <hr />
            <Link to='/Prueba-tecnica-IAF' className='b1'>Volver al HOME</Link>
        </div>
    )
}

export default function SeccionRolUsuario(props) {

    let { id } = useParams()
    let navigate = useNavigate();
    let categoriasBreadCrums = [
        id.replace('-', ' ')
    ]

    const tituloSeo = id.replace('-', ' ')
    const descripcionSeo = `Descripcion`
    useSEO({title: tituloSeo, description: descripcionSeo})



    const sedes = [
        {   Direccion:'Sede Central Colegiales: Conesa 1003-1005',
            imagenURL: mapa1
        },
        {   Direccion:' Sede Unidad Oncología Cutánea: Conesa 1003-1005',
            imagenURL: mapa1
        },
        {   Direccion:'Sede Conesa 1075 (extensión Diagnóstico  por Imágenes)',
            imagenURL: mapa2
        },
        {   Direccion:'Sede Barrio Parque (Swiss Medical Center): San Martin de Tour 2980',
            imagenURL: mapa3
        },
        {   Direccion:'Sede Saavedra (Internación) Dr. Rómulo Naón  4244',
            imagenURL: mapa4
        },

    ]

    const {rolSeleccionado}=useSimuladorAPI({rol:id})

    const titulo = rolSeleccionado.titulo
    const seleccionOpciones = rolSeleccionado.opciones

    const [mapaSeleccionado, setMapaseleccionado]=useState(sedes[0].imagenURL)
    const [linkSeleccionado, setLinkSeleccionado]=useState(0)
    const handleClick =(indice)=>{
        setMapaseleccionado(sedes[indice].imagenURL)
        setLinkSeleccionado(indice)
    }

    return (
        <div  className='contenedor-SeccionRolUsuario texto-standar-1-EstillosGlobales contenedor-standar-EstillosGlobales '>
            <div>
                <div className='contenedor-control-pagina-EstillosGlobales'>
                    <button onClick={()=>navigate(-1)} className='boton-back-GlobalStyle'><IconoSVG tipo='flecha-izquierda' width='30px'/></button>
                    <BreadCrumbs categorias={categoriasBreadCrums} />
                </div>
                <header className='encabezado-SeccionRolUsuario'>
                    <img src={logo} className="logo-SeccionRolUsuario" alt="logo" />
                    <h2>MUCHO MÁS QUE ONCOLOGÍA</h2>
                    <VentanaModal titulo="CONTACTO Y TELÉFONOS ÚTILES" textoBoton='CONTACTO Y TELÉFONOS ÚTILES' estilosBoton='boton-standar-3-EstillosGlobales'>
                        {ContenidoModalContacto()}
                        
                    </VentanaModal>
                </header>                
            </div>
            <section>
                <h1>{titulo}</h1>
                <div className='contenedor-informacion-SeccionRolUsuario'>
                    <div className='seccion-nuevas-tecnologias-SeccionRolUsuario'>
                        <img src={imgNuevaTecnologia} className="imagen-nueva-tecnologia-SeccionRolUsuario" alt="logo" />
                        <h3 className='texto-nueva-tecnologia-SeccionRolUsuario'>NUEVA TECNOLOGÍA</h3>
                        <VentanaModal titulo="NUEVA TECNOLOGÍA - INGRESA AL PORTAL" textoBoton='INGRESA A MI PORTAL' estilosBoton='boton-nueva-tecnologia-SeccionRolUsuario  boton-standar-2-EstillosGlobales'>
                            <ContenidoModalLogin />
                        </VentanaModal>
                    </div>
                    <div className='contenedor-sedes-SeccionRolUsuario'>
                        <div className='contenedor-informacion-sedes-SeccionRolUsuario'>
                            <h3>CONOCE NUESTRAS SEDES</h3>
                            <div  className='lista-sedes-SeccionRolUsuario'>
                                {sedes.map((sede,i)=>{
                                    return <button 
                                                key={`sede-${i}`} 
                                                className={ i === linkSeleccionado ? 'link-sede-SeccionRolUsuario active':'link-sede-SeccionRolUsuario'} 
                                                onClick={()=>handleClick(i)}
                                            >
                                                {sede.Direccion}
                                            </button>
                                })}                        
                            </div>
                        </div>
                        <div className='contenedor-mapa-sedes-SeccionRolUsuario'>
                        <img src={mapaSeleccionado} className="imagen-mapa-SeccionRolUsuario" alt="logo" />
                        </div>
                    </div>    
                </div>
            </section>
            <div>
                {seleccionOpciones.map((opcion,i)=>{
                    return <Link 
                                key={`opcion-SP-${i}`} 
                                
                                to={`/${id}/${opcion.textoURL}/`}
                            >
                                <button className='boton-standar-2-EstillosGlobales'>{opcion.texto}</button>
                            </Link>
                })}    
            </div>
            <footer>
                <button className='boton-chat-SeccionRolUsuario'>
                    <IconoSVG tipo='chat' width='60px' />
                </button>
            </footer>

        </div>
    );
}

