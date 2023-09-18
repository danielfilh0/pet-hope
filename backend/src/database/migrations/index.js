const { query } = require('..')

query(`
  CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100)
  );

  CREATE TABLE pets (
    id serial PRIMARY KEY,
    name VARCHAR(100),
    type VARCHAR(10) CHECK (type IN ('DOG', 'CAT')),
    age VARCHAR(20) CHECK (age IN ('NEWBORN', 'JUNIOR', 'TEEN', 'ADULT', 'OLD')),
    photo_url VARCHAR(200),
    was_adopted BOOLEAN
  );

  CREATE TABLE adoption_requests (
    id serial PRIMARY KEY,
    pet_id INT,
    contact_name VARCHAR(100),
    contact_phone VARCHAR(20),
    contact_address VARCHAR(200),
    status VARCHAR(20) CHECK (status IN ('PENDING', 'ACCEPTED')),
    FOREIGN KEY (pet_id) REFERENCES Pets(id)
  );
`).then(() => {
  console.log('Database created successfully!')
}).catch(() => {
  console.error('Error during creating of database.')
})