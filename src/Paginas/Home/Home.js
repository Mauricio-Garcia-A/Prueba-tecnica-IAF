import React from 'react';
import logo from '../../Imagenes/logo-iaf.png'

import '../../EstilosGlobales/EstilosGlobales.css'
import './Home.css'
import IconoRedSocial from '../../Componentes/IconosSVG/IconoRedSocial';
import { Link } from 'react-router-dom';
import useSEO from '../../Hooks/useSEO';


export default function Home(props) {


  useSEO({title: 'HOME', description:'aaaa'})
    const redesSociales = [
        {   nombre:'instagram',
            linkURL:'http://www.google.com'
        },
        {   nombre:'facebook',
            linkURL:'http://www.google.com'
        },
        {   nombre:'twitter',
            linkURL:'http://www.google.com'
        },
        {   nombre:'linkedin',
            linkURL:'http://www.google.com'
        },
    ]

    const seleccionUsuario = [
        {   texto:'SOY PACIENTE  O FUTURO PACIENTE',
            rol:'paciente',
        },
        {   texto:'SOY PROFECIONAL MEDICO',
            rol:'profecional-medico',
        },
    ]

    return (
        <div className='contenedor-Home texto-standar-1-EstillosGlobales contenedor-standar-EstillosGlobales '>
            <header className='contenedor-logo-Home'>
                <img src={logo} className="logo-Home" alt="logo" />
            </header>
            <section>
                <h1>CLÍNICA PRIVADA DE MAYOR PRESTIGIO EN ARGENTINA Y AMERICA LATINA, CON MÁS DE 50 ESPECIALIDADES MÉDICAS.</h1>
                <div className='contenedor-botones-seleccio-usuario-Home'>
                    {seleccionUsuario.map((usuario,i)=>{
                        return <Link 
                                    key={`Usuario-${i}`} 
                                    to={`/${usuario.rol}`} 
                                >
                                    <button className='boton-standar-1-EstillosGlobales'>
                                        {usuario.texto}
                                    </button>  
                                </Link>
                    })}
                </div>
            </section>
            <footer>
                <h2 >Comprometidos con vos. Por eso, Sabemos Como Cuidarte.</h2>
                <div className='contenedor-botones-redes-sociales-Home'>
                    {redesSociales.map((redSocial,i)=>{
                        return <button key={`RedSocial-${i}`} className='boton-redes-sociales-EstillosGlobales'>
                                    <IconoRedSocial tipo={redSocial.nombre} width='35px'/>
                                </button>
                    })}                
                </div>
            </footer>
            

        </div>
    );
}
