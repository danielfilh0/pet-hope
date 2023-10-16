ALTER TABLE users ALTER COLUMN name SET NOT NULL, ALTER COLUMN email SET NOT NULL, ALTER COLUMN password SET NOT NULL;
ALTER TABLE pets ALTER COLUMN name SET NOT NULL, ALTER COLUMN type SET NOT NULL, ALTER COLUMN age SET NOT NULL, ALTER COLUMN was_adopted SET NOT NULL;
ALTER TABLE adoption_requests ALTER COLUMN pet_id SET NOT NULL, ALTER COLUMN contact_name SET NOT NULL, ALTER COLUMN contact_phone SET NOT NULL, ALTER COLUMN contact_address SET NOT NULL, ALTER COLUMN status SET NOT NULL;

ALTER TABLE pets ADD COLUMN description TEXT;