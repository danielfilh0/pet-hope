const express = require('express')
require('express-async-errors')

const app = express()

app.use(express.json())

app.listen(3333, () => console.log('Server started at http://localhost:3333'))
