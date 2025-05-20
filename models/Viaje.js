import Sequelize from 'sequelize';
import db from '../config/db.js';

//Definimos nuestro primer módelo
//Viaje: nombre de mi modelo 
//Viajes: este es el nombre de la tabla
export const Viaje = db.define('viajes', {
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    },
});