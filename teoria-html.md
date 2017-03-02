# HTML Hyper Text Markup Language

**Lenguaje de Marcado de Hiper Texto basado en etiquetas y atributos, nos define estructura y contenido**

![HTML](http://bextlan.com/img/para-cursos/html5-logo.png)


## Índice

1. [Etiquetas HTML](#etiquetas-html)
1. [Estructura y Contenido](#estructura-y-contenido)
1. [HTML5](#html5)
1. [Semántica](#semántica)
1. [Buenas Prácticas de Código HTML](#buenas-prácticas-de-código-html)
1. [Estructura Básica HTML5](#estructura-básica-html5)
1. [Más Info](#más-info)


## Etiquetas HTML

[Tabla periódica de las etiquetas HTML](http://zqsmm.qiniucdn.com/data/20110511083224/index.html)
![Tabla de las Etiquetas de HTML](http://bextlan.com/img/para-cursos/periodic-table.png)

**[⬆ regresar al índice](#Índice)**


## Estructura y Contenido

* El contenido es el rey
* Planear bien nuestra estructura HTML (uso de etiquetas)
* Trabajar la semántica (significado de nuestro contenido)
* La semántica de nuestras etiquetas la define el contenido y su distribución
* Los motores de búsqueda son ciegos, si tu contenido esta bien estructurado, tu contenido será bien posicionado

**[⬆ regresar al índice](#Índice)**


#HTML5

* Sitio Oficial [HTML5](https://www.w3.org/html/logo/)
* No es un software, no se instala, no se descarga, no se necesita licencia, no cuesta, vive y existe en los navegadores web
* Es el paradigma actual de diseño y desarrollo web
* Define los actuales estándares de diseño y desarrollo web, tanto para equipos de escritorio, como para dispositivos móviles
* Es la sinergia de 3 tecnologías que se complementan en el Front end:
	1. **HTML** (estructura y contenido)
	1. **CSS** (diseño y presentación)
	1. **JS** (interactividad y funcionalidad)
* Se subdivide en 8 implementaciones:
	1. Semántica (HTML)
	1. CSS3 (CSS)
	1. Multimedia (HTML y JS)
	1. Desconexión y Almacenamiento Local (JS)
	1. Acceso al Dispositivo (JS)
	1. 3D, Gráficos y Efectos (HTML, CSS y JS)
	1. Conectividad (JS)
	1. Rendimiento e Integración (JS)

**[⬆ regresar al índice](#Índice)**


## Semántica

Con las etiquetas semánticas mejoramos la definición de nuestro contenido, es más entendible tanto para humanos como para máquinas(algoritmos de buscadores)

Recuerda que las etiquetas semánticas no tienen una posición fija en el layout, quien determina la estructura es el contenido

### Etiquetas semánticas y estructurales

* **`<section>`**: Contenido genérico estructurado
* **`<article>`**: Contenido estructural distribuible de manera independiente
* **`<aside>`**: Contenido secundario relacionado o que acompaña o complementa a otro
* **`<header>`**: Contenido introductorio suele tener elementos de navegación y encabezados (h1...h6)
* **`<footer>`**: Sección que contiene información acerca del documento o página
* **`<nav>`**: Sección relativa a enlaces dentro del documento o página
* **`<main>`**: Contenido principal
* **`<figure>`**: Sección de contenido visual, múltiples medios
* **`<figcaption>`**: Leyenda o pié relativo al contenido visual de FIGURE, uno FIGCAPTION por cada FIGURE, puede contener semántica

### Ejemplo de semántica HTML5

![Semántica HTML5](http://bextlan.com/img/para-cursos/semantic-html5.jpg)

**[⬆ regresar al índice](#Índice)**


## Buenas Prácticas de Código HTML

### Especificar

* Tipo de documento HTML5
* Atributo de idioma
* Juego de caractéres
* Area de Visualización
    
### Definir

* Título único máx 65 caractéres
* Descripción única máx 156 caractéres
* Estilos antes de `</head>`
* Scripts antes de `</body>`
* **NO** Cerrar etiquetas únicas así **`<img src=" ">`** en vez de **`<img src=" "/>`**
* Definir atributos booleanos así **`<input type="button" disabled>`** en vez de **`<input type="button" disabled="disabled">`**

**[⬆ regresar al índice](#Índice)**


## Estructura Básica HTML5

```HTML
<!DOCTYPE html>
<html lang="es">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta charset="UTF-8">
	<title>Título de mi documento, este deberá ser único max 65 caracteres</title>
	<meta name="description" content="Breve descripción de lo que los usuarios 
	encontrarán en este documento, deberá ser única max 156 caracteres">
	<link rel="stylesheet" href="estilos.css">
</head>
<body>
	<h1>Estructura de Documento HTML5</h1>
	<!-- 
		AQUÍ EL CONTENIDO HTML
		Esto es un comentaerio HTML
	-->
	<script src="codigos.js"></script>
</body>
</html>
```

**[⬆ regresar al índice](#Índice)**


## Más Info

* [Introducción a XHTML](http://librosweb.es/libro/xhtml/)
* [Guía de Referencia HTML en MDN](https://developer.mozilla.org/es/docs/Web/HTML)
* [Estandar HTML 5.1](https://www.w3.org/TR/html51/)
* [Estandar HTML 5.2](https://www.w3.org/TR/html52/)
* [Guía de Buenas Prácticas en Código Front end](http://mdo.github.io/code-guide/)
* [La dieta del Navegador](https://browserdiet.com/es/)
* [Can I Use](http://caniuse.com/)

**[⬆ regresar al índice](#Índice)**