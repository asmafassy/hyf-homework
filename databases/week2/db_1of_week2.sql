SELECT
  *
FROM
  task;
--Part 1: working with tasks
  -- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO
  task(
    title,
    description,
    created,
    updated,
    due_date,
    status_id,
    user_id
  )
VALUES(
    'Read a book',
    'Prioritize this',
    '2017-12-31 01:41:55',
    '2018-01-01 12:41:55',
    '2018-01-31 01:41:55',
    3,
    7
  );
--Change the title of a task
UPDATE
  task
SET
  title = 'Walk the cat'
WHERE
  id = 8;
--Change a task due date
UPDATE
  task
SET
  due_date = '2017-10-12 17:43:16'
WHERE
  id = 8;
--Change a task status
UPDATE
  task
  JOIN status ON status.id = task.status_id
set
  task.status_id = '2'
WHERE
  task.id = 10;
--Mark a task as complete
UPDATE
  task
  JOIN status ON status.id = task.status_id
set
  task.status_id = '3'
WHERE
  task.id = 3;
--Delete a task
DELETE FROM
  task
WHERE
  id = 5;



