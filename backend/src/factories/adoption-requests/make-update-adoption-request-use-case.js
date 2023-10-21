const AdoptionRequestsRepository = require('../../repositories/adoption-requests-repository')
const UpdateAdoptionRequestUseCase = require('../../use-cases/adoption-requests/update-adoption-request-use-case')

function makeUpdateAdoptionRequestUseCase() {
  const adoptionRequestsRepository = new AdoptionRequestsRepository()
  
  const updateAdoptionRequestUseCase = new UpdateAdoptionRequestUseCase(
    adoptionRequestsRepository,
  )

  return updateAdoptionRequestUseCase
}

module.exports = makeUpdateAdoptionRequestUseCase
