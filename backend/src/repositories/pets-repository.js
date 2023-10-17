const { query } = require('../database')

class UsersRepository {
  async findAll() {
    const rows = await query('SELECT * FROM pets ORDER BY name')

    return rows
  }

  async findById(id) {
    const [row] = await query(`
      SELECT *
      FROM pets
      WHERE id = $1
    `, [id])

    return row
  }

  async findByName(name) {
    const [row] = await query(`
      SELECT id, name, password
      FROM users
      WHERE name = $1
    `, [name])

    return row
  }

  async create({ name, type, age, photo_url, was_adopted, description }) {
    const [row] = await query(`
      INSERT INTO pets(name, type, age, photo_url, was_adopted, description)
      VALUES($1, $2, $3, $4, $5, $6)
      RETURNING *
    `, [name, type, age, photo_url, was_adopted, description])

    return row
  }

  async update(id, { name, type, age, photo_url, was_adopted }) {
    const [row] = await query(`
    UPDATE pets
    SET name = $1,
      type = $2,
      age = $3,
      photo_url = $4,
      was_adopted = $5
    WHERE id = $6
    RETURNING *
  `, [name, type, age, photo_url, was_adopted, id])

    return row
  }

  async delete(id) {
    const deleteOp = await query('DELETE FROM pets WHERE id = $1', [id])

    return deleteOp
  }
}

module.exports = UsersRepository
