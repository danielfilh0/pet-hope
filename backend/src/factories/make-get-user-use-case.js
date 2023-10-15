const UsersRepository = require('../repositories/users-repository')
const GetUserUseCase = require('../use-cases/users/get-user-use-case')

function makeGetUserUseCase() {
  const usersRepository = new UsersRepository()
  const getUserUseCase = new GetUserUseCase(usersRepository)

  return getUserUseCase
}

module.exports = makeGetUserUseCase