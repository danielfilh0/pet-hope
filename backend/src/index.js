const express = require('express')
const routes = require('./routes')
const cors = require('./middlewares/cors')
require('express-async-errors')

const app = express()

app.use(express.json())
app.use(cors)
app.use(routes)

// eslint-disable-next-line no-unused-vars
app.use(function(err, req, res, next) {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Erro desconhecido.'

  console.log(err)

  return res.status(statusCode).send({ errorMessage: message })
})

app.listen(3333, () => console.log('Server started at http://localhost:3333'))
