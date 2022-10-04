/*
|-------------------------------------------------------------------------------
| Production config                       https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| This is where you define settings that optimize your emails for production.
| These will be merged on top of the base config.js, so you only need to
| specify the options that are changing.
|
*/

module.exports = {
	path: '../Production/clients/nose/20220628_Transac_re-design/src/',
	build: {
		tailwind: {
			css: '../Production/clients/nose/20220628_Transac_re-design/src/css/tailwind.css',
		},
		templates: {
			source: '../Production/clients/nose/20220628_Transac_re-design/src/templates',
			destination: {
				path: '../Production/clients/nose/20220628_Transac_re-design/build_production',
			},
			assets: {
				source: '../Production/clients/nose/20220628_Transac_re-design/src/images',
				destination: 'images',
			},
		},
	},
	replaceStrings: {
        'fixedstyle': 'style',
        'classtokeep': 'class',
    },
}
