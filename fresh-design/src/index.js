import * as basicLightbox from 'basiclightbox'

import { header, navigation, transparentHeader } from './components/header'
import { footer } from './components/footer'
import { headerVideoBackground, playVideoBackground } from './components/header_video_background'
import { cardDescriptiveIcon } from './components/card_descriptive_icon'
import { filterList, searchFilterList } from './components/filter_list'

import homeVideo from './assets/img/bg-home.mp4'
import homePoster from './assets/img/bg-home.jpg'
import homeIntroImage from './assets/img/home-intro.jpg'

import css from './style.scss'

const page = `
  ${header()}
  ${headerVideoBackground('Creamos experiencias que la gente ama.', 'Ayudamos a nuestros clientes a desarrollar sitios y aplicaciones en la web.', homeVideo, homePoster)}
  <section class="HomeIntro">
    <div class="HomeIntro-container">
      <article class="HomeIntro-description">
        <p>
          <b>Fresh Design</b> es una agencia de diseño y desarrollo web con sede en Ciudad de México, y oficinas en Lima y Bogotá. Nuestro equipo existe para convertir grandes marcas y objetivos comerciales en sitios web excepcionales y de alto rendimiento.
        </p>
        <p>
          Nos enorgullecemos de trabajar en colaboración con nuestros clientes para crear un trabajo digital que les ayude a crecer y tener éxito en un mundo cada vez más digital. Nuestro equipo altamente talentoso de estrategas, diseñadores y desarrolladores están aquí para trabajar con usted para llevar su marca a la vida y conducir su negocio en línea.
        </p>
      </article>
      <aside class="HomeIntro-image">
        <img src="${homeIntroImage}" alt="Fresh Design, agencia de diseño y desarrollo web" >
      </aside>
    </div>
  </section>
  <section class="DemoReel">
    <div class="DemoReel-container">
      <h3>Lo que hacemos</h3>
      <a href="#" id="DemoReel-lightbox"><i class="fa fa-play"></i></a>
    </div>
  </section>
  <section class="Services">
    <h2 class="Services-title">Servicios</h2>
    <div class="Services-container">
      ${cardDescriptiveIcon(
        'code',
        'Diseño Web',
        `Propuestas visuales hermosas y de alta conversión que lleva su marca a la vida digital.`
      )}
      ${cardDescriptiveIcon(
        'wpforms',
        'Experiencia Usuario',
        `Combinar las necesidades y objetivos de los clientes en experiencias digitales intuitivas.`
      )}
      ${cardDescriptiveIcon(
        'wordpress',
        'Desarrollo  WordPress',
        `Desarrollo personalizado y de alta calidad en el CMS más popular del mundo.`
      )}
      ${cardDescriptiveIcon(
        'tablet',
        'Desarrollo Responsivo',
        `Un sitio responsivo, es una experiencia consistente, donde quiera que se vea.`
      )}
    </div>
  </section>
  ${filterList()}
  ${footer()}
`

document.getElementById('root').innerHTML = page

navigation()
transparentHeader()
playVideoBackground()
searchFilterList()

const demoReelLightbox = basicLightbox.create(`
  <iframe width="560" height="315" src="https://www.youtube.com/embed/s7L2PVdrb_8" frameborder="0" allowfullscreen></iframe>
`)

document.getElementById('DemoReel-lightbox').addEventListener('click', e => {
  e.preventDefault()
  demoReelLightbox.show()
})
