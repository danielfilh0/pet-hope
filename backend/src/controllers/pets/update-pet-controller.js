const makeUpdatePetUseCase = require('../../factories/pets/make-update-pet-use-case')
const isBoolean = require('../../utils/is-boolean')
const isString = require('../../utils/is-string')
const isValidUrl = require('../../utils/is-valid-url')

class UpdatePetController {
  async handle(req, res) {
    const { id } = req.params
    const { name, type, age, description, was_adopted, photo_url } = req.body

    if (!id) return res.status(400).json({ errorMessage: 'Forneça o ID do pet.' })

    if (!isString(name) || !isString(type) || !isString(age)) {
      return res.status(400).json({ errorMessage: 'Nome, tipo e idade precisam ser do tipo texto.' })
    }

    if (description && !isString(description)) {
      return res.status(400).json({ errorMessage: 'Descrição precisa ser do tipo texto.' })
    }

    if (photo_url && !isValidUrl(photo_url)) {
      return res.status(400).json({ errorMessage: 'Foto precisa ser uma URL.' })
    }

    if (was_adopted && !isBoolean(was_adopted)) {
      return res.status(400).json({ errorMessage: 'O valor was_adopted precisa ser verdadeiro ou falso.' })
    }

    const updatePetUseCase = makeUpdatePetUseCase()

    const pet = await updatePetUseCase.execute(id, {
      name,
      type,
      age,
      description,
      was_adopted,
      photo_url
    })

    return res.status(201).json(pet)
  }
}

module.exports = UpdatePetController
