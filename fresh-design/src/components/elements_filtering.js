import List from 'list.js'

let idName = 'list-projects'

export const elementsFiltering = () => {
  let title = 'Nuestros Proyectos',
    menu = [],
    menuItems = '',
    elements = [
      ['Proyecto 1', 'http://lorempixel.com/200/200/animals', '2011', 'brand'],
      ['Proyecto 2', 'http://lorempixel.com/200/200/technics', '2012', 'web'],
      ['Proyecto 3', 'http://lorempixel.com/200/200/technics', '2013', 'mkt'],
      ['Proyecto 4', 'http://lorempixel.com/200/200/technics', '2015', 'mkt'],
      ['Proyecto 5', 'http://lorempixel.com/200/200/technics', '2016', 'apps'],
      ['Proyecto 6', 'http://lorempixel.com/200/200/animals', '2016', 'brand'],
      ['Proyecto 7', 'http://lorempixel.com/200/200/technics', '2017', 'design'],
      ['Proyecto 8', 'http://lorempixel.com/200/200/technics', '2017', 'web'],
      ['Proyecto 9', 'http://lorempixel.com/200/200/technics', '2017', 'design'],
      ['Proyecto 10', 'http://lorempixel.com/200/200/technics', '2014', 'mkt'],
      ['Proyecto 11', 'http://lorempixel.com/200/200/technics', '2013', 'design'],
      ['Proyecto 12', 'http://lorempixel.com/200/200/animals', '2013', 'brand'],
      ['Proyecto 13', 'http://lorempixel.com/200/200/technics', '2010', 'apps'],
      ['Proyecto 14', 'http://lorempixel.com/200/200/technics', '2010', 'web'],
      ['Proyecto 15', 'http://lorempixel.com/200/200/technics', '2011', 'apps'],
      ['Proyecto 16', 'http://lorempixel.com/200/200/animals', '2012', 'brand'],
      ['Proyecto 17', 'http://lorempixel.com/200/200/technics', '2017', 'design'],
      ['Proyecto 18', 'http://lorempixel.com/200/200/technics', '2016', 'mkt'],
      ['Proyecto 19', 'http://lorempixel.com/200/200/technics', '2015', 'apps'],
      ['Proyecto 20', 'http://lorempixel.com/200/200/technics', '2017', 'web']
    ],
    elementsItems = ''

  elements.forEach(item => {
    elementsItems += `
      <figure class="FilterWidget-figure category ${item[3]}" data-search="${item[3]}">
        <img src="${item[1]}" alt="${item[0]}">
        <figcaption>
          <h4 class="name">${item[0]}</h4>
          <time class="year" datatime="${item[2]}">${item[2]}</time>
          <small class="category">${item[3]}</small>
        </figcaption>
      </figure>
    `
  })

  return `
    <article id="${idName}" class="FilterWidget">
      <h2 class="FilterWidget-title">${title}</h2>
      <input class="FilterWidget-search search">
      <nav class="FilterWidget-menu">
        <button class="sort" data-sort="year">
          <i class="fa fa-sort-alpha-asc"></i> Año
        </button>
        <button class="search all">Todos</button>
        <button class="search brand">Branding</button>
        <button class="search design">Diseño</button>
        <button class="search web">Web</button>
        <button class="search mkt">Marketing</button>
        <button class="search apps">Apps</button>
      </nav>
      <section class="FilterWidget-elements  list">
        ${elementsItems}
      </section>
    </article>
  `
}

export const searchAndFilter = () => {
  let options = { valueNames: [ 'name', 'category', 'year' ] },
    elementsList = new List(idName, options)

  document.getElementById(idName).addEventListener('click', e => {
    if ( e.target.matches('button.search') ) {
      //console.log( e.target.className, e.target.classList )
      let s = ( e.target.classList[1] === 'all' ) ? '' : e.target.classList[1]
      elementsList.search( s )
    }
  })
}
