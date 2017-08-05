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

const d = document,
  db = firebase.database(),
  contactsRef = db.ref().child('contacts'),
  form = d.getElementById('contact-form'),
  name = d.getElementById('name'),
  email = d.getElementById('email'),
  id = d.getElementById('id'),
  contactList = d.getElementById('contacts')

function contactTemplate ( { name, email } ) {
  return `
    <span class="name">${name}</span>
    <span class="email">${email}</span>
    <button class="edit">Editar</button>
    <button class="delete">Eliminar</button>
  `
}

form.addEventListener('submit', e => {
  e.preventDefault()
  //alert('Formulario enviado')
  let key = id.value || contactsRef.push().key,
    contactData = {
      name: name.value,
      email: email.value
    },
    updateData = {}

  updateData[`/${key}`] = contactData
  contactsRef.update(updateData)

  id.value = ''
  form.reset()
})

contactsRef.on('child_added', data => {
  let li = d.createElement('li')

  li.id = data.key
  li.innerHTML = contactTemplate( data.val() )
  contactList.appendChild(li)
})

contactsRef.on('child_changed', data => {
  let affectedNode = d.getElementById(data.key)
  affectedNode.innerHTML = contactTemplate( data.val() )
})

contactsRef.on('child_removed', data => {
  let affectedNode = d.getElementById(data.key)
  affectedNode.parentElement.removeChild(affectedNode)
})

//Delegación o Propagación de eventos

contactList.addEventListener('click', e => {
  let liParent = e.target.parentElement
  console.log(liParent)

  if ( e.target.classList.contains('edit') ) {
    //alert('editar contacto')
    name.value = liParent.querySelector('.name').innerText
    email.value = liParent.querySelector('.email').innerText
    id.value = liParent.id
  }

  if ( e.target.classList.contains('delete') ) {
    let id = liParent.id,
      deleteId = confirm(`¿Estás seguro de eliminar el contacto ${id}`)

    if ( deleteId ) {
      db.ref(`contacts/${id}`).remove()
    }
  }
})
