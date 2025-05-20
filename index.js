// Importa el modulo 'express', que es un framework para
// // constrir aplicaciones wen en node.js
import express from 'express';
// Llamamos el archivo que se encuentra en la carpeta de rutas.
import router from './routes/index.js';
// Configuramos la base de datos
import db from './config/db.js';

// Conectar la base de datos 
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch( error => console.log(error));

// Crea una instancia de una aplicación de Express
const app = express();

// Defione el puerto en el que el servidor escuchará
// Usa el valor definido en la variable de entorno PORT,
// o en el puerto 3000 por defecto si no está definida
const port = process.env.PORT || 3000;

// Agregar Router
// Soporta GET, POST, DELETE PUT
// Agrega las diagonales en las rutas que usemos
app.use('/', router);

//Definir la carpeta publica
app.use(express.static('public'));

// Inicia el servidor para que escuche en el puerto especificado 
app.listen(port, () => {
    // Muestra un mensaje en la consola cuando el servidor ha 
    // iniciado correctamente
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});

// Habilitar el PUG
app.set('view engine', 'pug');
app.set('views', './views');

// Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    //Los locals me permiten compartir valores de un archivo a una vista
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    //Si no cambia de middleware lo obligamos a cambiar de middleware (función)
    next();
});

// Ruta raiz 
app.get('/', (req,res) => {
    res.send('¡Bienvenido a la pagina principal!');
});

// Ruta 1: res.send - Respuesta directa de texto
app.get('/send', (req, res) => {
    res.send('Hola desde res.send');
});

// Ruta 2: res.json - Envío de datos JSON
app.get('/json', (req, res) => {
    res.json({ mensaje: 'Hola en formato JSON', usuario : 'Yuli', activo: true });
});

// Ruta 3: res.redirect - Redireccionamiento
app.get('/redirigir', (req, res) => {
    res.redirect('/json');
});

// Ruta 4: res.render - Renderizar vista con datos
app.get('/vista', (req, res) => {
    res.render('index', { titulo: 'Hola desde EJS', usuario: 'Juan' });
});

// Ruta 5: req.query - Obtener parámetros de consulta (URL)
app.get('/buscar', (req, res) => {
    const { nombre, edad } = req.query;
    res.send(`Parámetros recibidos: nombre = ${nombre}, edad = ${edad}`);
});

// Ruta 6: req.params - Obtener parámetros en la ruta
app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    res.send(`ID de usuario recibido: ${id}`);
});

// 