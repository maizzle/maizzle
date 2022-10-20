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
	path: '../Production/clients/prismashop/2022/20220713_scenario_prm_multi_sources/',
	build: {
		tailwind: {
			css: '../Production/clients/prismashop/2022/20220713_scenario_prm_multi_sources/src/css/tailwind.css',
			config: '../Production/clients/prismashop/2022/20220713_scenario_prm_multi_sources/tailwind.config.js',
		},
		templates: {
			source: '../Production/clients/prismashop/2022/20220713_scenario_prm_multi_sources/src/templates',
			destination: {
				path: '../Production/clients/prismashop/2022/20220713_scenario_prm_multi_sources/build_production',
			},
			assets: {
				source: '../Production/clients/prismashop/2022/20220713_scenario_prm_multi_sources/src/images',
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
