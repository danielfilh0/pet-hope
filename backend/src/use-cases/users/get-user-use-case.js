const CustomError = require('../../utils/custom-error')

class GetUserUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository
  }
  
  async execute(id) {
    const user = await this.usersRepository.findById(id)

    if (!user) throw new CustomError(404, 'Usuário não encontrado.')

    return user
  }
}

module.exports = GetUserUseCase