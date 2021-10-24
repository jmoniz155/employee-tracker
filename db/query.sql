SELECT id, first_name, last_name FROM employees;

SELECT 
    id,
    first_name,
    last_name,
FROM employees AS a JOIN employees ON role_id = department_id;