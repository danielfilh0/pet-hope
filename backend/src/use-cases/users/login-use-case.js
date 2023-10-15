const { compare } = require('bcryptjs')
const jwt = require('jsonwebtoken')
const CustomError = require('../../utils/custom-error')

class LoginUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository
  }
  
  async execute({ email, password }) {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) throw new CustomError(404, 'Usuário não encontrado.')

    const doesPasswordMatches = await compare(password, user.password)

    if (!doesPasswordMatches) throw new CustomError(401, 'Email ou senha errados.')

    const acessToken = jwt.sign(
      {
        sub: user.id
      },
      process.env.JWT_PASS,
      {
        expiresIn: '8h'
      }
    )

    return { acessToken }
  }
}

module.exports = LoginUseCase