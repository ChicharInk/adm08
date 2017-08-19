export const headerVideoBackground = (title, subtitle, urlVideo, urlPoster) => {
  return `
    <article class="VideoBackground  u-firstContent">
      <div class="VideoBackground-text">
        <h1>${title}</h1>
        <h2>${subtitle}</h2>
      </div>
      <video class="VideoBackground-video" src="${urlVideo}" poster="${urlPoster}" mute loop></video>
    </article>
  `
}

export const playVideo = () => {
  const d = document,
    w = window,
    mq = w.matchMedia('(min-width: 64em)'),
    videos = d.querySelectorAll('.VideoBackground-video')

  function startVideo (mq) {
    videos.forEach(video => (mq.matches) ? video.autoplay = true : video.autoplay = false)
  }

  mq.addListener(startVideo)
  startVideo(mq)
}
