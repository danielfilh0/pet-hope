const makeCreateAdoptionRequestUseCase = require('../../factories/adoption-requests/make-create-adoption-request-use-case')
const isString = require('../../utils/is-string')

class CreateAdoptionRequestController {
  async handle(req, res) {
    const {
      petId,
      contactName,
      contactPhone,
      contactAddress
    } = req.body

    if (!isString(contactName) || !isString(contactPhone) || !isString(contactAddress)) {
      return res.status(400).json({
        errorMessage: 'ID do pet e campos de contato precisam ser do tipo texto.'
      })
    }

    const createAdoptionRequest = makeCreateAdoptionRequestUseCase()

    const adoptionRequest = await createAdoptionRequest.execute({
      petId,
      contactName,
      contactPhone,
      contactAddress
    })

    return res.status(201).json(adoptionRequest)
  }
}

module.exports = CreateAdoptionRequestController
