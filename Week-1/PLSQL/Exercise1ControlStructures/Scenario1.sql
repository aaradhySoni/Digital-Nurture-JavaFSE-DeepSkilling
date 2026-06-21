 CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    IsVIP VARCHAR2(5)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER,
    DueDate DATE,
    FOREIGN KEY(CustomerID)
    REFERENCES Customers(CustomerID)
);

INSERT INTO Customers
VALUES (1,'Rahul Sharma',DATE '1950-05-10',15000,'FALSE');

INSERT INTO Customers
VALUES (2,'Priya Singh',DATE '1985-08-20',8000,'FALSE');

INSERT INTO Customers
VALUES (3,'Amit Verma',DATE '1958-02-15',25000,'FALSE');

INSERT INTO Loans
VALUES (101,1,10,SYSDATE+20);

INSERT INTO Loans
VALUES (102,2,12,SYSDATE+40);

INSERT INTO Loans
VALUES (103,3,11,SYSDATE+15);

COMMIT;

SET SERVEROUTPUT ON;

BEGIN
    FOR rec IN (
        SELECT L.LoanID
        FROM Customers C
        JOIN Loans L
        ON C.CustomerID = L.CustomerID
        WHERE FLOOR(MONTHS_BETWEEN(SYSDATE, C.DOB)/12) > 60
    )
    LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - (InterestRate * 0.01)
        WHERE LoanID = rec.LoanID;
    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('1% interest discount applied successfully.');
END;
/

SELECT * FROM Loans;