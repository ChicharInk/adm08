export const headerVideoBackground = (title, subtitle, urlVideo, urlPoster) => (`
  <article class="VideoBackground  u-firstContent">
    <div class="VideoBackground-text">
      <h1>${title}</h1>
      <h2>${subtitle}</h2>
    </div>
    <video src="${urlVideo}" poster="${urlPoster}" mute loop class="VideoBackground-video"></video>
  </article>
`)

export const playVideoBackground = () => {
  const d = document,
    w = window,
    mq = w.matchMedia('(min-width: 64em)'),
    videos = d.querySelectorAll('.VideoBackground-video')

  function startVideo (mq) {
    videos.forEach( video => ( mq.matches ) ? video.play() : video.pause() )
  }

  mq.addListener(startVideo)
  startVideo(mq)
}
