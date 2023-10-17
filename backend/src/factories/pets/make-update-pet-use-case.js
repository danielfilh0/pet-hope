const PetsRepository = require('../../repositories/pets-repository')
const UpdatePetUseCase = require('../../use-cases/pets/update-pet-use-case')

function makeUpdatePetUseCase() {
  const petsRepository = new PetsRepository()
  const updatePetUseCase = new UpdatePetUseCase(petsRepository)

  return updatePetUseCase
}

module.exports = makeUpdatePetUseCase
