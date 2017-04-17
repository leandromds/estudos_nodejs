'use strict'

const express = require('express')
const load = require('express-load')
const path = require('path')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

load('models')
  .then('controllers')
  .then('routers')
  .into(app)

app.listen(3000, () => {
  console.log('ntalk executando!')
})
