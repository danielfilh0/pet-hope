const makeCreatePetUseCase = require('../../factories/pets/make-create-pet-use-case')
const isString = require('../../utils/is-string')
const isValidUrl = require('../../utils/is-valid-url')

class CreatePetController {
  async handle(req, res) {
    const { name, type, age, description, photo_url } = req.body

    if (!isString(name) || !isString(type) || !isString(age)) {
      return res.status(400).json({ errorMessage: 'Nome, tipo e idade precisam ser do tipo texto.' })
    }

    if (description && !isString(description)) {
      return res.status(400).json({ errorMessage: 'Descrição precisa ser do tipo texto.' })
    }

    if (photo_url && !isValidUrl(photo_url)) {
      return res.status(400).json({ errorMessage: 'Foto precisa ser uma URL.' })
    }

    const createPetUseCase = makeCreatePetUseCase()

    const pet = await createPetUseCase.execute(
      { name, type, age, description, photo_url }
    )

    return res.status(201).json(pet)
  }
}

module.exports = CreatePetController
