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
      '(\\w+=")(\\s)': '$1',
      '\\sstyle[=""]?\\s': ' ',
      '\\sstyle>': '>',
    },
    preferBgColorAttribute: true,
  },

  prettify: {
    enabled: true,
  },
}
