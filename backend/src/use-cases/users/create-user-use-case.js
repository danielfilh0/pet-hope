var { hash } = require('bcryptjs')
const CustomError = require('../../utils/custom-error')

class CreateUserUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository
  }
  
  async execute({ name, email, password }) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if (userAlreadyExists) throw new CustomError(409, 'Usuário já existente.')

    const passwordHash = await hash(password, 6)

    const user = this.usersRepository.create({
      name,
      email,
      password: passwordHash
    })

    return user
  }
}

module.exports = CreateUserUseCase