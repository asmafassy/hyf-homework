USE hyf_lesson2;
--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT *
FROM task
JOIN user_task on task.id=user_task.task_id
JOIN user ON user.id=user_task.user_id
WHERE user.email LIKE '%@spotify.com';
--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT *
FROM task
JOIN user_task on task.id=user_task.task_id
JOIN user ON user.id=user_task.user_id
WHERE user.name='Donald Duck' AND task.status_id=1 ;

--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT *
FROM task
JOIN user_task on task.id=user_task.task_id
JOIN user ON user.id=user_task.user_id
WHERE user.name='Maryrose Meadows' AND created LIKE '%09%';

--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT DATE_FORMAT(created, '%M'), COUNT(*)
FROM task
GROUP BY DATE_FORMAT(created, '%M');



