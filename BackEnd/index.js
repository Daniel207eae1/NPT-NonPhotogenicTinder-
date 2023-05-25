const express = require("express");
const app = express();
const cors = require("cors");
const match = require("./routes/match.js");
const user = require("./stores/user.js");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

app.use(cors());

app.use(
  cors({
    origin: "*", // Cambia esto a tu dominio o '*' para permitir cualquier origen
    methods: ["GET", "POST"], // Métodos HTTP permitidos
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

var admin = require("firebase-admin");
var serviceAccount = require("./nonphotogenictinder-7d03b-firebase-adminsdk-i8laq-6891a32a36.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.get("/protected", (req, res) => {
  console.log("asd" + req);
  console.log("ddd" + req.headers.authorization.length);

  const idToken = req.headers.authorization.split(" ")[1];
  console.log(idToken);
  // Verificar el token de autenticación utilizando Firebase
  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      // Aquí puedes realizar acciones adicionales según las necesidades de tu proyecto

      res.json({ message: "Acceso autorizado" });
    })
    .catch((error) => {
      // Manejar errores de verificación del token
      res.status(401).json({ error: "Token inválido" });
      console.log(error);
    });
});

/*
const db = getFirestore();

const res = db.collection('Usuarios').add({
  name: 'Tokyo',
  country: 'Japan'
});

console.log('Added document with ID: ', res.id);
*/

app.use("/", match);
app.use("/", user);

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.post("/", (req, res) => {
  const user = req.body;
  console.log(user); // Aquí deberías poder ver los datos del usuario enviados desde Svelte
  // ...
});

app.listen(3000, () => {
  console.log("Servidor ExpressJS iniciado en el puerto 3000");
});
