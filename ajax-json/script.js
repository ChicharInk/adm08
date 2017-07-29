const movies = document.getElementById('movies')

let html = ''

fetch('./movies.json')
  .then( response => response.json() )
  .then(json => {
    console.log(json, json.movies)
    json.movies.forEach(movie => {
      html += `
        <article>
          <h2>${movie.title}</h2>
          <p><b>${movie.year}</b></p>
          <p><i>${movie.genres}</i></p>
          <img src="${movie.poster}">
        </article>
      `
    })

    movies.innerHTML = html
  })
  .catch( err => console.log(err) )
