const { query } = require('../database')

class AdoptionRequestsRepository {
  async findAll() {
    const rows = await query('SELECT * FROM adoption_requests ORDER BY created_at')

    return rows
  }

  async findById(id) {
    const [row] = await query(`
      SELECT *
      FROM adoption_requests
      WHERE id = $1
    `, [id])

    return row
  }

  async findByPetId(petId) {
    const [row] = await query(`
      SELECT id, name, password
      FROM adoption_requests
      WHERE pet_id = $1
    `, [petId])

    return row
  }

  async create({
    petId,
    contactName,
    contactPhone,
    contactAddress,
    status
  }) {
    const [row] = await query(`
      INSERT INTO adoption_requests(
        pet_id,
        contact_name,
        contact_phone,
        contact_address,
        status
      )
      VALUES($1, $2, $3, $4, $5)
      RETURNING *
    `, [petId, contactName, contactPhone, contactAddress, status])

    return row
  }

  async update(id, {
    petId,
    contactName,
    contactPhone,
    contactAddress,
    status
  }) {
    const [row] = await query(`
    UPDATE pets
    SET name = $1,
      type = $2,
      age = $3,
      photo_url = $4,
      was_adopted = $5
    WHERE id = $6
    RETURNING *
  `, [petId, contactName, contactPhone, contactAddress, status, id])

    return row
  }

  async delete(id) {
    const deleteOp = await query('DELETE FROM adoption_requests WHERE id = $1', [id])

    return deleteOp
  }
}

module.exports = AdoptionRequestsRepository
