
export default function useSimuladorAPI({tipo='especialidades-medicas', rol='paciente'}) {
    const opciones = [
        {
            tipo:'especialidades-medicas',
            titulo:'Con más de 50 especialidades y un plantel médico de reconocida trayectoria nacional e internacional.',
            descripcion:'El 14 de marzo de 1994, el Instituto Alexander Fleming abrió sus puertas a la excelencia médica y científica. Hoy somos una de las instituciones de mayor prestigio en el país.',
            seleccionOpcionesDetalles: [
                {   texto:'STAFF MÉDICO',
                    linkURL:'http://www.google.com'
                },
                {   texto:'CAPACITATE EN IAF',
                    linkURL:'http://www.google.com'
                },
                {   texto:'AREAS MÉDICAS',
                    linkURL:'http://www.google.com'
                },
                {   texto:'PUBLICACIONES',
                    linkURL:'http://www.google.com'
                },
                {   texto:'ECHO - ENSAYOS CLINICOS',
                    linkURL:'http://www.google.com'
                },
            ]

        },
        {
            tipo:'aprende-de-tu-diagnostico',
            titulo:'A partir de tu diagnostico prende a reconocer los síntomas y procedimientos a seguir',
            descripcion:'Desde IAF te brindamos un asesoramiento genético de oncología',
            seleccionOpcionesDetalles: [
                {   texto:'¿QUE ES EL CANCER?',
                linkURL:'http://www.google.com'
                },
                {   texto:'QUE TIPOS DE CANCER EXISTEN',
                    linkURL:'http://www.google.com'
                },   
            ]
        },
        {
            tipo:'hub-del-paciente',
            titulo:'',
            descripcion:'',
            seleccionOpcionesDetalles: [
                {   texto:'',
                linkURL:''
                },
                {   texto:'',
                    linkURL:''
                },   
            ]
        },
        {
            tipo:'historia-del-instituto',
            titulo:'Con una trayectoria de casi 30 años de historia cuidando la salud de las personas',
            descripcion:'El 14 de marzo de 1994, el Instituto Alexander Fleming abrió sus puertas a la excelencia médica y científica. Hoy somos una de las instituciones de mayor prestigio en el país.',
            seleccionOpcionesDetalles: [                
                {   texto:'HISTORIA DEL INSTITUTO',
                    linkURL:'http://www.google.com'
                },   
            ]
        },
        {
            tipo:'visita-del-staff-medico',
            titulo:'',
            descripcion:'',
            seleccionOpcionesDetalles: [
                {   texto:'',
                linkURL:''
                },
                {   texto:'',
                    linkURL:''
                },   
            ]
        },
        {
            tipo:'noticias',
            titulo:'',
            descripcion:'',
            seleccionOpcionesDetalles: [
                {   texto:'',
                linkURL:''
                },
                {   texto:'',
                    linkURL:''
                },   
            ]
        },
        {
            tipo:'cursos-de-oncologia',
            titulo:'',
            descripcion:'',
            seleccionOpcionesDetalles: [
                {   texto:'',
                linkURL:''
                },
                {   texto:'',
                    linkURL:''
                },   
            ]
        },
    ]

   let opcionSeleccionada = opciones.filter(opcion=>opcion.tipo === tipo)[0]


    const informacionSeccionRol = [
        {
            rol:'paciente',
            titulo:'Tu bienestar es nuestra mayor prioridad.',
            opciones: [
                {   texto:'ESPECIALIDADES MÉDICAS',
                    textoURL:'especialidades-medicas'
                },
                {   texto:' APRENDE DE TU DIAGNOSTICO',
                    textoURL:'aprende-de-tu-diagnostico'
                },
                {   texto:'HUB DEL PACIENTE VIDEOS INFORMATIVOS',
                    textoURL:'hub-del-paciente'
                },
                {   texto:'HISTORIA DEL INSTITUTO',
                    textoURL:'historia-del-instituto'
                },
                {   texto:'VISITA DEL STAFF MEDICO',
                    textoURL:'visita-del-staff-medico'
                },
                {   texto:'NOTICIAS',
                    textoURL:'noticias'
                },
            ],
        },
        {
            rol:'profecional-medico',
            titulo:'Tu formacion tecnica y profecional es nuestra mayor prioridad.',
            opciones: [
                {   texto:'CURSOS DE ONCOLOGÍA',
                    textoURL:'cursos-de-oncologia'
                },
            ],
        },

    ]
    
    let rolSeleccionado = informacionSeccionRol.filter(opcion=>opcion.rol === rol)[0]



    return { opcionSeleccionada, rolSeleccionado};
}
