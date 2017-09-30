export const cardDescriptiveIcon = (icon, title, description) => (`
  <figure class="CardDescriptiveIcon">
    <i class="fa fa-${icon} CardDescriptiveIcon-image"></i>
    <figcaption class="CardDescriptiveIcon-info">
      <h3>${title}</h3>
      <p>${description}</p>
    </figcaption>
  </figure>
`)
