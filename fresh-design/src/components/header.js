import Hammer from 'hammerjs'

export const header = () => {
  let logoName = 'Fresh Design',
    menu = [
      ['Inicio', 'index.html'],
      ['Acerca', 'acerca.html'],
      ['Proyectos', 'proyectos.html'],
      ['Contacto', 'contacto.html'],
      ['Blog', 'blog.html']
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

export function navigation () {
  const d = document,
    w = window,
    panel = d.querySelector('.Panel'),
    panelBtn = d.querySelector('.Panel-button'),
    hamburger = d.querySelector('.hamburger'),
    mq = w.matchMedia('(min-width: 64em)'),
    hammerBody = new Hammer(d.body),
    hammerPanel = new Hammer(panel)

  function closePanel (mq) {
    if (mq.matches) {
      panel.classList.remove('is-active')
      hamburger.classList.remove('is-active')
    }
  }

  function hammerTouches (e) {
    if ( e.type == 'swipeleft' ) {
      panel.classList.remove('is-active')
      hamburger.classList.remove('is-active')
    } else if ( e.type == 'swiperight' ) {
      panel.classList.add('is-active')
      hamburger.classList.add('is-active')
    }
  }

  panelBtn.addEventListener('click', e => {
    e.preventDefault()
    panel.classList.toggle('is-active')
    hamburger.classList.toggle('is-active')
  })

  mq.addListener( closePanel )

  hammerBody.on('swipeleft swiperight', hammerTouches)
  hammerPanel.on('swipeleft swiperight', hammerTouches)
}

export const transparentHeader = () => {
  const d = document,
    w = window,
    header = d.querySelector('.Header'),
    firstContent = d.querySelector('.u-firstContent'),
    firstContentHeight = w.getComputedStyle(firstContent, null).getPropertyValue('height').split('px')[0],
    headerHeight = w.getComputedStyle(header, null).getPropertyValue('height').split('px')[0]

  let scrollTopLimit = firstContentHeight - headerHeight

  function headerScroll () {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop

    if ( scrollTop > scrollTopLimit ) {
      header.classList.add('is-active')
    } else {
      header.classList.remove('is-active')
    }

    /* console.log(
      w.pageYOffset,
      d.documentElement.scrollTop
    ) */
  }

  d.addEventListener('DOMContentLoaded', headerScroll)
  w.addEventListener('scroll', headerScroll)

  /* console.log(
    w.getComputedStyle(firstContent, null).getPropertyValue('height'),
    w.getComputedStyle(firstContent, null).getPropertyValue('height').split('px'),
    w.getComputedStyle(firstContent, null).getPropertyValue('height').split('px')[0],
    firstContentHeight,
    headerHeight,
  ) */
}

