// IMPORT MODULES under test here:
import { addSum, subSum, divideSum, multiSum } from '../mathUtils.js';

const test = QUnit.test;

// Addition
test('it should return 25 when provided 20 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 25;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addSum(20, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 455 when provided 416 and 39', (expect) => {
    const expected = 455;

    const actual = addSum(416, 39);

    expect.equal(actual, expected);
});



// Subtraction
test('it should return 67 when provided 103 and 36', (expect) => {
    const expected = 67;

    const actual = subSum(103, 36);

    expect.equal(actual, expected);
});

test('it should return -6 when provided 3 and 9', (expect) => {
    const expected = -6;

    const actual = subSum(3, 9);

    expect.equal(actual, expected);
});

// Division
test('it should return 9 when provided 45 and 5', (expect) => {
    const expected = 9;

    const actual = divideSum(45, 5);

    expect.equal(actual, expected);
});

test('it should return 200 when provided 1200 and 6', (expect) => {
    const expected = 200;

    const actual = divideSum(1200, 6);

    expect.equal(actual, expected);
});

// Multiply
test('it should return 312930 when provided 366 and 855', (expect) => {
    const expected = 312930;

    const actual = multiSum(366, 855);

    expect.equal(actual, expected);
});

test('it should return 10768944 when provided 1256 and 8574', (expect) => {
    const expected = 10768944;

    const actual = multiSum(1256, 8574);

    expect.equal(actual, expected);
});




