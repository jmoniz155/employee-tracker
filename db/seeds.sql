USE employees_db;

INSERT INTO departments (id, department)
    VALUES
        (1, "Management"),
        (2, "Sales"),
        (3, "Parts and service");
       
    
        

INSERT INTO role (id, title, salary, department_id)
    VALUES
        (01, Manager, 60,000, 1),
        (02, Cashier, 42,000, 2),
        (03, Service technician, 45,000, 3),
        (04, Parts manager, 47,000, 3),
        (05, Helper, 27,000, 2);
        

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
    VALUES
        (001, Rayne, Day, 01, 1),
        (002, Ayden, Games, 02, 1),
        (003, Dylan, Art, 03, 1),
        (004, Kingston, Love, 04, 1),
        (005, Jesse, Messy, 04, 1),
        (006, Tari, Binari, 02, 1),
        (007, Citrine, Sunshine, 05, 1),
        (008, Kaiden, kitty, 05, 1);


         