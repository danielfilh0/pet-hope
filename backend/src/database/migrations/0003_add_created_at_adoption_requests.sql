ALTER TABLE adoption_requests ADD COLUMN created_at TIMESTAMP;
ALTER TABLE adoption_requests ALTER COLUMN created_at SET DEFAULT now();
ALTER TABLE adoption_requests ALTER COLUMN created_at SET NOT NULL;
