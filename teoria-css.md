# CSS Cascading Style Sheet

**(Hojas de Estilo en Cascada)**

![CSS](http://bextlan.com/img/para-cursos/css-logo.jpg)


## Índice

1. [Sintaxis](#sintaxis)
1. [Selectores](#selectores)
1. [Unidades de Medida](#unidades-de-medida)
1. [Colores](#colores)
1. [Tipografías](#tipografías)
1. [Características CSS3](#características-css3)
1. [Prefijos Navegadores](#prefijos-navegadores)
1. [Visualización](#visualización)
1. [Posicionamiento](#posicionamiento)
1. [Modelo de Caja](#modelo-de-caja)
1. [Técnicas de Maquetación](#técnicas-de-maquetación)
1. [Patrones de Diseño](#patrones-de-diseño)
1. [Guías de Estilo](#guías-de-estilos)
1. [Arquitectura CSS](#arquitectura-css)
1. [Sistemas de Nomenclaturas](#sistemas-de-nomenclaturas)
1. [Buenas Prácticas](#buenas-prácticas)
1. [Frameworks](#frameworks)
1. [Preprocesadores](#preprocesadores)
1. [PostCSS](#postcss)


## Sintaxis

Lenguaje de Presentación basado en reglas con una sintaxis de atributo valor

Provee presentación (diseño) al contenido HTML

Su principal objetivo es separar el contenido (HTML) de su presentación (CSS)

* [Introducción a CSS](http://librosweb.es/libro/css/)
* [CSS Reference](http://cssreference.io/)
* [CSS-TRICKS](https://css-tricks.com/)
* [Documentación Oficial](https://www.w3.org/Style/CSS/)

~~~~~~~~~~~~~~
selector {
    atributo-1: valor-1;
    atributo-2: valor-2;
    ...
    atributo-n: valor-n;
}
~~~~~~~~~~~~~~

**[⬆ regresar al índice](#Índice)**


## Selectores

Elemento(s) al que se le aplican reglas CSS

### Selectores Básicos:

* **De Etiquetas** `p { ... }`
* **Identificadores** `#menu { ... }`
* **Clases** `.item { ... }`
* [Más info](http://librosweb.es/libro/css/capitulo_2.html)

### Selectores Avanzados

* **Universal** `* { ... }`
* **Descendiente (espacio en blanco)** `.menu a { ... }`
* **de Hijos** `.menu > li { ... }`
* **de Hermanos** `section ~ article { ... }`
* **Adyacentes** `h1 + h2 { ... }`
* **de Atributos** `input[type="text"] { ... }`
* [Más Info](http://librosweb.es/libro/css_avanzado/capitulo_3.html)
    
### Pseudo-selectores

Nos ayudan a aplicar estilos especiales a nuestros elementos HTML, dependiendo de su contexto, posición o estado

Existen 2 tipos:

* Pseudo-clases
* Pseudo-elementos

#### Pseudo-clases

* **Estatus de Enlaces** `:link :visited`
* **Interacciones del Usuario** `:active :hover :focus`    
* **Elementos de Formularios** `:checked :disabled :in-range :invalid :out-of-range :required :target :valid`
* **Posición del Elemento** `:first-child :first-of-type :last-child :last-of-type :nth-child() :nth-last-child() :nth-of-type() :only-child :only-of-type :default`
* **CSS3** `:dir() :empty :first :fullscreen :indeterminate :lang() :left :not() :optional :read-only :read-write :right :root :scope`
* [Más info](https://css-tricks.com/examples/nth-child-tester/)

#### Pseudo-elementos

* **`::after { content:" " }`**
* **`::before { content:" " }`**
* **`::first-letter`**
* **`::first-line`**
* **`::selection`**

### Especificidad

Es lo que determina que estilo será el que acabará aplicandose a un elemento determinado

Cuando a un elemento se le aplica más de un selector con reglas que actúan sobre la misma propiedad, es la especificidad la encargada de resolver este conflicto

A grandes rasgos podemos ordenar los diferentes tipos de selectores de menor a mayor peso específico de la siguiente manera:

1. Selectores de elemento
1. Selectores contextuales
1. Clases
1. IDs

**[⬆ regresar al índice](#Índice)**


## Unidades de Medida

* **Absolutas** `px, pt, pc, cm, mm, in`
* **Relativas**
    * **al Contenedor** 
        * `% (Porcentajes)`
    * **a la Tipografía**
        * `em` basada en la anchura de la letra M del contenedor
        * `ex` basada en la altura de la letra X del contenedor
        * `rem` es el em del elemento raiz (html)
    * **al Viewport**
        * `vw` anchura del viewport
        * `vh` altura del viewport
        * `vmax` entre vw y vh toma el que tenga mayor valor
        * `vmin` entre vw y vh toma el que tenga menor valor

### Equivalencias entre unidades

* **`100% = 1em = 16px = 12pt`**
* [pxtoem](http://pxtoem.com/)

**[⬆ regresar al índice](#Índice)**


## Colores

Sistemas de Colores:

* **CMYK**: Medios Impresos
* **RGB**: Medios Digitales

En HTML el RGB se maneja en código hexadecimal

* Base 16
* Dígitos del 0-9 y de la A-F
* 6 dígitos, una pareja por cada canal de color
* [HTML Color Codes](http://html-color-codes.info/)

![Colores en HTML](http://bextlan.com/img/para-cursos/colores-hexadecimal.png)

**[⬆ regresar al índice](#Índice)**


## Tipografías

* Locales:
    * Con [@font-face](http://caniuse.com/#search=font-face) y [.woff](http://caniuse.com/#search=woff)
    * [Convertidor de Fuentes](http://www.fontsquirrel.com/tools/webfont-generator)

* Externas:
    * [Google Fonts](https://www.google.com/fonts)
    
* Icónicas
    * [Font Awesome](http://fontawesome.io/)
    * [IcoMoon](https://icomoon.io/)
    * [FlatIcon - Buscador de Íconos](http://flaticon.com/)
    * [Fontello - Generador de Fuentes Icónicas](http://fontello.com/)

**[⬆ regresar al índice](#Índice)**


## Características CSS3

* [Introducción a CSS3](http://www.w3schools.com/css/css3_intro.asp)
* Videotutoriales
    * [Bordes, colores RGBA, fuentes tipográficas, unidades relativas, sombras y gradientes](http://www.youtube.com/watch?v=p-ZjVEhMt2U)
    * [Ajuste de texto, texto en columnas, tamaño de caja, fondos múltiples, área, origen y tamaño de fondo](http://www.youtube.com/watch?v=QYOujpsVvXE)
    * [Transformaciones 2D y 3D, transiciones y animaciones](http://www.youtube.com/watch?v=yj93AWX0P_k)

![CSS](http://bextlan.com/img/para-cursos/header-css3.jpg)

**[⬆ regresar al índice](#Índice)**


## Prefijos Navegadores

Cuando los navegadores soportan parcialmente un atributo CSS en ocasiones es necesario aplicar los prefijos:

* **`-ms-`** para Internet Explorer y Edge
* **`-moz-`** para Firefox
* **`-webkit-`** para Chrome, Safari, Opera, iOS y Android Browsers

Para no escribirlos manualmente puedes usar [Autoprefixer](https://autoprefixer.github.io/)

#### Ejemplo

    -ms-border-radius: 20px;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    border-radius: 20px;

**[⬆ regresar al índice](#Índice)**


## Visualización

* **[Visibility](http://www.w3schools.com/cssref/pr_class_visibility.asp):** Afecta la visualización del contenido de una caja
* **[Overflow](http://www.w3schools.com/css/css_overflow.asp):** Especifica que ocurre con el contenido que desborda su caja contenedora
    * [**`overflow-x`**](http://www.w3schools.com/cssref/css3_pr_overflow-x.asp): a lo ancho
    * [**`overflow-y`**](http://www.w3schools.com/cssref/css3_pr_overflow-y.asp): a lo alto
* **[Display](http://www.w3schools.com/css/css_display_visibility.asp):** Afecta la visualización de la caja
    * **Tipos de Display Básicos**
        * **`inline`:** Ocupa sólo el espacio requerido, las propiedades `width`/`height` y los `margin` y `padding` verticales son ignoradas
        * **`block`:** Ocupa todo el espacio disponible generando saltos de línea con los elementos adyacentes, las propiedades `width` y `height` son consideradas
        * **`inline-block`:** Se comporta como elemento de línea, pero si se definen las propiedades `width` y `height` serán consideradas
        * **`none`:** Quita la caja de la visualización del documento, carga en el navegador pero no se muestra
        * **`list-item`:** Elemento de lista

**[⬆ regresar al índice](#Índice)**


## Posicionamiento

* **Estático**: Es el que viene por defecto, un elemento detrás del otro
* **Relativo**: Se desplaza respecto de su posición original
* **Absoluto**: Se desplaza respecto de:
    * la posición del body del documento o 
    * del primer elemento padre relativo que tenga
* **Fijo**: Permite mantener fijo un elemento
* **Flotante**: Convierte un elemento en flotante desplazándolo hasta la zona más a la izquierda o más a la derecha de la posición en la que originalmente se encontraba
* **Pegajoso**: Posicionamiento experimental, permite que el elemento sea relativo o fijo dependiendo del area donde se visualiza
* [Teoría](http://librosweb.es/libro/css/capitulo_5.html)
* [Ejemplos](http://www.w3schools.com/css/css_positioning.asp)

**[⬆ regresar al índice](#Índice)**


## Modelo de Caja

El modelo de caja o "**box model**" es una de las característica más importante de CSS, ya que condiciona el diseño de la web; hace que todos los elementos de un documento HTML se representen mediante cajas rectangulares. 

CSS controla el aspecto de todas las cajas (contenedores), permite definir la altura y anchura de cada caja, el margen existente entre cajas y el espacio de relleno interior que muestra cada una; además controla la forma en la que se visualizan pero la mayoría no muestran ningún color de fondo ni borde, no son visibles a simple vista

* [Teoría](http://librosweb.es/libro/css/capitulo_4.html)
* [Ejemplos](http://www.w3schools.com/css/css_boxmodel.asp)

### Partes del modelo de caja:

1. **Contenido**: `content`
1. **Relleno**: `padding`
1. **Borde**: `border`
1. **Imagen de fondo**: `background-image`
1. **Color de fondo**: `background-color`
1. **Margen**: `margin`

![Modelo de Caja](http://bextlan.com/img/para-cursos/modelo-caja-css.jpg)

### Propiedades importantes del modelo de caja:

* **Border**: Borde, es la linea que delimita los elementos divide el margin del padding
* **Padding**: Relleno, distancia interna que hay entre los márgenes del elemento(top, right, bottom, left) y su contenido
* **Margin**: Margen, distancia externa que hay entre los elementos y los márgenes del documento u otros elementos (top, right, bottom, left)

#### Ejemplos de `border`:

    border-width: thin | thick | medium | 10px | 1em;
    border-style: solid | dashed | dotted;
    border-color: #F60 | orange;
    border: thin solid #F60; (shorthand)

#### Ejemplos de `margin` y `padding`:

* 4 márgenes / bordes
* top / bottom = verticales
* left / right = horizontales
* 1 valor = Se aplica a los 4 lados

~~~~~~~~~~~~~~~~~~~~~~~~~~~
    margin: 1em;
    padding: 1em;
~~~~~~~~~~~~~~~~~~~~~~~~~~~

* 2 valores:
    * 1° es para top y bottom
    * 2° es para left y right

~~~~~~~~~~~~~~~~~~~~~~~~~~~
    margin: 1em 2em;
    padding: 0 1em;
~~~~~~~~~~~~~~~~~~~~~~~~~~~

* 3 valores:
    * 1° es para top
    * 2° es para left y right
    * 3° es para bottom

~~~~~~~~~~~~~~~~~~~~~~~~~~~
    margin: 1em auto 2em;
    padding: 2em 0 .5em;
~~~~~~~~~~~~~~~~~~~~~~~~~~~

* 4 valores: En sentido de las manecillas del reloj
    * 1° es para top
    * 2° es para right
    * 3° es para bottom
    * 4° es para left

~~~~~~~~~~~~~~~~~~~~~~~~~~~
    margin: 1em 3em 2em 0;
    padding: 2em 1em 0 .5em;
~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Especificando cada lado

~~~~~~~~~~~~~~~~~~~~~~~~~~~
    margin-top | margin-right | margin-bottom | margin-left
    padding-top | padding-right | padding-bottom | padding-left
~~~~~~~~~~~~~~~~~~~~~~~~~~~

> **Nota**: Los atributos del modelo de caja (`border`, `margin` y `padding`) por defecto aumentarán el ancho (`width`) y alto (`height`) de la misma, es decir, crecen el [tamaño de la caja](https://css-tricks.com/box-sizing/) (`box-sizing`)

**[⬆ regresar al índice](#Índice)**


## Técnicas de Maquetación

* **`display: table;`**
    * [Puedo usarlo](http://caniuse.com/#search=table)
    * [Guía DesarrolloWeb](http://www.desarrolloweb.com/articulos/modelo-tabla-css-propiedad-display-explicaciones-ejemplos.html)
    * [Más Info W3C](https://www.w3.org/TR/CSS21/tables.html)
* **`display: flex;`**
    * [Puedo usarlo](http://caniuse.com/#search=flex)
    * [Guía Completa de CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
    * [Más Info Propiedad Flex en CSS-Tricks](https://css-tricks.com/almanac/properties/f/flex/)
    * [Más Info W3C](https://www.w3.org/TR/css-flexbox/)
* **`display: grid;`**
    * [Puedo usarlo](http://caniuse.com/#search=grid)
    * [Guía Completa de CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
    * [Grid by Example](http://gridbyexample.com/presentations/)
    * [Más Info W3C](https://www.w3.org/TR/css-grid-1/)

**[⬆ regresar al índice](#Índice)**


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

**[⬆ regresar al índice](#Índice)**


## Guías de Estilos

Genera un código más legible y fácil de mantener, disminuyen la cantidad de errores y refuerzan las buenas prácticas, además permiten trabajar en un mismo proyecto a varios desarrolladores

* [Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css)
* [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
* [CSS Guidelines](http://cssguidelin.es/)
* [Code Guide](http://codeguide.co/)
* [Primer de GitHub](http://primercss.io/guidelines/)

**[⬆ regresar al índice](#Índice)**


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

**[⬆ regresar al índice](#Índice)**


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

**[⬆ regresar al índice](#Índice)**


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

**[⬆ regresar al índice](#Índice)**


## Frameworks

* [960 Grid System](http://960.gs/)
* [Bootstrap](http://getbootstrap.com/)
* [Foundation](http://foundation.zurb.com/)
* [Ink](http://ink.sapo.pt/)
* [Skeleton](http://getskeleton.com/)
* [Pure CSS](http://purecss.io/)
* [jQueryMobile](https://jquerymobile.com/)
* [Materialize](http://materializecss.com/)
* [MUI](https://www.muicss.com/)
* [Semantic UI](http://semantic-ui.com/)
* [Flexbox Grid](http://flexboxgrid.com/)
* [ED GRID](https://github.com/escueladigital/ed-grid)
* [Responsimple](http://jonmircha.github.io/responsimple/) :heart_eyes:
* [Comparativas entre Frameworks](http://responsive.vermilion.com/compare.php)

**[⬆ regresar al índice](#Índice)**


## Preprocesadores

![Preprocesadores](http://bextlan.com/img/para-cursos/preprocesadores.png)

Son lenguajes independientes (generalmente, más amigables, potentes y prácticos) que son capaces de traducir el código al lenguaje de destino (HTML, CSS o JavaScript), que son los únicos que los navegadores son capaces de entender de forma nativa.

El objetivo de los preprocesadores es tener un código más sencillo de mantener y editar. Incluyen características tales como variables, funciones, mixins, anidación y modularidad.
### Preprocesadores CSS

* [Less](http://lesscss.org/)
* [Stylus](http://stylus-lang.com/)
* [Myth](http://www.myth.io/)
* [Sass](http://sass-lang.com/)
    * Sintaxis Sass
    * Sintaxis SCSS

**[⬆ regresar al índice](#Índice)**


## PostCSS

Es una herramienta para transformar tu CSS con JavaScript

PostCSS es un módulo de Node.js que analiza el CSS y lo transforma en un árbol de sintaxis abstracto ([Abstract Syntax Tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree))

* [PostCSS](http://postcss.org/)
* Plugins PostCSS
    * [Autoprefixer](https://github.com/postcss/autoprefixer)
    * [CSSNext](http://cssnext.io/)
    * [CSS Modules](https://github.com/css-modules/css-modules)
    * [Stylelint](http://stylelint.io/)

**[⬆ regresar al índice](#Índice)**