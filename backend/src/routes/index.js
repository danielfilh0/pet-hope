const { Router } = require('express')
const usersRouter = require('./users-routes')
const petsRouter = require('./pets-routes')
const adoptionRequestsRouter = require('./adoption-requests-routes')

const router = Router()

router.use(usersRouter)
router.use(petsRouter)
router.use(adoptionRequestsRouter)

module.exports = router
