import { defineConfig } from '@maizzle/framework'

export default defineConfig({
  css: {
    purge: true,
    inline: true,
    shorthand: true,
  },
  html: {
    format: true,
  },
})
