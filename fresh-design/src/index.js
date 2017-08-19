import css from './style.scss'
import { header, navigation } from './components/header.js'

const page = `
  ${header()}
  <h1 class="Main-title">Hola Mundo con Vanilla JS, Webpack, & Sass</h1>
`

document.getElementById('root').innerHTML = page

navigation()
