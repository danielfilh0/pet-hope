const PetsRepository = require('../../repositories/pets-repository')
const AdoptionRequestsRepository = require('../../repositories/adoption-requests-repository')
const CreateAdoptionRequest = require('../../use-cases/adoption-requests/create-adoption-request')

function makeCreateAdoptionRequestUseCase() {
  const adoptionRequestsRepository = new AdoptionRequestsRepository()
  const petsRepository = new PetsRepository()
  
  const createAdoptionRequest = new CreateAdoptionRequest(
    adoptionRequestsRepository,
    petsRepository
  )

  return createAdoptionRequest
}

module.exports = makeCreateAdoptionRequestUseCase
