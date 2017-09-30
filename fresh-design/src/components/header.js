import Hammer from 'hammerjs'

export const header = () => {
  let logoName = 'JavaScript',
    menu = [
      ['Inicio', 'index.html'],
      ['Proyectos', 'proyectos.html'],
      ['Acerca', 'acerca.html'],
      ['Blog', 'blog.html'],
      ['Contacto', 'contacto.html']
    ],
    menuItems = ''

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
        <div class="Logo">
          <a href="./" class="Logo-link">${logoName}</a>
        </div>
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

export const navigation = () => {
  const d = document,
    w = window,
    panel = d.querySelector('.Panel'),
    panelBtn = d.querySelector('.Panel-button'),
    mq = w.matchMedia('(min-width: 64em)'),
    hamburger = d.querySelector('.hamburger'),
    hammerBody = new Hammer(d.body),
    hammerPanel = new Hammer(panel)

  panelBtn.addEventListener('click', e => {
    e.preventDefault()
    panel.classList.toggle('is-active')
    hamburger.classList.toggle('is-active')
  })

  function closePanel (mq) {
    if (mq.matches) {
      panel.classList.remove('is-active')
      hamburger.classList.remove('is-active')
    }
  }

  mq.addListener(closePanel)
  closePanel(mq)

  function hammerTouches (e) {
    if (e.type == 'swipeleft') {
      panel.classList.remove('is-active')
      hamburger.classList.remove('is-active')
    } else if (e.type == 'swiperight') {
      panel.classList.add('is-active')
      hamburger.classList.add('is-active')
    }
  }

  hammerPanel.on('swipeleft  swiperight', hammerTouches)
  hammerBody.on('swipeleft  swiperight', hammerTouches)
}

export const transparentHeader = () => {
  const d = document,
    w = window,
    header = d.querySelector('.Header'),
    firstContent = d.querySelector('.u-firstContent'),
    firstContentHeight = w.getComputedStyle(firstContent, null).getPropertyValue('height').split('px')[0],
    headerHeight = w.getComputedStyle(header, null).getPropertyValue('height').split('px')[0]

  let scrollTopLimit = firstContentHeight - headerHeight
  //console.log(firstContentHeight, headerHeight, scrollTopLimit)

  function headerScroll () {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop

    /* console.log(
      w.pageYOffset,
      d.documentElement.scrollTop
    ) */

    if (scrollTop > scrollTopLimit) {
      //console.log('abajo', scrollTop)
      header.classList.add('is-active')
    } else {
      //console.log('arriba', scrollTop)
      header.classList.remove('is-active')
    }
  }

  d.addEventListener('DOMContentLoaded', headerScroll)
  w.addEventListener('scroll', headerScroll)
}
