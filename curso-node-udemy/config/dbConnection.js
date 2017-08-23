'strict mode'

const mysql = require('mysql')

const connMySQL = function () {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'H4rdc0r3',
    database: 'portal_noticias'
  })
}

module.exports = function () {
  return connMySQL
}
