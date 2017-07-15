export const header = () => {
  let menu = [
    ['Inicio', 'index.html'],
    ['Acerca', 'acerca.html'],
    ['Maratones', 'maratones.html'],
    ['Mujeres', 'mujeres.html'],
    ['El más veloz', 'el-mas-veloz.html'],
    ['Contacto', 'contacto.html']
  ], menuItems = ''

  menu.forEach(item => {
    menuItems += `
      <li class="Menu-item">
        <a href="${item[1]}" class="Menu-link">${item[0]}</a>
      </li>
    `
  })

  return `
    <header class="Header">
      <section class="Header-container">
        <h1 class="Logo">
          <a href="./" class="Logo-link">Maratones</a>
        </h1>
        <a href="#" class="Panel-button">
          <button class="hamburger  hamburger--stand" type="button">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </a>
        <aside class="Panel">
          <nav class="Menu">
            <ul class="Menu-listItem">
              ${menuItems}
            </ul>
          </nav>
        </aside>
      </section>
    </header>
  `
}

export function navigation () {
  const d = document,
    w = window,
    panel = d.querySelector('.Panel'),
    panelBtn = d.querySelector('.Panel-button'),
    hamburger = d.querySelector('.hamburger'),
    mq = w.matchMedia('(min-width: 64em)')

  function closePanel (mq) {
    if (mq.matches) {
      panel.classList.remove('is-active')
      hamburger.classList.remove('is-active')
    }
  }

  panelBtn.addEventListener('click', e => {
    e.preventDefault()
    panel.classList.toggle('is-active')
    hamburger.classList.toggle('is-active')
  })

  mq.addListener( closePanel )
}
