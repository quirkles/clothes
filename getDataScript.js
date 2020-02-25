[
  '.designer-name',
  '.listing-details-wrapper .listing-title',
  '.listing-details-wrapper .listing-size',
  '.listing-details-wrapper .listing-description p',
  '.listing-details-wrapper .-price._drop'
].map(className => Array.from(document.querySelectorAll(className).values()).map(n => n.innerText).join(' x ')).join(',')
