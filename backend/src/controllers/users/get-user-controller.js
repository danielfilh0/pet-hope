const makeGetUserUseCase = require('../../factories/make-get-user-use-case')

class GetUserController {
  async handle(req, res) {
    const getUserUseCase = makeGetUserUseCase()

    const user = await getUserUseCase.execute(req.userId)

    return res.json(user)
  }
}

module.exports = GetUserController