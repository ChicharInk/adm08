## Arquitectura CSS

Nos ayudan a organizar nuestro código CSS, dividiendolo en módulos y componentes que permitirán aumentar la escalabilidad de manera estructurada

### Componentes Modulares

> “It's a repeating visual pattern, that can be abstracted into an independent snippet of HTML, CSS and possibly JavaScript.”

> > [Nicole Sullivan](https://vimeo.com/72759139)

* Son un fragmento de la interfaz que cumple una única función
* Son independientes, tanto de su contexto como del resto de componentes
* Son reutilizables
* Son autocontenidos, no filtran estilos a otros componentes

![Componentes Modulares](http://bextlan.com/img/para-cursos/componentes-css.png)

### Tipos de Arquitectura CSS

* [OOCSS](http://oocss.org/)
* [SMACSS](https://smacss.com/)
* [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)
* [7-1 Pattern​](https://sass-guidelin.es/#architecture)
* [GEL by BBC](http://www.bbc.co.uk/gel)

## Patrones de Diseño

Los patrones de diseño son la base para la búsqueda de soluciones a problemas comunes en el desarrollo de software y otros ámbitos referentes al diseño de interacción o interfaces.

Un patrón resulta ser una solución a un problema. Para que una solución sea considerada patrón debe:

* Comprobar su efectividad resolviendo problemas similares
* Ser reutilizable, lo que significa que es aplicable a diferentes problemas en distintas circunstancias

**¿Por qué usar Patrones en CSS?**

* Construimos sistemas, no páginas
* Necesidad de modularidad
* Mejora flujo de trabajo
* Ya han sido probados y validados
* Si trabajamos en equípo mantiene el órden
* Promueven la filosofía DRY **(Don't Repeat Yourself)**


## Guías de Estilos

Genera un código más legible y fácil de mantener, disminuyen la cantidad de errores y refuerzan las buenas prácticas, además permiten trabajar en un mismo proyecto a varios desarrolladores

* [Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css)
* [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
* [CSS Guidelines](http://cssguidelin.es/)
* [Code Guide](http://codeguide.co/)
* [Primer de GitHub](http://primercss.io/guidelines/)


## Sistemas de Nomenclaturas

### [BEM - Bloque Elemento Modificador](https://en.bem.info/)

##### Estructura

    .bloque { ... }
    .bloque__elemento { ... }
    .bloque--modificador { ... }

##### Ejemplo

    .menu { ... }
    .menu__item { ... }
    .menu__item--active{ ... }

### [SUIT CSS - Utilidades y Componentes CSS](https://suitcss.github.io/)

##### Estructura

        .MyComponent { ... }
        .MyComponent.is-animating { ... }
        .MyComponent--modifier { ... }
        .MyComponent-part { ... }
        .MyComponent-anotherPart { ... }

##### Ejemplo

        .Menu { ... }
        .Menu.is-visible { ... }
        .Menu--active { ... }
        .Menu-item { ... }
        .Menu-link { ... }


## Buenas Prácticas

* Preferir **`<link>`** sobre **`@import`** para invocar hojas de estilo
* Definir siempre un **`font-size`** al elemento root (**`html`**) y hacerlo en **`px`**
* Usar [**`box-sizing: border-box;`**](http://www.paulirish.com/2012/box-sizing-border-box-ftw/)
* Estandarizar los estilos iniciales de nuestras etiquetas HTML para todos los navegadores
    * [Reset.css](http://meyerweb.com/eric/tools/css/reset/)
    * [Normalize.css](https://necolas.github.io/normalize.css/)
    * o crear uno propio :smile:
* Evitar el uso de selectores de etiquetas e identificadores y trabajar en su mayoria con clases
* Maquetar bajo un enfoque **Mobile First**
* Escribir CSS pensando en reutilizar código (**DRY**)
* Tener precaución con los shorthand de CSS
    * **`padding, margin, font, background, border, border-radius`**
    * preferible **`background-color: #FFF`** que **`background: #FFF`**
* Ordenar el código en cada selector usando la fórmula **PC-TV**:
    * Posicionamiento **`position, top, left, right, bottom, clear, z-index`**
    * Modelo de Caja **`display, float, margin, padding, width, height`**
    * Tipografía **`font-family, font-size, line-height, color, text-align`**
    * Visual **`background-color, border, border-radius, outline, opacity`**
