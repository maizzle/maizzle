/*
|-------------------------------------------------------------------------------
| Production config           https://maizzle.com/docs/environments/#production
|-------------------------------------------------------------------------------
|
| This is where you define settings that optimize your emails for production.
| These will be merged on top of the base config.js, so you only need to
| specify the options that are changing.
|
*/

module.exports = {
  build: {
    destination: {
      path: 'build_production',
    },
  },

  inlineCSS: {
    enabled: true,
  },

  prettify: {
    enabled: true,
  },

  removeUnusedCSS: {
    enabled: true,
  },
}
