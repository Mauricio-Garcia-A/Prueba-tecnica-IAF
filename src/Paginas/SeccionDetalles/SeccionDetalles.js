import React from 'react';
import logo from '../../Imagenes/logo-iaf.png'

import '../../EstilosGlobales/EstilosGlobales.css'
import './SeccionDetalles.css'
import useSimuladorAPI from '../../Hooks/useSimuladorAPI';
import { useNavigate, useParams } from 'react-router-dom';
import BreadCrumbs from '../../Componentes/BreadCrumbs/BreadCrumbs';
import IconoSVG from '../../Componentes/IconosSVG/IconoSVG';
import useSEO from '../../Hooks/useSEO';

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
                    return  <button key={`opcion-SD-${i}`} className='boton-standar-4-EstillosGlobales'>
                                {opcion.texto}
                            </button>
                    })} 
            </div>
            <footer>

            </footer>
        </div>
    );
}