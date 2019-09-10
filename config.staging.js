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
      whitelist: ['.External*', '.ReadMsgBody', '.yshortcuts', '.Mso*', '#*'],
    },
    replaceStrings: {
      '\\s?style=""': '',
    },
    preferBgColorAttribute: true,
  },

  prettify: {
    enabled: true,
  },
}
