USE employees_db;

INSERT INTO department (name)
    VALUES
        ("Management"),
        ("Sales"),
        ("Parts and service");
       
INSERT INTO role (title, salary, department_id)
    VALUES
        ("Manager", 60000, 1),
        ("Cashier", 42000, 2),
        ("Service technician", 45000, 3),
        ("Parts manager", 47000, 3),
        ("Helper", 27000, 2);
        

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
        ("Rayne", "Day", 01, NULL),
        ("Ayden", "Games", 02, 1),
        ("Dylan", "Art", 03, 1),
        ("Kingston", "Love", 04, 1),
        ("Jesse", "Messy", 04, 1),
        ("Tari", "Binari", 02, 1),
        ("Citrine", "Sunshine", 05, 1),
        ("Crabby", "Patti", 05, 1);


         