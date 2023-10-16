const { Router } = require('express')
const use = require('../utils/use')
const ensureAuth = require('../middlewares/ensure-auth')
const CreatePetController = require('../controllers/pets/create-pet-controller')
const ListPetsController = require('../controllers/pets/list-pets-controller')

const petsRouter = Router()

const createPetController = new CreatePetController()
const listPetsController = new ListPetsController()

petsRouter.get('/pets', use(listPetsController.handle))
petsRouter.post('/pets', use(ensureAuth), use(createPetController.handle))

module.exports = petsRouter
