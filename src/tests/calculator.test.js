const { add, subtract, multiply, divide, calculate } = require('../calculator');

describe('Node.js CLI calculator operations', () => {
  test('addition should add two numbers', () => {
    expect(add(4, 5)).toBe(9);
  });

  test('subtraction should subtract two numbers', () => {
    expect(subtract(10, 3)).toBe(7);
  });

  test('multiplication should multiply two numbers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('division should divide two numbers', () => {
    expect(divide(20, 4)).toBe(5);
  });

  test('division by zero should throw', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero.');
  });

  test('calculate add operation should return sum', () => {
    expect(calculate('add', 1, 2)).toBe(3);
  });

  test('calculate subtract operation should return difference', () => {
    expect(calculate('subtract', 7, 3)).toBe(4);
  });

  test('calculate multiply operation should return product', () => {
    expect(calculate('multiply', 5, 5)).toBe(25);
  });

  test('calculate divide operation should return quotient', () => {
    expect(calculate('divide', 10, 2)).toBe(5);
  });

  test('calculate should throw on unsupported operation', () => {
    expect(() => calculate('mod', 10, 3)).toThrow('Unknown operation');
  });
});
