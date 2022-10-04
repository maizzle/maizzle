/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
	prettify: true,
	prettify: {
		indent_with_tabs: true,
	  },
	inlineCSS: true,
	removeUnusedCSS: true,
	removeUnusedCSS: {
	  removeHTMLComments: false,
	  },
	extraAttributes: {
		a: {
			target: '_blank'
		},
		img: {
			border: '0'
		},
		table: {
			border: '0',
			role: 'presentation',
			cellpadding: '0',
			cellspacing: '0'
		},
	},
}
  
  