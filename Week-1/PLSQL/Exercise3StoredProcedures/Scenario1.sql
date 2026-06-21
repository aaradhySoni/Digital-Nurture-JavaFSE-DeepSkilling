-- ==========================================
-- Scenario 1
-- Process Monthly Interest for Savings Accounts
-- ==========================================

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(100),
    Balance NUMBER
);

INSERT INTO Accounts
VALUES (1,'Rahul Sharma',10000);

INSERT INTO Accounts
VALUES (2,'Priya Singh',20000);

INSERT INTO Accounts
VALUES (3,'Amit Verma',15000);

COMMIT;

SELECT * FROM Accounts;

SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01);

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'Monthly interest processed successfully.'
    );
END;
/

BEGIN
    ProcessMonthlyInterest;
END;
/

SELECT * FROM Accounts;