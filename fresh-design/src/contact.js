import * as basicLightbox from 'basiclightbox'

import { header, navigation, transparentHeader } from './components/header'
import { footer } from './components/footer'
import { headerVideoBackground, playVideoBackground } from './components/header_video_background'
import { cardDescriptiveIcon } from './components/card_descriptive_icon'
import { subscribeForm, contactForm, validateForm, sendForm } from './components/forms'
import { filterList, searchFilterList } from './components/filter_list'

import homeVideo from './assets/img/bg-home.mp4'
import homePoster from './assets/img/bg-home.jpg'
import homeIntroImage from './assets/img/home-intro.jpg'

import css from './style.scss'

const page = `
  ${header()}
  ${headerVideoBackground('Creamos experiencias que la gente ama.', 'Ayudamos a nuestros clientes a desarrollar sitios y aplicaciones en la web.', homeVideo, homePoster)}
  <section class="Subscribe">
    <div class="Subscribe-container">
      ${subscribeForm()}
    </div>
  </section>
  ${contactForm()}
  ${footer()}
`

document.getElementById('root').innerHTML = page

navigation()
transparentHeader()
validateForm('SubscribeForm')
sendForm('SubscribeForm')
validateForm('ContactForm')
sendForm('ContactForm')
