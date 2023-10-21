const makeListPetsUseCase = require('../../factories/pets/make-list-pets-use-case')

class ListPetsController {
  async handle(req, res) {
    const listPetsUseCase = makeListPetsUseCase()

    const pets = await listPetsUseCase.execute()

    return res.json(pets)
  }
}

module.exports = ListPetsController
