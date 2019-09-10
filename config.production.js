module.exports = {
  build: {
    destination: {
      path: 'build_production',
    },
  },

  inlineCSS: {
    enabled: true,
  },

  cleanup: {
    removeUnusedCSS: {
      enabled: true,
      uglify: true,
    },
    replaceStrings: {
      '\\s?style=""': '',
    },
    preferBgColorAttribute: true,
  },

  minify: {
    minifyCSS: true,
    maxLineLength: 500,
    collapseWhitespace: true,
    processConditionalComments: true,
  },
}
