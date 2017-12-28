module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: 'blue',
    height: '5px'
  },
  /*
  ** Build configuration
  */
  transition: 'page'
}
