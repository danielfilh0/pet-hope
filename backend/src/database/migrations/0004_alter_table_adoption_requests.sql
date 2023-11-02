ALTER TABLE adoption_requests
  ADD COLUMN new_status VARCHAR(20) CHECK (new_status IN ('PENDING', 'REJECTED', 'ACCEPTED'));

UPDATE adoption_requests
  SET new_status = CASE
    WHEN new_status = 'ACCEPTED' THEN 'ACCEPTED'
    ELSE 'PENDING'
    END;
    
ALTER TABLE adoption_requests
  DROP COLUMN status;

ALTER TABLE adoption_requests
  RENAME COLUMN new_status TO status;