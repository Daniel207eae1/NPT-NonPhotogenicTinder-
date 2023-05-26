const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");

app.use(bodyParser.json());
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
const db = getFirestore();
const Usuarios = db.collection("Usuarios");

app.post("/SearchUser", (req, res) => {
  const uid = req.body.uid;
  let found = false;
  let userenviar = null;
  Usuarios.get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const docid = doc.id;
        const data = doc.data();
        // Hacer algo con los datos de cada documento
        if (docid !== uid) {
          console.log("UID " + uid + "  DOCID  " + docid);
          let quiz = true;
          console.log("FOUNDUID");
          Usuarios.doc(uid)
            .collection("Story")
            .get()
            .then((snapshot) => {
              snapshot.forEach((doc) => {
                const subdocid = doc.id;
                const subdata = doc.data();
                console.log(subdocid);
                // Hacer algo con los datos de cada documento
                if (docid == subdocid) {
                  quiz = false;
                  return;
                }
              });
            })
            .catch((error) => {
              console.log("Error al obtener subdocumentos", error);
            });
          if (quiz) {
            console.log(data);
            found = true;
            userenviar = data;
            return;
          }
        }
      });
      if (found == true) {
        res.send(userenviar);
      } else {
        res.send(null);
      }
    })
    .catch((error) => {
      console.log("Error al obtener documentos", error);
    });
});

app.post("/NewUser", (req, res) => {
  // tu lógica de manejo de la ruta aquí
  const uid = req.body.uid;
  console.log(uid);
  let found = false;

  Usuarios.get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const docid = doc.id;
        const data = doc.data();
        // Hacer algo con los datos de cada documento
        if (docid == uid) {
          console.log("UNSSSENDDD");
          if (data.Configurado) {
            found = true;
          }
          return;
        }
      });
      console.log("asd" + found);
      if (found == true) {
        res.send(true);
      } else {
        res.send(false);
      }
    })
    .catch((error) => {
      console.log("Error al obtener documentos", error);
    });
});

app.post("/ConfigUsers", (req, res) => {
  const { personHobbies, person } = req.body;
  let pd = false;

  if (person.name.length > 2) {
    console.log("ass");
    if (person.hetero !== null) {
      console.log("as2");
      if (person.location.length > 4) {
        console.log("ass3");
        if (person.descripcion.length > 100) {
          console.log("ass4");
          if (person.age > 15) {
            console.log("ass5");
            if (person.hombre !== null) {
              console.log("ass6");
              if (personHobbies.length >= 10) {
                person.personHobbies = personHobbies;
                console.log(person.personHobbies);
                console.log(person.id);
                // Crear un nuevo documento en la colección de Usuarios en Firestore
                db.collection("Usuarios")
                  .doc(person.id)
                  .set({
                    ...person,
                  })
                  .then(() => {
                    console.log("Usuario configurado en Firestore");
                    res.send(true); // Enviar un valor booleano true si el usuario se crea correctamente
                  })
                  .catch((error) => {
                    console.error("Error al crear usuario en Firestore", error);
                    res.send(false); // Enviar un valor booleano false si hay un error al crear el usuario
                  });

                db.collection("Usuarios")
                  .doc(person.id)
                  .collection("Story")
                  .doc(person.id)
                  .set({
                    Match: false,
                  })
                  .then(() => {
                    console.log("Story configurado en Firestore");
                  })
                  .catch((error) => {
                    console.error("Error al crear usuario en Firestore", error);
                  });
                pd = true;
              }
            }
          }
        }
      }
    }
  }
  if (pd == false) {
    res.send(false);
  }
});

app.post("/GetUser", (req, res) => {
  const uid = req.body.uid;
  db.collection("Usuarios")
    .doc(uid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const userData = doc.data();
        res.send(userData);
      } else {
        res.send(null); // Si no se encuentra el usuario, enviar null
      }
    })
    .catch((error) => {
      console.error("Error al obtener el usuario", error);
      res.send(null); // Si hay un error, enviar null
    });
});

app.get("/", (req, res) => {
  res.send("Conectado.");
});
app.post("/", (req, res) => {
  const user = req.body;
  console.log(user); // Aquí deberías poder ver los datos del usuario enviados desde Svelte
  // ...
});
app.listen(3000, () => {
  console.log("Servidor ExpressJS iniciado en el puerto 3000");
});

/*
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
*/
