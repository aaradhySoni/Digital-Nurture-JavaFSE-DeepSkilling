package org.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class AAASetupTeardownTest {

     private Calculator calculator;
    @Before
    public void setUp() {
        System.out.println("Setup Executed");
        calculator = new Calculator();
    }

    @Test
    public void testAddition() {
        // Arrange
        int a = 10;
        int b = 20;
        // Act
        int result = calculator.add(a,b);
        // Assert
        assertEquals(30,result);
    }

    @After
    public void tearDown() {
        System.out.println( "Teardown Executed");
    }
}