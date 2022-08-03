INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Jinbe', 'Si I', 1, 1),
    ('Roronoa', 'Zoro', 2, 1),
    ('Tony Tony', 'Chopper', 3, 1),
    ('Nico', 'Robin', 4, 1)
    ('Cutty', 'Flam', 5, 1),
    ('Cora', 'Donquixote', 1, 2),
    ('Bee', 'Po', 2, 2),
    ('Pen', 'Guin', 3, 2),
    ('Keele', 'Luhr', 5, 3),
    ('Quincy', 'Jones', 5, 3);

INSERT INTO managers (manage_first, manage_last, salary)
VALUES
    ('Monkey D.', 'Luffy', 300000),
    ('Trafalgar D.', 'Law', 300000),
    ('Eustace', 'Kidd', 300000);

INSERT INTO roles (job_title, salary, department_id)
VALUES
    ('Project Manager', 130000.00, 1),
    ('Lead Sales Representative', 105000.00, 1),
    ('Quality Assurance Specialist', 120000.00, 2),
    ('Lead Product Researcher', 140000.00, 2),
    ('Product Engineer', 110000.00, 3);
    
INSERT INTO departments (department_name)
VALUES
    ('Sales'),
    ('Research and Quality Insurance'),
    ('Engineering');