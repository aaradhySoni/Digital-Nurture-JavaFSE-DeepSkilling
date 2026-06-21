-- ==========================================
-- Scenario 3
-- Transfer Funds Between Accounts
-- ==========================================

CREATE TABLE BankAccounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(100),
    Balance NUMBER
);

INSERT INTO BankAccounts
VALUES (101,'Rahul Sharma',10000);

INSERT INTO BankAccounts
VALUES (102,'Priya Singh',5000);

COMMIT;

SELECT * FROM BankAccounts;

SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE TransferFunds(
    p_fromAccount IN NUMBER,
    p_toAccount IN NUMBER,
    p_amount IN NUMBER
)
IS
    v_balance NUMBER;
BEGIN

    SELECT Balance
    INTO v_balance
    FROM BankAccounts
    WHERE AccountID = p_fromAccount;

    IF v_balance >= p_amount THEN

        UPDATE BankAccounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_fromAccount;

        UPDATE BankAccounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_toAccount;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE(
            'Transfer Successful.'
        );

    ELSE

        DBMS_OUTPUT.PUT_LINE(
            'Insufficient Balance.'
        );

    END IF;

END;
/

BEGIN
    TransferFunds(101,102,2000);
END;
/

SELECT * FROM BankAccounts;