// unit.test.js

const { expect } = require('@jest/globals');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//phone number
test('test phone number with correct num of digits', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('test phone number with parantheses', () => {
    expect(functions.isPhoneNumber('(123)-456-7890')).toBe(true);
});

test('test phone number with letters', () => {
    expect(functions.isPhoneNumber('1as-4f6-7tt0')).toBe(false);
});

test('test phone number thats 1 digit long', () => {
    expect(functions.isPhoneNumber('1')).toBe(false);
});

//email
test('test valid school email', () => {
    expect(functions.isEmail('jSmith@ucsd.edu')).toBe(true);
});

test('test email with numbers also', () => {
    expect(functions.isEmail('j1242Smith@gmail.com')).toBe(true);
});

test('test invalid email extension', () => {
    expect(functions.isEmail('jSmith@ucsd.edu12')).toBe(false);
});

test('test email with no @', () => {
    expect(functions.isEmail('jSmithucsd.edu')).toBe(false);
});

//password
test('test valid strong password', () => {
    expect(functions.isStrongPassword('a12as5_')).toBe(true);
});

test('test valid strong password with only letters', () => {
    expect(functions.isStrongPassword('aaaaaaa')).toBe(true);
});

test('test password that does not start with a letter', () => {
    expect(functions.isStrongPassword('1aaaaaa')).toBe(false);
});

test('test password that has special characters', () => {
    expect(functions.isStrongPassword('a234%^cj')).toBe(false);
});

//date
test('test valid date', () => {
    expect(functions.isDate('11/10/2020')).toBe(true);
});

test('test alt date', () => {
    expect(functions.isDate('08/13/1999')).toBe(true);
});

test('test date with letters', () => {
    expect(functions.isDate('11/10/assr')).toBe(false);
});

test('test date with more digits', () => {
    expect(functions.isDate('118/1013/2020')).toBe(false);
});

//hexColor
test('test valid color 6 char long', () => {
    expect(functions.isHexColor('#608b04')).toBe(true);
});

test('test valid color 3 char long', () => {
    expect(functions.isHexColor('#604')).toBe(true);
});

test('test code with to many characters', () => {
    expect(functions.isHexColor('#608b04324')).toBe(false);
});

test('test code with special characters', () => {
    expect(functions.isHexColor('#60&!as')).toBe(false);
});