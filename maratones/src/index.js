import css from './style.scss'
import { header, navigation } from './components/header.js'
import imgLadyRunner from './assets/img/home-lady-runner.jpg'

const page = `
  ${header()}
  <main class="Home  u-afterFixed">
    <h2>Aquí ira el contenido de la sección Home</h2>
    <h3>HOla</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis soluta impedit eligendi consectetur provident facere voluptatum autem a, ullam, natus iusto repudiandae ratione ipsum nemo ex est quidem officia quis.
    </p>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    <img src="${imgLadyRunner}">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem esse saepe provident omnis non illum dolorem, alias nihil hic praesentium ipsum? Pariatur harum, suscipit nemo dicta ipsa a id officiis.
    </p>
  </main>
`
document.body.innerHTML = page

navigation()
