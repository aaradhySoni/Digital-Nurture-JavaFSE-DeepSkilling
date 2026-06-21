-- ==========================================
-- Scenario 2
-- Update Employee Bonus
-- ==========================================

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    EmployeeName VARCHAR2(100),
    Department VARCHAR2(50),
    Salary NUMBER
);

INSERT INTO Employees
VALUES (1,'Rahul','IT',50000);

INSERT INTO Employees
VALUES (2,'Priya','HR',40000);

INSERT INTO Employees
VALUES (3,'Amit','IT',60000);

COMMIT;

SELECT * FROM Employees;

SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department IN VARCHAR2,
    p_bonus IN NUMBER
)
IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus / 100)
    WHERE Department = p_department;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'Bonus applied successfully.'
    );
END;
/

BEGIN
    UpdateEmployeeBonus('IT',10);
END;
/

SELECT * FROM Employees;