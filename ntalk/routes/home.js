'use strict'

module.exports = (app) => {
  const home = app.controllers.home
  app.get('/', home.index)
  console.log('executado o route')
}
