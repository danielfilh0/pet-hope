const makeCreateUserUseCase = require('../../factories/make-create-user-use-case')
const isString = require('../../utils/is-string')
const isEmailValid = require('../../utils/is-valid-email')

class CreateUserController {
  async handle(req, res) {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ errorMessage: 'Nome, email e senha são obrigatórios.' })
    }

    if (!isString(name) || !isString(password)) {
      return res.status(400).json({ errorMessage: 'Nome, email e senha precisam ser do tipo texto.' })
    }

    if (password.length < 8) {
      return res.status(400).json({ errorMessage: 'A senha precisa ser maior ou igual a 8 caracteres.' })
    }

    if (!isEmailValid(email)) {
      return res.status(400).json({ errorMessage: 'O email precisa ser válido.' })
    }

    const createUserUseCase = makeCreateUserUseCase()

    const user = await createUserUseCase.execute({ name, email, password })

    return res.status(201).json(user)
  }
}

module.exports = CreateUserController