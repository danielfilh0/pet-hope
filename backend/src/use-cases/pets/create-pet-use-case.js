const CustomError = require('../../utils/custom-error')

class CreatePetUseCase {
  constructor(petsRepository) {
    this.petsRepository = petsRepository
  }

  async execute({ name, type, age, photo_url, description }) {
    const types = ['DOG', 'CAT']
    const ages = ['NEWBORN', 'JUNIOR', 'TEEN', 'ADULT', 'OLD']

    const doTypeMatchesTypes = types.includes(type.toUpperCase())

    if (!doTypeMatchesTypes) throw new CustomError(400, 'O tipo do pet precisa ser: DOG ou CAT')

    const doAgeMatchesAges = ages.includes(age.toUpperCase())

    if (!doAgeMatchesAges) throw new CustomError(400, 'A idade do pet precisa ser: NEWBORN, JUNIOR, TEEN, ADULT ou OLD')

    const pet = this.petsRepository.create({
      name,
      description,
      type: type.toUpperCase(),
      age: age.toUpperCase(),
      photo_url,
      was_adopted: false
    })

    return pet
  }
}

module.exports = CreatePetUseCase
