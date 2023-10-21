const CustomError = require('../../utils/custom-error')

class RemoveAdoptionRequestUseCase {
  constructor(adoptionRequestsRepository) {
    this.adoptionRequestsRepository = adoptionRequestsRepository
  }

  async execute({ id, status }) {
    const allStatus = ['PENDING', 'ACCEPTED']

    const doesStatusMatchesAllStatus = allStatus.includes(status?.toUpperCase())

    if (status && !doesStatusMatchesAllStatus) {
      throw new CustomError(400, 'O status do pedido precisa ser PENDING ou ACCEPTED.')
    }

    await this.adoptionRequestsRepository.delete({ id, status: status?.toUpperCase() })
  }
}

module.exports = RemoveAdoptionRequestUseCase
