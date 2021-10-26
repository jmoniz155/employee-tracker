SELECT  first_name, last_name, role_id from employee;

SELECT
  a.id,
  CONCAT(a.first_name, " ", a.last_name) AS name,
  CONCAT(b.first_name, " ", b.last_name) AS manager
from employee AS a LEFT JOIN employee AS b
on a.manager_id = b.id;

select * from department;

SELECT CONCAT(employee.first_name, " ", employee.last_name) AS name FROM employee;