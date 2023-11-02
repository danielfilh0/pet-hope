const { Router } = require('express')

const use = require('../utils/use')
const ensureAuth = require('../middlewares/ensure-auth')
const ListAdoptionRequestsController = require('../controllers/adoption-requests/list-adoption-requests-controller')
const CreateAdoptionRequestController = require('../controllers/adoption-requests/create-adoption-request-controller')
const UpdateAdoptionRequestController = require('../controllers/adoption-requests/update-adoption-request-controller')
const RemoveAdoptionRequestsController = require('../controllers/adoption-requests/remove-adoption-requests-controller')

const adoptionRequestsRouter = Router()

const listAdoptionRequestsController = new ListAdoptionRequestsController()
const createAdoptionRequestController = new CreateAdoptionRequestController()
const updateAdoptionRequestController = new UpdateAdoptionRequestController()
const removeAdoptionRequestsController = new RemoveAdoptionRequestsController()

adoptionRequestsRouter.post('/adoption-requests', use(createAdoptionRequestController.handle))

adoptionRequestsRouter.get('/adoption-requests', use(ensureAuth), use(listAdoptionRequestsController.handle))
adoptionRequestsRouter.patch('/adoption-requests/:id', use(ensureAuth), use(updateAdoptionRequestController.handle))
adoptionRequestsRouter.delete('/adoption-requests', use(ensureAuth), use(removeAdoptionRequestsController.handle))

module.exports = adoptionRequestsRouter
