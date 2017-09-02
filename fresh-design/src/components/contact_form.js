export const contactForm = () => {
  return `
    <form class="ContactForm">
      <legend>Envíanos tus comentarios</legend>
      <input type="text" name="nombre" placeholder="Escribe tu nombre" title="Tu nombre sólo acepta letras y espacios" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
      <input type="email" name="email" placeholder="Escribe tu email" title="Tu email" pattern="^[_a-z0-9-]+(\\.[_a-z0-9-]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,4})$" required>
      <input type="text" name="asunto" title="Asunto a tratar" placeholder="Asunto a tratar" required>
      <textarea name="comentarios" title="Tus comentarios" placeholder="Escribe tus comentarios" cols="50" rows="5" required></textarea>
      <input type="submit" value="Enviar">
    </form>
  `
}

export const validateForm = () => {
  let d = document,
    formElements = d.querySelectorAll('[required]')

  //console.log(formElements)

  formElements.forEach(element => {
    let span = d.createElement('span')

    span.id = element.name
    span.classList.add('ContactForm-error')
    element.insertAdjacentElement('afterend', span)

    element.addEventListener('keyup', e => {
      console.log('Evento keyup')
      let regex = new RegExp( element.pattern )

      if ( element.pattern ) {
        if ( !regex.exec( e.target.value ) ) {
          d.getElementById(element.name).textContent = `Formato Inválido. ${element.title}`
          d.getElementById(element.name).classList.add('is-active', 'u-fadeIn')
          d.getElementById(element.name).classList.remove('u-fadeOut')
        } else {
          d.getElementById(element.name).textContent = null
          d.getElementById(element.name).classList.remove('is-active', 'u-fadeIn')
          d.getElementById(element.name).classList.add('u-fadeOut')
        }
      } else {
        if ( !e.target.value ) {
          d.getElementById(element.name).textContent = `${element.title} es requerido`
          d.getElementById(element.name).classList.add('is-active', 'u-fadeIn')
          d.getElementById(element.name).classList.remove('u-fadeOut')
        } else {
          d.getElementById(element.name).textContent = null
          d.getElementById(element.name).classList.remove('is-active', 'u-fadeIn')
          d.getElementById(element.name).classList.add('u-fadeOut')
        }
      }
    })
  })
}


export const sendForm = () => {
  document.forms[0].addEventListener('submit', e => {
    e.preventDefault()
    alert('Enviando Formulario')
    e.target.reset()
  })
}
