// Initialize Firebase
const config = {
  apiKey: "AIzaSyC2ybeda5lWTpQJ8MO7zUZOtxQrdQu103c",
  authDomain: "ddwg09.firebaseapp.com",
  databaseURL: "https://ddwg09.firebaseio.com",
  projectId: "ddwg09",
  storageBucket: "ddwg09.appspot.com",
  messagingSenderId: "1056555848040"
}

firebase.initializeApp(config)

const hola = document.getElementById('hola'),
  nombre = document.getElementById('nombre'),
  db = firebase.database(),
  refSaludo = db.ref().child('saludo'),
  refName = db.ref().child('name')

  refSaludo.on('value', data => {
    hola.innerText = data.val()
    console.log(data.key, data.val())
  })

  refName.on('value', data => {
    nombre.innerText = data.val()
    console.log(data.key, data.val())
  })
