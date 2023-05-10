const express = require('express');
const app = express();
const cors = require('cors');
const match = require('./routes/match.js');
const user = require('./stores/user.js');

app.use(cors());
app.use('/',match);
app.use('/',user);

app.get('/', (req, res) => {
  res.send('Hola mundo')
});

app.post('/', (req, res) => {
    const user = req.body;
    console.log(user); // Aquí deberías poder ver los datos del usuario enviados desde Svelte
    // ...
  });

app.listen(3000, () => {
  console.log('Servidor ExpressJS iniciado en el puerto 3000');
});