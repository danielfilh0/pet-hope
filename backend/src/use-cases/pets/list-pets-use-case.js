class ListPetsUseCase {
  constructor(petsRepository) {
    this.petsRepository = petsRepository
  }

  async execute() {
    const pets = await this.petsRepository.findAll()

    return pets
  }
}

module.exports = ListPetsUseCase
