const Maizzle = require('@maizzle/framework')

module.exports = {
  build: env => Maizzle.build(env),
  serve: () => Maizzle.serve(),
}
