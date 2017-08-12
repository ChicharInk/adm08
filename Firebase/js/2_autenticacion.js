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


//https://firebase.google.com/docs/auth/

const auth = firebase.auth(),
  d = document,
  authMessage = d.getElementById('session-message'),
  formSignin = d.getElementById('signin'),
  formLogin = d.getElementById('login')

function createUserInDB ( uid, name, email ) {
  let usersRef = firebase.database().ref().child('users')

  usersRef.child(uid).set({
    name: name,
    email: email
  })
}

//console.log(auth)

/*
if ( auth.currentUser ) {
  console.log('Usuario Autenticado con currentUser')
} else {
  console.log('Usuario NO Autenticado con currentUser')
}
*/

auth.onAuthStateChanged(user => {
  console.log(user)
  if ( user ) {
    console.log('Usuario Autenticado con onAuthStateChanged()')
    authMessage.innerHTML = `
      <p>Si ves este contenido, es por que estás <b>logueado :)</b></p>
      <button id="logout">Salir</button>
    `
  } else {
    console.log('Usuario NO Autenticado con onAuthStateChanged()')
    authMessage.innerHTML = `<p>El contenido de esta sección es para <b>usuarios registrados</b></p>`
  }
})

formSignin.addEventListener('submit', e => {
  e.preventDefault()
  let message = d.getElementById('signin-message')

  //console.log(e.target.name.value, e.target.email.value, e.target.password.value)

  auth
    .createUserWithEmailAndPassword(
      e.target.email.value,
      e.target.password.value
    )
    .then(user => {
      console.log(user, user.uid)
      message.innerHTML = `<p class="ok">Usuario creado con el correo <b>${e.target.email.value}</b>. Se ha enviado un mensaje a tu bandeja de correo para activar tu cuenta.`
      user.sendEmailVerification()
      createUserInDB(
        user.uid,
        e.target.name.value,
        e.target.email.value
      )
      e.target.reset()
    })
    .catch(err => {
      console.log(err, err.message)
      message.innerHTML = `<p class="error">La cuenta de correo <b>${e.target.email.value}</b> ya existe. Intenta con otra.</p>`
      e.target.email.focus()
    })
})

d.addEventListener('click', e => {
  if ( e.target.matches('#logout') ) {
    //alert('logout')
    auth
      .signOut()
      .then(() => {
        console.log('Sesión terminada')
        authMessage.innerHTML = '<p>Sesión terminada</p>'
      })
      .catch(err => {
        console.log(err, err.message)
        authMessage.innerHTML = '<p>Error al terminar la sesión</p>'
      })
  }
})

formLogin.addEventListener('submit', e => {
  e.preventDefault()
  let message = d.getElementById('login-message')

  auth
    .signInWithEmailAndPassword(
      e.target.email.value,
      e.target.password.value
    )
    .then(user => {
      message.innerHTML = `<p class="ok">Usuario logueado con el correo <b>${e.target.email.value}</b>.</p>`
      e.target.reset()
    })
    .catch(err => {
      console.log(err, err.message)
      message.innerHTML = `<p class="error">Correo electrónico o password no son válidos. Verifica nuevamente tus datos<b>.</p>`
      e.target.password.focus()
    })
})
