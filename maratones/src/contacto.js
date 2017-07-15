import css from './style.scss'
import { header, navigation } from './components/header.js'

const page = `
  ${header()}
  <main class="Contacto  u-afterFixed">
    <h2>Aquí ira el contenido de la sección Contacto</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis soluta impedit eligendi consectetur provident facere voluptatum autem a, ullam, natus iusto repudiandae ratione ipsum nemo ex est quidem officia quis.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ea voluptatibus eos quisquam repellendus quo accusantium reiciendis molestias saepe iste harum quos sint quibusdam, vero dolorem veniam. Facilis culpa, magnam?
    </p>
  </main>
`
document.body.innerHTML = page

navigation()
