const CustomError = require('../../utils/custom-error')

class CreateAdoptionRequest {
  constructor(adoptionRequestsRepository, petsRepository) {
    this.adoptionRequestsRepository = adoptionRequestsRepository
    this.petsRepository = petsRepository
  }

  async execute({
    petId,
    contactName,
    contactPhone,
    contactAddress
  }) {
    const doesPetExists = await this.petsRepository.findById(petId)

    if (!doesPetExists) throw new CustomError(404, 'O pet informado não foi encontrado.')

    const adoptionRequest = this.adoptionRequestsRepository.create({
      petId,
      contactName,
      contactPhone,
      contactAddress,
      status: 'PENDING'
    })

    return adoptionRequest
  }
}

module.exports = CreateAdoptionRequest
