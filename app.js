"use strict";

// paquete express
const express = require('express');
var hbs = require('hbs');

const app = express();
// configuracion de puertos

// Variables de entorno para el puerto
require('dotenv').config();

const port = process.env.PORT || 8080;

app.set('view engine', 'hbs');

// inicializo directorio de componentes parciales: HBS
hbs.registerPartials(__dirname + '/views/partials');

// inicializo directorio de componentes generic: HBS
hbs.registerPartials(__dirname + '/views/generic');

// inicializo directorio de componentes elements: HBS
hbs.registerPartials(__dirname + '/views/elements');

// require('./helpers/helper');


// Uso de handdlebar hbs
app.get('/', (req, res) => {
    res.render('home', {
        name: 'Rodri',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Rodri',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Rodri',
        titulo: 'Curso de Node'
    });
});

/* app.get('/about', (req, res) => {
    res.render('about', { date: new Date().toLocaleString() }); // /views/avbout.hbs : 
}); */

// misddleware para especificar carpeta publica(vista por el susuario web) HTML
// __dirname: direccion de referencia
// http://localhost:8080/home.html -> va el .html
app.use(express.static('public'));

// Modificando url para redireccion /generic = /generic.html
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});

// Modificando url para redireccion /elements = /elements.html
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});

// uso de Handdlebar
/* app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // modifico respuesta del server
    res.render('home', {
        name: 'roDrigo iVan',
        date: new Date().toLocaleString()
    }); // /views/home.hbs
}); */

/* app.get('/', function(req, res) {
    res.send('Hello World')
});

app.get('/data', (req, res) => {
    res.send('Pagina data');
});
 */


app.listen(port, function() {
    console.log('Server its Up: http://localhost:' + port);
});