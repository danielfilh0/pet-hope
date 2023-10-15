const UsersRepository = require('../repositories/users-repository')
const CreateUserUseCase = require('../use-cases/users/create-user-use-case')

function makeCreateUserUseCase() {
  const usersRepository = new UsersRepository()
  const createUserUseCase = new CreateUserUseCase(usersRepository)

  return createUserUseCase
}

module.exports = makeCreateUserUseCase