const { query } = require('../database')

class AdoptionRequestsRepository {
  async findAll() {
    const sql = `
      SELECT adoption_requests.*,
        pets.name AS pet_name,
        pets.type AS pet_type,
        pets.age AS pet_age,
        pets.photo_url AS pet_photo_url
      FROM adoption_requests
      INNER JOIN pets ON adoption_requests.pet_id = pets.id;
    `
    
    const rows = await query(sql)

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
    const sql = `
      SELECT adoption_requests.*,
        pets.name AS pet_name,
        pets.type AS pet_type,
        pets.age AS pet_age,
        pets.photo_url AS pet_photo_url
      FROM adoption_requests
      INNER JOIN pets ON adoption_requests.pet_id = pets.id
      WHERE pet_id = $1
    `

    const [row] = await query(sql, [petId])

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
    UPDATE adoption_requests
    SET pet_id = $1,
      contact_name = $2,
      contact_phone = $3,
      contact_address = $4,
      status = $5
    WHERE id = $6
    RETURNING *
  `, [petId, contactName, contactPhone, contactAddress, status, id])

    return row
  }

  async delete({ id, status }) {
    let sql

    if (status) sql = ['DELETE FROM adoption_requests WHERE status = $1', [status]]
    else if (id) sql = ['DELETE FROM adoption_requests WHERE id = $1', [id]]
    else return

    const deleteOp = await query(sql[0], sql[1])

    return deleteOp
  }
}

module.exports = AdoptionRequestsRepository
