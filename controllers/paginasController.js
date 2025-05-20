//Importa los modelos Viaje y Testimonial desde sus respectivos archivos
import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimonial.js';


// Controlador para renderizar la pagina de inicio
const paginaInicio = async (req, res) => {

    const promises = []; // Arreglo para almacenar promesas de consultas a la BD.

    // Agrega la consulta para obtener los primeros 3 viajes
    promises.push(Viaje.findAll({
        limit: 3
    }));

    // Agrega la consulta para obtener los primeros 3 testimoniales
    promises.push(Testimonial.findAll({
        limit: 3
    }));

    try {
        //Ejecuta todas las promesas en paralelo y espera sus resultados
        const resultado = await Promise.all(promises);

        console.log(resultado[0]); //Muestra en consola los viajes obtenidos

        //Renderiza la vista 'inicio' con los datos obtenidos y variables adicionales 
        res.render('inicio', {
            viajes: resultado[0],               // Viajes obtenidos
            testimoniales: resultado[1],        // Testimoniales obtenidos
            clase: 'home',                      // Calse CSS opcional para el diseño
            page: 'Inicio',                     // Titulo de la pagina
        });
    } catch (error) {
        console.log(error); // Muestra errores si algo falla
    }
}



// Controlador para renderizar la pagina 'Nosotros'
const paginaNosotros = async (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros' // Titulo de la pagina
    });
}

//Controlador para renderizar la pagina de viajes con todos los registros
const paginaViajes = async (req, res) => {
    const viajes = await Viaje.findAll(); // Consulta todos los viajes desde la BD

    res.render('viajes', {
        pagina: 'Proximos Viajes', // Titulo de la pagina
        viajes,                    // Datos de los viajes
    });
}

// Controlador para mostrar todos los Testimoniales
const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll(); // Consulta todos los testimoniales
        res.render('testimoniales', {
            testimoniales,         // Datos de los testimoniales
            page: 'Testimoniales'  // Titulo de la página
        });
    } catch (error) {
        console.log(error); // Muestra errores si algo falla
    }
}

// Controlador para mostrar el detalle de un viaje según su slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;    // Extrae el parámetro 'slug' de la URL

    try {
        // Busca un viaje que coincida con el slug recibido
        const viaje = await Viaje.findOne({ where: { slug } });

        // Renderiza la vista con los detalles del viaje encontrado
        res.render('viaje', {
            pagina: 'Información Viaje', // Titulo de la pagina
            viaje                        // Datos del viaje
        });
    } catch (error) {
        console.log(error); // Muestra errores si algo falla
    }
}

const guardarTestimonial = async (req, res) => {
    // Lógica para guardar el testimonial
    console.log('Testimonial recibido:', req.body);
    res.redirect('/testimoniales');
};

// Exporta todos los controladores para ser usados en las rutas
export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje,
    guardarTestimonial

};