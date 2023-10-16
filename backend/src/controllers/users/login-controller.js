const makeLoginUseCase = require('../../factories/users/make-login-use-case')
const isString = require('../../utils/is-string')
const isEmailValid = require('../../utils/is-valid-email')

class LoginController {
  async handle(req, res) {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ errorMessage: 'Email e senha são obrigatórios.' })
    }

    if (!isEmailValid(email)) {
      return res.status(400).json({ errorMessage: 'O email precisa ser válido.' })
    }

    if (!isString(password)) {
      return res.status(400).json({ errorMessage: 'Senha precisa ser do tipo texto.' })
    }

    if (password.length < 8) {
      return res.status(400).json({ errorMessage: 'A senha precisa ser maior ou igual a 8 caracteres.' })
    }


    const loginUseCase = makeLoginUseCase()

    const acessToken = await loginUseCase.execute({ email, password })

    return res.status(201).json(acessToken)
  }
}

module.exports = LoginController
