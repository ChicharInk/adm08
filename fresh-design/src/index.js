import css from './style.scss'

import { header, navigation, transparentHeader } from './components/header.js'
import { footer } from './components/footer.js'
import { headerVideoBackground, playVideo } from './components/header_video_background.js'
import { elementsFiltering, searchAndFilter } from './components/elements_filtering.js'
import { contactForm, validateForm, sendForm } from './components/contact_form.js'

import homeVideo from './assets/img/background-home.mp4'
import homePoster from './assets/img/background-home.jpg'

const page = `
  ${header()}
  ${headerVideoBackground(
    'Creamos experiencias que la gente ama.',
    'Ayudamos a nuestros clientes a desarrollar sitios y aplicaciones en la web.',
    homeVideo,
    homePoster
  )}
  <h1 class="Main-title">Hola Mundo con Vanilla JS, Webpack, & Sass</h1>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  ${contactForm()}
  <br>
  <br>
  <br>
  ${elementsFiltering()}
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  ${footer()}
`

document.getElementById('root').innerHTML = page

navigation()
transparentHeader()
playVideo()
searchAndFilter()
validateForm()
sendForm()
