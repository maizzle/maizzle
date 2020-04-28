/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run the `maizzle build` or `maizzle serve` and it
| has the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  build: {
    assets: {
      source: 'src/assets/images',
      destination: 'images',
    },
    destination: {
      path: 'build_local',
    },
    tailwind: {
      css: 'src/assets/css/main.css',
    },
    templates: {
      root: 'src/templates',
    },
  },
}
