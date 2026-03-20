const { add, subtract, multiply, divide, modulo, power, sqrt, calculate } = require('../calculator');

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

  test('mod should compute remainder', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('modulo by zero should throw', () => {
    expect(() => modulo(5, 0)).toThrow('Cannot modulo by zero.');
  });

  test('power should exponentiate', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('sqrt should compute square root', () => {
    expect(sqrt(9)).toBe(3);
  });

  test('sqrt of negative should throw', () => {
    expect(() => sqrt(-1)).toThrow('Cannot compute square root of negative number.');
  });

  test('calculate add operation should return sum', () => {
    expect(calculate('add', 1, 2)).toBe(3);
  });

  test('calculate sqrt operation should return square root', () => {
    expect(calculate('sqrt', 16)).toBe(4);
  });

  test('calculate exponentiation operation should return power', () => {
    expect(calculate('exponentiation', 3, 3)).toBe(27);
  });

  test('calculate unknown operation throws', () => {
    expect(() => calculate('foo', 1, 2)).toThrow('Unknown operation');
  });
});
