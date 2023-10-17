const PetsRepository = require('../../repositories/pets-repository')
const RemovePetsUseCase = require('../../use-cases/pets/remove-pet-use-case')

function makeRemovePetsUseCase() {
  const petsRepository = new PetsRepository()
  const removePetsUseCase = new RemovePetsUseCase(petsRepository)

  return removePetsUseCase
}

module.exports = makeRemovePetsUseCase
