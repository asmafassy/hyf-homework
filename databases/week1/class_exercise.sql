--01)Select the names and phones of all users
SELECT 
`name`, `phone` FROM user; 
--02)Select the name of the user with id=10;
SELECT `name`, `id` FROM user WHERE id=10;
--03)Find how many users exist in the database;
SELECT COUNT(id) FROM user; 
--04) Select the names of the first 5 users in the database;
SELECT `name`,`id` FROM user LIMIT 5; -- 3,7
--05)Select the names of the last 3 users in the database;
SELECT `name`, `id` FROM user ORDER BY `id` DESC LIMIT 3;
-- DESC Decending order
--06)Select the names of the last 3 users in the database;
SELECT SUM(`id`) FROM user;
--07) Select all users and order them alphabetically by name;
SELECT `name` from user ORDER BY `name`;
--08) Find all tasks that include SQL either on the title or on the description;
SELECT `title`, `description` from task where `title` LIKE "%SQL%" or `description` LIKE "%SQL%";
--09)Find the title of all tasks that the user Maryrose is responsible for;
SELECT task.title from task JOIN  user ON user.id=task.user_id where user.name LIKE "%Maryrose%";
--10)Find how many tasks each user is responsible for;
SELECT user.name, COUNT(task.id) FROM user JOIN task ON user.id=task.user_id GROUP BY user.id;
--11)Find how many tasks with a status=Done each user is responsible for;
SELECT task.title,status.name from task JOIN status on task.status_id=status.id JOIN user ON user.id=task.user_id WHERE status.name ="Done";



--10)Find how many tasks each user is responsible for;
--SELECT COUNT(task.title), user.name from task JOIN user ON user.id=task.user_id GROUP BY user.name;

