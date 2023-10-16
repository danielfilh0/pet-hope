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

  ALTER TABLE users ALTER COLUMN name SET NOT NULL, ALTER COLUMN email SET NOT NULL, ALTER COLUMN password SET NOT NULL;
  ALTER TABLE pets ALTER COLUMN name SET NOT NULL, ALTER COLUMN type SET NOT NULL, ALTER COLUMN age SET NOT NULL, ALTER COLUMN was_adopted SET NOT NULL;
  ALTER TABLE adoption_requests ALTER COLUMN pet_id SET NOT NULL, ALTER COLUMN contact_name SET NOT NULL, ALTER COLUMN contact_phone SET NOT NULL, ALTER COLUMN contact_address SET NOT NULL, ALTER COLUMN status SET NOT NULL;

  ALTER TABLE pets ADD COLUMN description TEXT;
`).then(() => {
  console.log('Database created successfully!')
}).catch(() => {
  console.error('Error during creating of database.')
})
