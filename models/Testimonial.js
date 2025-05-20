import Sequelize from 'sequelize';
import db from '../config/db.js';

//Definimos nuestro primer módelo
//Viaje: nombre de mi modelo 
//Viajes: este es el nombre de la tabla
export const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.TEXT
    },

});