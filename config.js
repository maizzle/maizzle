/** @type {import('@maizzle/framework').Config} */
export default {
  build: {
    content: ['src/templates/**/*.html'],
    static: {
      source: ['src/images/**/*.*'],
      destination: 'images',
    },
  },
}
