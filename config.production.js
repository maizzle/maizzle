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
      '(\\w+=")(\\s)': '$1',
      '\\sstyle[=""]?\\s': ' ',
      '\\sstyle>': '>',
    },
    preferBgColorAttribute: true,
  },

  minify: {
    enabled: true,
    minifyCSS: true,
    maxLineLength: 500,
    collapseWhitespace: true,
    processConditionalComments: true,
  },
}
