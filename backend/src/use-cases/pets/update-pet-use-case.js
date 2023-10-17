const CustomError = require('../../utils/custom-error')

class UpdatePetUseCase {
  constructor(petsRepository) {
    this.petsRepository = petsRepository
  }

  async execute(id, { name, type, age, photo_url, description, was_adopted }) {
    const doesPetExists = await this.petsRepository.findById(id)

    if (!doesPetExists) throw new CustomError(404, 'Pet não encontrado.')

    const types = ['DOG', 'CAT']
    const ages = ['NEWBORN', 'JUNIOR', 'TEEN', 'ADULT', 'OLD']

    const doTypeMatchesTypes = types.includes(type.toUpperCase())

    if (!doTypeMatchesTypes) throw new CustomError(400, 'O tipo do pet precisa ser: DOG ou CAT')

    const doAgeMatchesAges = ages.includes(age.toUpperCase())

    if (!doAgeMatchesAges) throw new CustomError(400, 'A idade do pet precisa ser: NEWBORN, JUNIOR, TEEN, ADULT ou OLD')

    const pet = this.petsRepository.update(id, {
      name,
      description,
      type: type.toUpperCase(),
      age: age.toUpperCase(),
      photo_url,
      was_adopted: was_adopted || doesPetExists.was_adopted,
    })

    return pet
  }
}

module.exports = UpdatePetUseCase
