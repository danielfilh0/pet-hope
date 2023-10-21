const makeRemovePetUseCase = require('../../factories/pets/make-remove-pet-use-case')

class RemovePetController {
  async handle(req, res) {
    const { id } = req.params

    if (!id) return res.status(400).json({ errorMessage: 'Forneça o ID do pet.' })

    const removePetUseCase = makeRemovePetUseCase()

    await removePetUseCase.execute(id)

    return res.sendStatus(204)
  }
}

module.exports = RemovePetController
