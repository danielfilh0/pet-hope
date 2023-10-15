const { verify } = require('jsonwebtoken')
const CustomError = require('../utils/custom-error')
const UsersRepository = require('../repositories/users-repository')

const usersRepository = new UsersRepository()

async function ensureAuth(req, res, next) {
  const { authorization } = req.headers

  if (!authorization) throw new CustomError(401, 'Operação não autorizada.')

  const [, token] = authorization.split(' ')

  try {
    const { sub } = verify(token, process.env.JWT_PASS)

    const user = await usersRepository.findById(sub)

    if (!user) throw new CustomError(401, 'Operação não autorizada.')

    req.userId = user.id

    next()
  } catch (err) {
    throw new CustomError(400, 'Token inválido ou expirado.')
  }
}

module.exports = ensureAuth