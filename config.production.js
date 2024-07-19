/** @type {import('@maizzle/framework').Config} */
export default {
  build: {
    output: {
      path: 'build_production',
    },
  },
  css: {
    inline: true,
    purge: true,
    shorthand: true,
  },
  prettify: true,
}
