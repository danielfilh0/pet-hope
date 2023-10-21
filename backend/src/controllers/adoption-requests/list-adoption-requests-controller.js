const makeListAdoptionRequestsUseCase = require('../../factories/adoption-requests/make-list-adoption-requests-use-case')

class ListAdoptionRequestsController {
  async handle(req, res) {
    const listAdoptionRequestsUseCase = makeListAdoptionRequestsUseCase()

    const adoptionRequests = await listAdoptionRequestsUseCase.execute()

    return res.json(adoptionRequests)
  }
}

module.exports = ListAdoptionRequestsController
