const PetsRepository = require('../../repositories/pets-repository')
const ListPetsUseCase = require('../../use-cases/pets/list-pets-use-case')

function makeListPetsUseCase() {
  const petsRepository = new PetsRepository()
  const listPetsUseCase = new ListPetsUseCase(petsRepository)

  return listPetsUseCase
}

module.exports = makeListPetsUseCase
