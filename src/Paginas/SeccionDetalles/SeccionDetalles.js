import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import logo from '../../Imagenes/logo-iaf.png'
import imagenSitioConstruccion from '../../Imagenes/sitioConstruccion.png'
import useSimuladorAPI from '../../Hooks/useSimuladorAPI';
import BreadCrumbs from '../../Componentes/BreadCrumbs/BreadCrumbs';
import IconoSVG from '../../Componentes/IconosSVG/IconoSVG';
import useSEO from '../../Hooks/useSEO';
import VentanaModal from '../../Componentes/VentanaModal/VentanaModal';

import '../../EstilosGlobales/EstilosGlobales.css'
import './SeccionDetalles.css'



export default function SeccionDetalles(props) {
    let { id, opcion} = useParams()
    let navigate = useNavigate();
    let categoriasBreadCrums = [
        id.replace('-', ' '),
        opcion.replace('-', ' ')
    ]

    const tituloSeo =  opcion.replace('-', ' ')
    const descripcionSeo = `Descripcion`
    useSEO({title: tituloSeo, description: descripcionSeo})

    const {opcionSeleccionada}=useSimuladorAPI({tipo:opcion})

    return (
        <div  className='contenedor-SeccionDetalles texto-standar-1-EstillosGlobales contenedor-standar-EstillosGlobales '>
            <div>
                <div className='contenedor-control-pagina-EstillosGlobales'>
                    <button onClick={()=>navigate(-1)} className='boton-back-GlobalStyle'><IconoSVG tipo='flecha-izquierda' width='30px'/></button>
                    <BreadCrumbs categorias={categoriasBreadCrums} />
                </div>
                <header className='encabezado-SeccionDetalles'>
                    <div className='contenedor-logo-SeccionDetalles'>
                        <img src={logo} className="logo-SeccionDetalles" alt="logo" />
                    </div>
                    <h2 className='titulo-seccion-SeccionDetalles'>MUCHO MÁS QUE ONCOLOGÍA</h2>
                </header>                
            </div>

            <section className='contenedor-informacion-SeccionDetalles'>
                <h1 className='titulo-SeccionDetalles'>{opcionSeleccionada.titulo}</h1>
                <p className='subtitulo-SeccionDetalles'>{opcionSeleccionada.descripcion}</p>
            </section>               
            <div className='contenedor-botones-detalles-SeccionDetalles'>
                {opcionSeleccionada.seleccionOpcionesDetalles.map((opcion,i)=>{
                    return  <VentanaModal 
                                titulo={opcion.texto} 
                                textoBoton={opcion.texto} 
                                estilosBoton='boton-standar-4-EstillosGlobales'
                                key={`opcion-SD-${i}`}
                            >
                                <img src={imagenSitioConstruccion} className="logo-SeccionDetalles" alt="logo" />
                                <Link to='/Prueba-tecnica-IAF' className='b1'>Volver al HOME</Link>  
                            </VentanaModal>
                    })} 
            </div>
            <footer>

            </footer>
        </div>
    );
}