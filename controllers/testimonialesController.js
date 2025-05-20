// Importa el modelo Testimonial desde la carpeta models 
import { Testimonial } from '../models/Testimonial.js'

// Define una funcion 
const guardarTestimonial = async (req, res) => {

    // Extrae los campos
    const {nombre, correo, mensaje } = req.body
}