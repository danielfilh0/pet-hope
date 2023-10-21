const makeRemoveAdoptionRequestsPetsUseCase = require('../../factories/adoption-requests/make-remove-adoption-requests-use-case')

class RemoveAdoptionRequestsController {
  async handle(req, res) {
    const { id, status } = req.query

    if (!id && !status) return res.status(400).json({ errorMessage: 'ID ou status do pedido de adoção não informados.' })

    const removePetUseCase = makeRemoveAdoptionRequestsPetsUseCase()

    await removePetUseCase.execute({ id, status })

    return res.sendStatus(204)
  }
}

module.exports = RemoveAdoptionRequestsController
