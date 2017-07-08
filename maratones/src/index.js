import css from './style.scss'
import { header, navigation } from './components/header.js'

const page = `
  ${header()}
  <main class="Home  u-afterFixed">
    <h2>Aquí ira el contenido de la sección Home</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis soluta impedit eligendi consectetur provident facere voluptatum autem a, ullam, natus iusto repudiandae ratione ipsum nemo ex est quidem officia quis.
    </p>
  </main>
`
document.body.innerHTML = page

navigation()
