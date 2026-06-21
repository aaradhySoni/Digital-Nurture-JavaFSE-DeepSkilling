SET SERVEROUTPUT ON;

BEGIN
    FOR rec IN (
        SELECT C.CustomerName,
               L.LoanID,
               L.DueDate
        FROM Customers C
        JOIN Loans L
        ON C.CustomerID = L.CustomerID
        WHERE L.DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ID '
            || rec.LoanID
            || ' for '
            || rec.CustomerName
            || ' is due on '
            || TO_CHAR(rec.DueDate,'DD-MON-YYYY')
        );
    END LOOP;
END;
/