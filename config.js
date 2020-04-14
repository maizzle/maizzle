/*

Maizzle - HTML Email Development Framework

Welcome to the Maizzle config file. This is where you can customize Maizzle
for your project. Besides changing some values here and there, you can
also write custom functions and even require packages - it's all
just a JavaScript file that exports a `config` object.

View the full documentation at https://maizzle.com

*/

/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The `config` object contains the default Maizzle settings for development.
| This is used when you run the `maizzle build` or `maizzle serve`
| and it's the fastest, as most transformations are disabled.
|
*/

module.exports = {

  /*
  |-----------------------------------------------------------------------------
  | Build Config                         https://maizzle.com/docs/build-config/
  |-----------------------------------------------------------------------------
  |
  | Configure build related settings.
  |
  */

  build: {
    assets: {
      source: 'src/assets/images',
      destination: 'images',
    },
    browsersync: {
      watch: [
        'src/**/*.*',
        'tailwind.config.js',
      ],
    },
    destination: {
      path: 'build_local',
      extension: 'html',
    },
    tailwind: {
      css: 'src/assets/css/main.css',
      config: 'tailwind.config.js',
    },
    templates: {
      root: 'src/templates',
      extensions: 'html',
    },
  },

  /*
  |-----------------------------------------------------------------------------
  | Base Image URL                     https://maizzle.com/docs/base-image-url/
  |-----------------------------------------------------------------------------
  |
  | The URL you define here will be prepended to all image `src=""` values,
  | as well as all background images (attributes and inline CSS).
  |
  */

  baseImageURL: '',

  /*
  |-----------------------------------------------------------------------------
| Google Fonts                          https://maizzle.com/docs/google-fonts/
  |-----------------------------------------------------------------------------
  |
  | This is where you can define which Google Fonts Maizzle should import.
  | Remember, you still need to register the Tailwind utility.
  |
  */

  googleFonts: '',

  /*
  |-----------------------------------------------------------------------------
  | CSS Inlining                         https://maizzle.com/docs/css-inlining/
  |-----------------------------------------------------------------------------
  |
  | Control how CSS is inlined in your templates. Maizzle uses Juice for
  | inlining, and exposes some of its options to your config.
  |
  */

  inlineCSS: {
    enabled: false,
    styleToAttribute: {
      'background-color': 'bgcolor',
      'background-image': 'background',
      'text-align': 'align',
      'vertical-align': 'valign',
    },
    applySizeAttribute: {
      width: [],
      height: [],
    },
    keepOnlyAttributeSizes: {
      width: [],
      height: [],
    },
    preferBgColorAttribute: {
      enabled: true
    },
    excludedProperties: null,
  },

  /*
  |-----------------------------------------------------------------------------
  | CSS Clean-up         https://maizzle.com/docs/code-cleanup/#removeunusedcss
  |-----------------------------------------------------------------------------
  |
  | Options in `removeUnusedCSS` are passed directly to `email-comb`, which
  | can remove unused CSS and HTML comments, and even uglify class names.
  |
  | Enable this in any non-local environment config.
  |
  */

  removeUnusedCSS: {
    enabled: false,
  },

  /*
  |-----------------------------------------------------------------------------
  | Extra Attributes                 https://maizzle.com/docs/extra-attributes/
  |-----------------------------------------------------------------------------
  |
  | Defines which elements should receive which attributes with what values.
  |
  */

  extraAttributes: {
    table: {
      cellpadding: 0,
      cellspacing: 0,
      role: 'presentation',
    },
    img: {
      alt: ''
    }
  },

  /*
  |-----------------------------------------------------------------------------
  | URL Parameters                     https://maizzle.com/docs/url-parameters/
  |-----------------------------------------------------------------------------
  |
  | Define global URL parameters to append to all links in all templates.
  |
  */

  urlParameters: {},

  /*
  |-----------------------------------------------------------------------------
  | Prettify                                 https://maizzle.com/docs/prettify/
  |-----------------------------------------------------------------------------
  |
  | Option to pretty print your email code. Use if sending HTML to a human.
  |
  */

  prettify: {
    enabled: false,
    indent_inner_html: false,
    ocd: true,
  },

  /*
  |-----------------------------------------------------------------------------
  | Minify                                     https://maizzle.com/docs/minify/
  |-----------------------------------------------------------------------------
  |
  | Enable and configure minifier options.
  |
  */

  minify: {
    enabled: false,
  },
}
