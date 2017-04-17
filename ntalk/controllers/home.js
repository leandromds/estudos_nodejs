'use strict'

module.exports = (app) => {
  const HomeController = {
    index: (req, res) => {
      res.render('home/index')
    }
  }
  console.log('executado o controller')

  return HomeController
}
