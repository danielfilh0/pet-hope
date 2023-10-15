const { Router } = require('express')
const usersRouter = require('./users-routes')

const router = Router()

router.use(usersRouter)

module.exports = router