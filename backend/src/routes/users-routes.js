const { Router } = require('express')
const CreateUserController = require('../controllers/users/create-user-controller')
const use = require('../utils/use')
const GetUserController = require('../controllers/users/get-user-controller')
const ensureAuth = require('../middlewares/ensure-auth')
const LoginController = require('../controllers/users/login-controller')

const usersRouter = Router()

const loginController = new LoginController()
const createUserController = new CreateUserController()
const getUserController = new GetUserController()

usersRouter.post('/auth', use(loginController.handle))
usersRouter.post('/users', use(createUserController.handle))
usersRouter.get('/users/me', use(ensureAuth), use(getUserController.handle))

module.exports = usersRouter