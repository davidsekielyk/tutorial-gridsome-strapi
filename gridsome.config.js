// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: `https://tutorial-strapi-mongo-atlas.herokuapp.com`,
        queryLimit: 1000, // Defaults to 100
        contentTypes: [`restaurant`, `category`],
      }
    }
  ]
}
