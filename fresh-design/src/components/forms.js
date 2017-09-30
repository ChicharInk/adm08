export const contactForm = () => (`
  <form class="ContactForm">
    <legend>Envíanos tus comentarios</legend>
    <input type="text" name="nombre" title="tu nombre" placeholder="Escribe tu nombre" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
    <input type="email" name="email" title="tu email" placeholder="Escribe tu email" pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
    <input type="text" name="asunto" title="asunto a tratar" placeholder="Asunto a tratar" required>
    <textarea name="comentarios" title="tus comentarios" placeholder="Escribe tus comentarios" cols="50" rows="5" required></textarea>
    <input type="submit" value="enviar">
    <div class="u-preload">
      <i class="fa  fa-refresh  fa-spin  fa-5x"></i>
    </div>
    <div class="u-message">
      <p>Tu información ha sido enviada con éxito</p>
    </div>
  </form>
`)

export const subscribeForm = () => (`
  <form class="SubscribeForm">
    <legend>Suscríbete a nuestro newsletter</legend>
    <p>
      Recibirás notificaciones sobre noticias recientes y nuestras últimas promociones.
    </p>
    <input type="email" name="subscribe" title="tu email" placeholder="Escribe tu email" pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
    <input type="submit" value="enviar">
    <div class="u-preload">
      <i class="fa  fa-refresh  fa-spin  fa-5x"></i>
    </div>
    <div class="u-message">
      <p>Te has suscrito con éxito</p>
    </div>
  </form>
`)

export const validateForm = formName => {
  const d = document,
    c = console.log,
    inputs = d.querySelector(`.${formName}`).querySelectorAll('[required]')

  inputs.forEach(input => {
    //c( input.required, input.pattern )

    let span = d.createElement('span')

    span.id = input.name
    span.classList.add('u-error')
    span.textContent = `Dato incorrecto, escribe ${input.title}`
    input.insertAdjacentElement('afterend', span)

    input.addEventListener('keyup', e => {
      if ( input.pattern ) {
        //Cuando el input tiene patrón
        let regex = new RegExp( input.pattern )
        //c('Con atributo patrón')
        return ( !regex.exec( e.target.value ) )
          ? d.getElementById(input.name).classList.add('is-active')
          : d.getElementById(input.name).classList.remove('is-active')
      } else {
        //Cuando el input no tiene patrón
        //c('Sin atributo patrón')
        return ( !e.target.value )
          ? d.getElementById(input.name).classList.add('is-active')
          : d.getElementById(input.name).classList.remove('is-active')
      }
    })
  })
}

export const sendForm = formName => {
  const d = document,
    ajax = new XMLHttpRequest(),
    READY_STATE_COMPLETE = 4,
    OK = 200,
    NOT_FOUND = 404,
    form =  d.querySelector(`.${formName}`),
    preload =  form.querySelector('.u-preload'),
    message =  form.querySelector('.u-message')

  form.addEventListener('submit', e => {
    e.preventDefault()

    //Código de simulación
    preload.classList.add('is-active')
    setTimeout(() => {
      preload.classList.remove('is-active')
      message.classList.add('is-active')
    }, 2000)

    /*
    // Código para servidor en Internet
    ajax.open('POST', './send_email.php', true)
    ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    ajax.addEventListener('load', () => {
      preload.classList.add('is-active')

      if ( ajax.readyState === READY_STATE_COMPLETE ) {
        preload.classList.remove('is-active')
        message.classList.add('is-active')

        if ( ajax.status === OK ) {
          message.innerHTML = ajax.response
        } else if ( ajax.status === NOT_FOUND ) {
          message.innerHTML = `<b>El servidor NO responde. Error N° ${ajax.status}: <mark>${ajax.statusText}</mark></b>`
        }
      }
    }) */

    form.reset()
  })
}
