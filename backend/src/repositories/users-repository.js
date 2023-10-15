const { query } = require('../database')

class UsersRepository {
  async findAll() {
    const rows = await query('SELECT id, name, email FROM users ORDER BY name')

    return rows
  }

  async findById(id) {
    const [row] = await query(`
      SELECT id, name, email
      FROM users
      WHERE id = $1
    `, [id])

    return row
  }

  async findByEmail(email) {
    const [row] = await query(`
      SELECT id, email, password
      FROM users
      WHERE email = $1
    `, [email])

    return row
  }

  async create({ name, email, password }) {
    const [row] = await query(`
      INSERT INTO users(name, email, password)
      VALUES($1, $2, $3)
      RETURNING id, name, email
    `, [name, email, password])

    return row
  }

  async update(id, { name, email, password }) {
    const [row] = await query(`
    UPDATE users
    SET name = $1
      email = $2
      password = $3
    WHERE id = $4
    RETURNING *
  `, [name, email, password, id])

    return row
  }

  async delete(id) {
    const deleteOp = await query('DELETE FROM users WHERE id = $1', [id])

    return deleteOp
  }
}

module.exports = UsersRepository