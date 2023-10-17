const { Router } = require('express')
const use = require('../utils/use')
const ensureAuth = require('../middlewares/ensure-auth')
const ListPetsController = require('../controllers/pets/list-pets-controller')
const CreatePetController = require('../controllers/pets/create-pet-controller')
const UpdatePetController = require('../controllers/pets/update-pet-controller')
const RemovePetController = require('../controllers/pets/remove-pet-controller')

const petsRouter = Router()

const listPetsController = new ListPetsController()
const createPetController = new CreatePetController()
const updatePetController = new UpdatePetController()
const removePetController = new RemovePetController()

petsRouter.get('/pets', use(listPetsController.handle))
petsRouter.post('/pets', use(ensureAuth), use(createPetController.handle))
petsRouter.put('/pets/:id', use(ensureAuth), use(updatePetController.handle))
petsRouter.delete('/pets/:id', use(ensureAuth), use(removePetController.handle))

module.exports = petsRouter
