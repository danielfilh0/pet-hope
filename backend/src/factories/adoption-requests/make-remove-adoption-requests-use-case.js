const AdoptionRequestsRepository = require('../../repositories/adoption-requests-repository')
const RemoveAdoptionRequestsUseCase = require('../../use-cases/adoption-requests/remove-adoption-requests-use-case')

function makeRemoveAdoptionRequestsUseCase() {
  const petsRepository = new AdoptionRequestsRepository()
  const removeAdoptionRequestsUseCase = new RemoveAdoptionRequestsUseCase(petsRepository)

  return removeAdoptionRequestsUseCase
}

module.exports = makeRemoveAdoptionRequestsUseCase
