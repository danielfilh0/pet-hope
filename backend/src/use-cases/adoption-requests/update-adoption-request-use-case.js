const CustomError = require('../../utils/custom-error')

class UpdateAdoptionRequestUseCase {
  constructor(adoptionRequestsRepository) {
    this.adoptionRequestsRepository = adoptionRequestsRepository
  }

  async execute(id, {
    contactName,
    contactPhone,
    contactAddress,
    status
  }) {
    const doesAdoptionRequestExists = await this.adoptionRequestsRepository.findById(id)
    
    if (!doesAdoptionRequestExists) throw new CustomError(404, 'Pedido de adoção não encontrado.')

    const allStatus = ['PENDING', 'REJECTED', 'ACCEPTED']

    const doesStatusMatchesAllStatus = allStatus.includes(status.toUpperCase())

    if (!doesStatusMatchesAllStatus) {
      throw new CustomError(400, 'O status do pedido precisa ser PENDING, REJECTED, ou ACCEPTED.')
    } 

    const adoptionRequest = this.adoptionRequestsRepository.update(id, {
      petId: doesAdoptionRequestExists.pet_id,
      contactName: contactName ?? doesAdoptionRequestExists.contact_name,
      contactPhone: contactPhone ?? doesAdoptionRequestExists.contact_phone,
      contactAddress: contactAddress ?? doesAdoptionRequestExists.contact_address,
      status: status.toUpperCase()
    })

    return adoptionRequest
  }
}

module.exports = UpdateAdoptionRequestUseCase
