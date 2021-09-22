require('dotenv').config({path:'./.env'});
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estáticos
app.use( express.static('public') );

const nombre = 'Jhonnatan Suarez';
const titulo = 'Curso de Node';
 
 
app.get('/', (req, res) => {
    res.render('home', {
        nombre,
        titulo
    });
});

app.get('/generic', (req, res) => {
    // res.sendFile( __dirname + '/public/generic.html');
    res.render('generic', {
        nombre,
        titulo
    });
});

app.get('/elements', (req, res) => {
    // res.sendFile( __dirname + '/public/elements.html');
    res.render('elements', {
        nombre,
        titulo
    });
});

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});