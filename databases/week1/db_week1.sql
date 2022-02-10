--01)Find out how many tasks are in the task table
SELECT COUNT(id) as total_task from task;
--02)Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(id) FROM task WHERE due_date IS NULL;
--03) Find all the tasks that are marked as done
SELECT `title` FROM task WHERE status_id = 3;
--04)Find all the tasks that are not marked as done
SELECT title FROM task WHERE status_id != 3 ;
--05)Get all the tasks, sorted with the most recently created first
SELECT `title`, `created` from task order by created DESC;
--06)Get the single most recently created task
SELECT `title`, `created` from task order by created DESC LIMIT 1;
--07)Get the title and due date of all tasks where the title or description contains database
SELECT `title`, `due_date`, `description` FROM task WHERE task.title LIKE "%database%" or task.description LIKE "%database%";
--08)Get the title and status (as text) of all tasks
SELECT task.title, status.name from task JOIN status ON task.status_id=status.id;
--09)Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(task.title) from status JOIN task ON task.status_id=status.id GROUP BY status.name;
--10)Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name, COUNT(task.title) from status JOIN task ON task.status_id=status.id GROUP BY status.name ORDER BY  COUNT(task.title) DESC ;

