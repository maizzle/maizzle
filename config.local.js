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
	path: '../production/clients/harmonie_mutuelles/2022/202209_template_newsletter/',
	build: {
		tailwind: {
			css: '../production/clients/harmonie_mutuelles/2022/202209_template_newsletter/src/css/tailwind.css',
			config: '../production/clients/harmonie_mutuelles/2022/202209_template_newsletter/tailwind.config.js',
		},
		templates: {
			source: '../production/clients/harmonie_mutuelles/2022/202209_template_newsletter/src/templates',
			destination: {
				path: '../production/clients/harmonie_mutuelles/2022/202209_template_newsletter/build_production',
			},
			assets: {
				source: '../production/clients/harmonie_mutuelles/2022/202209_template_newsletter/src/images',
				destination: 'images',
			},
		},
	},
	replaceStrings: {
        'fixedstyle': 'style',
        'classtokeep': 'class',
		'@@@': '',
		'xxx_couleur_mag_xxx': '${couleur_mag}',
		'xxx_couleur_mag_secondaire_xxx': '${couleur_mag_secondaire}',
    },
}
