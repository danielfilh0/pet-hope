const AdoptionRequestsRepository = require('../../repositories/adoption-requests-repository')
const ListAdoptionRequestsUseCase = require('../../use-cases/adoption-requests/list-adoption-requests-use-case')

function makeListAdoptionRequestsUseCase() {
  const adoptionRequestsRepository = new AdoptionRequestsRepository()
  
  const listAdoptionRequestsUseCase = new ListAdoptionRequestsUseCase(
    adoptionRequestsRepository,
  )

  return listAdoptionRequestsUseCase
}

module.exports = makeListAdoptionRequestsUseCase
