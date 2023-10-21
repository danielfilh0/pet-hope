class ListAdoptionRequestsUseCase {
  constructor(adoptionRequestsRepository) {
    this.adoptionRequestsRepository = adoptionRequestsRepository
  }

  async execute() {
    return this.adoptionRequestsRepository.findAll()
  }
}

module.exports = ListAdoptionRequestsUseCase
