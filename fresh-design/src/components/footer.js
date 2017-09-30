import { socialMediaNav } from './social_media_nav'

export const footer = () => (`
  <footer class="Footer">
    <section class="Footer-container">
      <aside class="Footer-legend">
        <small>
          &copy; 2017 Fresh Design. Hecho con &#10084; por
          <a href="http://jonmircha.com" target="_blank">@jonmircha</a>
        </small>
      </aside>
      <aside class="Footer-nav">
        ${socialMediaNav()}
      </aside>
    </section>
  </footer>
`)
