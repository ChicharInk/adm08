// Initialize Firebase
const config = {
  apiKey: "AIzaSyC2ybeda5lWTpQJ8MO7zUZOtxQrdQu103c",
  authDomain: "ddwg09.firebaseapp.com",
  databaseURL: "https://ddwg09.firebaseio.com",
  projectId: "ddwg09",
  storageBucket: "ddwg09.appspot.com",
  messagingSenderId: "1056555848040"
}

firebase.initializeApp(config)

//https://firebase.google.com/docs/storage/
const storage = firebase.storage(),
  bucket = storage.ref(),
  imgRef = bucket.child('img'),
  d = document,
  form = d.getElementById('upload'),
  uploader = d.getElementById('uploader'),
  progressBar = d.getElementById('progress-bar'),
  progressAdvance = d.getElementById('progress-advance'),
  output = d.getElementById('output')

  output.innerHTML = ''

  uploader.addEventListener('change', e => {
    console.log(e.target.files)
    Array.from(e.target.files).forEach(file => {
      //alert('cargando archivo')
      let uploadTask = imgRef.child(file.name).put(file)

      uploadTask.on('state_changed', data => {
        console.log(data)
        let progress = Math.floor( (data.bytesTransferred / data.totalBytes) * 100 )
        progressBar.value = progress
        progressAdvance.innerHTML = `${progress}%`
      }, err => {
        console.log(err, err.code, err.mesagge)
        progressAdvance.innerHTML = `<p>${err.code} - ${err.mesagge}</p>`
      }, () => {
        let fileRef = imgRef.child(file.name)

        fileRef
          .getDownloadURL()
          .then(url => {
            console.log(url)

            if ( file.type.match('image.*') ) {
              output.innerHTML += `<div><img src="${url}"></div>`
            } else {
              output.innerHTML += `<p>Tu archivo se ha subido, puedes verlo <a href="${url}" target="_blank">aquí</a></p>`
            }
          })
          .catch(err => {
            console.log(err)
          })
      })
    })

    form.reset()
  })
