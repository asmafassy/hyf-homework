USE hyf_lesson2;
-- 01) Get all the tasks assigned to Pavel; 
SELECT task.title,user.name
FROM task
JOIN user_task on task.id=user_task.task_id 
JOIN user on user.id=user_task.user_id
WHERE name LIKE 'Pavel%' ;
--02) Find how many tasks each user is responsible for;
SELECT COUNT(*)
FROM task
JOIN user_task on task.id=user_task.task_id 
JOIN user on user.id=user_task.user_id
GROUP BY user.id;

--03) Find how many tasks with a status=done each user is responsible for;
SELECT COUNT(*),user.name
FROM status
JOIN task on status.id=task.status_id
JOIN user_task on task.id=user_task.task_id 
JOIN user on user.id=user_task.user_id
WHERE status.name="Done"
GROUP BY user.id;
