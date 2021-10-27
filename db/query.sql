SELECT  first_name, last_name, role_id from employee;

SELECT
  a.id,
  CONCAT(a.first_name, " ", a.last_name) AS name,
  CONCAT(b.first_name, " ", b.last_name) AS manager
FROM employee AS a LEFT JOIN employee AS b
ON a.manager_id = b.id;

SELECT * FROM department;

SELECT CONCAT(employee.first_name, " ", employee.last_name) AS name FROM employee;

SELECT role.id, title, name AS department, salary FROM role JOIN department ON role.department_id = department.id;

SELECT
  a.id,
  CONCAT(a.first_name, " ", a.last_name) AS name,
  CONCAT(b.first_name, " ", b.last_name) AS manager,
  role.title AS role, 
  role.salary,
  department.name AS department
FROM employee AS a 
LEFT JOIN employee AS b
ON a.manager_id = b.id
JOIN role ON a.role_id = role.id
JOIN department ON role.department_id = department.id;