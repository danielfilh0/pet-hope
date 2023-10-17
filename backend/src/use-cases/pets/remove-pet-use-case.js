const CustomError = require('../../utils/custom-error')

class RemovePetUseCase {
  constructor(petsRepository) {
    this.petsRepository = petsRepository
  }

  async execute(id) {
    const doesPetExists = await this.petsRepository.findById(id)

    if (!doesPetExists) throw new CustomError(404, 'Pet não encontrado.')

    await this.petsRepository.delete(id)
  }
}

module.exports = RemovePetUseCase
