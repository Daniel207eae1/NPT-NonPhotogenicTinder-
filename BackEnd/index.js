const express = require('express');
const app = express();
const cors = require('cors');
const match = require('./routes/match.js');
const user = require('./stores/user.js');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

var admin = require("firebase-admin");
var serviceAccount = require("../nonphotogenictinder-7d03b-firebase-adminsdk-i8laq-39dcc46eb3.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = getFirestore();
const res = db.collection('Usuarios').add({
  name: 'Tokyo',
  country: 'Japan'
});

console.log('Added document with ID: ', res.id);


app.use(cors());
app.use('/',match);
app.use('/',user);

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.post('/', (req, res) => {
    const user = req.body;
    console.log(user); // Aquí deberías poder ver los datos del usuario enviados desde Svelte
    // ...
  });

app.listen(3000, () => {
  console.log('Servidor ExpressJS iniciado en el puerto 3000');
});