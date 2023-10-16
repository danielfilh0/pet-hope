const PetsRepository = require('../../repositories/pets-repository')
const CreatePetUseCase = require('../../use-cases/pets/create-pet-use-case')

function makeCreatePetUseCase() {
  const petsRepository = new PetsRepository()
  const createPetUseCase = new CreatePetUseCase(petsRepository)

  return createPetUseCase
}

module.exports = makeCreatePetUseCase
