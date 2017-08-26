export const socialMediaNav = () => {
  let menu = [
    ['github', 'https://github.com'],
    ['facebook', 'https://facebook.com'],
    ['twitter', 'https://twitter.com'],
    ['youtube', 'https://youtube.com'],
    ['instagram', 'https://instagram.com']
  ],
    menuItems = ''

  menu.forEach(item => {
    menuItems += `
      <li class="SocialMedia-item">
        <a href="${item[1]}" target="_blank" class="SocialMedia-link">
          <i class="fa fa-${item[0]}"></i>
        </a>
      </li>
    `
  })

  return `
    <nav class="SocialMedia">
      <ul class="SocialMedia-listItem">
        ${menuItems}
      </ul>
    </nav>
  `
}
