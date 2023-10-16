const { Router } = require('express')
const usersRouter = require('./users-routes')
const petsRouter = require('./pets-routes')

const router = Router()

router.use(usersRouter)
router.use(petsRouter)

module.exports = router
