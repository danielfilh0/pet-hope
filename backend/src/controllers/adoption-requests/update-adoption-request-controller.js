const makeUpdateAdoptionRequestUseCase = require('../../factories/adoption-requests/make-update-adoption-request-use-case')

class UpdateAdoptionRequestController {
  async handle(req, res) {
    const { id } = req.params
    const { status } = req.body

    if (!id) return res.status(400).json({
      errorMessage: 'ID do pedido de adoção não informado.'
    })

    if (!status) return res.status(400).json({
      errorMessage: 'Status do pedido de adoção não informado.'
    })

    const updateAdoptionRequestUseCase = makeUpdateAdoptionRequestUseCase()

    const adoptionRequest = await updateAdoptionRequestUseCase.execute(id, { status })

    return res.status(201).json(adoptionRequest)
  }
}

module.exports = UpdateAdoptionRequestController
