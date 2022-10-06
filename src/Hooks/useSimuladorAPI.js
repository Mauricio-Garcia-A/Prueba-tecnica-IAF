
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
            titulo:'Contamos con  una HUB  en forma de bibliotecas digitales donde encontraras miles de artículos que guardan los conocimientos de mas de 30 años de experiencia.',
            descripcion:'Gracias a nuestro formato de vinculación HUB, nuestro instituto cuenta con la opción de invitar pacientes a nuestros protocolos clínicos únicamente a través de su médico tratante. Esto, con el fin de poner a su disposición medicamentos que únicamente están disponibles para protocolos de investigación, sin ningún costo para el paciente ni para el médico.',
            seleccionOpcionesDetalles: [
                {   texto:'VIDEO INFORMATIVO',
                linkURL:''
                },
                {   texto:'ARTICULOS DESTACADOS',
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
            titulo:'El Instituto Alexander Fleming cuenta con un plantel de profesionales de reconocida trayectoria nacional e internacional, consustanciado con el concepto multidisciplinario de la medicina moderna.',
            descripcion:'Este equipo de salud funciona, además, con gran efectividad en etapas de diagnóstico o tratamiento específico, luego de las cuales, el paciente retorna a su médico de cabecera o derivador con informes escritos para continuar con el proceso terapéutico en su lugar de origen.',
            seleccionOpcionesDetalles: [
            

                {   texto:'DEPTO DE ONCOLOGÍA',
                    linkURL:''
                },
                {   texto:'DEPTO DE CIRUGÍA ONCOLÓGICA',
                    linkURL:''
                },

                {   texto:'DEPTO DE MEDICINA INTERNA',
                    linkURL:''
                },
                {   texto:'DIAGNÓSTICO POR IMÁGENES',
                    linkURL:''
                },
                {   texto:'DEPTO DE RADIOTERAPIA',
                    linkURL:''
                },   
                {   texto:'DEPTO DE HEMATOLOGÍA',
                    linkURL:''
                },
                {   texto:'DEPTO DE ENFERMERÍA',
                    linkURL:''
                },

                {   texto:'TERAPIA INTENSIVA',
                    linkURL:''
                },
                {   texto:'CARDIO-ONCOLOGÍA',
                    linkURL:''
                },            
                {   texto:'SERVICIO DE PSICO-ONCOLOGIA',
                    linkURL:''
                },
                {   texto:'SERVICIO DE FARMACIA',
                    linkURL:''
                },
                {   texto:'CENTRO DE INVESTIGACIONES ',
                    linkURL:''
                }, 
                {   texto:'LABORATORIO CLÍNICOS',
                    linkURL:''
                }, 
            ]
        },
        {
            tipo:'noticias',
            titulo:'Informando siempre las ultimas Noticias en Oncología',
            descripcion:'Web de Revista Noticias. Información de todo lo que pasa en el IAF, en Argentina y el mundo, relacionado con la salud. Entender cambia la vida.',
            seleccionOpcionesDetalles: [
                {   texto:'ULTIMAS NOTICIAS',
                    linkURL:''
                },
                {   texto:'INFORMACION SALUD',
                    linkURL:''
                },   
            ]
        },
        {
            tipo:'cursos-de-oncologia',
            titulo:'Brindamos a nuestros profesionales una serie de capacitaciones para fomentar su desarrollo profecional',
            descripcion:'Aprende en el mejor centro-escuela en salud y con  los mejores docentes. Cursos  de capacitación relacionados a la salud, en modalidad presencial y virtual.',
            seleccionOpcionesDetalles: [
                {   texto:'ANUALES',
                linkURL:''
                },
                {   texto:'EVENTUALES',
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
