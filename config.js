/*

Maizzle - Email Development Framework

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
  | Doctype                                   https://maizzle.com/docs/doctype/
  |-----------------------------------------------------------------------------
  |
  | Define a global doctype to be used in the master Layout.
  |
  */

  doctype: 'html',

  /*
  |-----------------------------------------------------------------------------
  | Language                                 https://maizzle.com/docs/language/
  |-----------------------------------------------------------------------------
  |
  | Set a global `lang=""` attribute for the `<html>` tag in the master Layout.
  |
  */

  language: 'en',

  /*
  |-----------------------------------------------------------------------------
  | Character set                             https://maizzle.com/docs/charset/
  |-----------------------------------------------------------------------------
  |
  | Set a global character encoding. Also used in the master Layout.
  |
  */

  charset: 'utf8',

  /*
  |-----------------------------------------------------------------------------
| Google Fonts                          https://maizzle.com/docs/google-fonts/
  |-----------------------------------------------------------------------------
  |
  | This is where you can define which Google Fonts Maizzle should import.
  |
  */

  googleFonts: '',

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
      width: ['TABLE', 'TD', 'TH', 'IMG', 'VIDEO'],
      height: ['TABLE', 'TD', 'TH', 'IMG', 'VIDEO'],
    },
    excludedProperties: null,
  },

  /*
  |-----------------------------------------------------------------------------
  | Code Clean-up                        https://maizzle.com/docs/code-cleanup/
  |-----------------------------------------------------------------------------
  |
  | Various options for cleaning up and optimizing your email's CSS and markup.
  |
  */

  cleanup: {

    /*
    |-----------------------------------------------------------------------------
    | PurgeCSS                    https://maizzle.com/docs/code-cleanup/#purgecss
    |-----------------------------------------------------------------------------
    |
    | PurgeCSS will remove unused CSS selectors. This takes place *before*
    | CSS inlining and `removeUnusedCSS`.
    |
    */

    purgeCSS: {
      content: [
        'src/layouts/**/*.*',
        'src/partials/**/*.*',
        'src/components/**/*.*',
      ],
      whitelist: [],
      whitelistPatterns: [],
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
    | Keep Only Attribute Sizes
    | https://maizzle.com/docs/code-cleanup/#keeponlyattributesizes
    |-----------------------------------------------------------------------------
    |
    | Define for which elements Maizzle should only keep attribute sizes, like
    | `width=""` and `height=""`. Elements in these arrays will have their
    | inline CSS widths and heights removed.
    |
    */

    keepOnlyAttributeSizes: {
      width: ['TABLE', 'TD', 'TH', 'IMG', 'VIDEO'],
      height: ['TABLE', 'TD', 'TH', 'IMG', 'VIDEO'],
    },

    /*
    |-----------------------------------------------------------------------------
    | Prefer bgcolor Attribute
    | https://maizzle.com/docs/code-cleanup/#preferbgcolorattribute
    |-----------------------------------------------------------------------------
    |
    | When set to `true`, Maizzle will remove `background-color` inline CSS.
    |
    */

    preferBgColorAttribute: false,
  },

  /*
  |-----------------------------------------------------------------------------
  | Extra Attributes                 https://maizzle.com/docs/extra-attributes/
  |-----------------------------------------------------------------------------
  |
  | Defines which elements should receive which attributes with what values.
  |
  */

  applyExtraAttributes: {
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
  | Enable pretty printing your email code. Use if sending HTML to a human.
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
  | Configure html-minifier options. Use in production emails.
  |
  */

  minify: {
    removeEmptyAttributes: true,
  },

  /*
  |-----------------------------------------------------------------------------
  | BrowserSync                           https://maizzle.com/docs/browsersync/
  |-----------------------------------------------------------------------------
  |
  | Configure BrowserSync options.
  |
  */

  browsersync: {
    port: 3000,
    tunnel: false,
    directory: true,
    notify: false,
    watch: [
      'src/layouts/**/*.*',
      'src/partials/**/*.*',
      'src/components/**/*.*',
    ],
  },

  /*
  |-----------------------------------------------------------------------------
  | Markdown                          https://maizzle.com/docs/markdown/#config
  |-----------------------------------------------------------------------------
  |
  | Configure options for Marked.js.
  |
  */

  markdown: {
    baseUrl: null,
    breaks: false,
    gfm: true,
    headerIds: false,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pendantic: false,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tables: true,
    xhtml: false
  },

  /*
  |-----------------------------------------------------------------------------
  | Build                                 https://maizzle.com/docs/build-paths/
  |-----------------------------------------------------------------------------
  |
  | Configure build source and destination paths.
  |
  */

  build: {
    destination: {
      path: 'build_local',
      extension: 'html',
    },
    layout: 'src/layouts/default.njk',
    templates: {
      source: 'src/templates',
      filetypes: 'html|njk|nunjucks',
    },
    tailwind: {
      css: 'src/assets/css/main.css',
      config: 'tailwind.config.js',
    },
    assets: {
      source: 'src/assets/images',
      destination: 'images',
    },
  },
}
