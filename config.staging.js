module.exports = {
  build: {
    destination: {
      path: 'build_staging',
    },
  },

  inlineCSS: {
    enabled: true,
  },

  cleanup: {
    removeUnusedCSS: {
      enabled: true,
    },
    replaceStrings: {
      '\\s(style|class)(=""|(?=>)|(?=\\s))+': '',
    },
    preferBgColorAttribute: true,
  },

  prettify: {
    enabled: true,
  },
}
