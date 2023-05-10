const express = require('express');
const router = express.Router();



router.get('/user', (req, res) => {
    // tu lógica de manejo de la ruta aquí
    let person = {
        name: 'Juan Alberto Gutierrez',
        age: 28,
        orientacion: 'Heterosexual',
        location: 'Medellin/Antioquia',
        hobbies: ['Cocinar', 'Leer', 'Viajar','Comer','Jugar Videojuegos','Perrear','Ver peliculas','Escuchar musica','Bailar tango','Salchipapa','Salsa choke'
                  ,'Comer pescado','Jugar futbol'],
        descripcion: 'Hola me llamo juan y en realidad no existo pero es un buen test para la pagina :D',
        Hombre: true
      };
    res.json(person);
  });
  
  module.exports = router;