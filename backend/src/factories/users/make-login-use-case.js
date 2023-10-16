const UsersRepository = require('../../repositories/users-repository')
const LoginUseCase = require('../../use-cases/users/login-use-case')

function makeLoginUseCase() {
  const usersRepository = new UsersRepository()
  const loginUseCase = new LoginUseCase(usersRepository)

  return loginUseCase
}

module.exports = makeLoginUseCase
