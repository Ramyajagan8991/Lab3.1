#!/usr/bin/env node

// Node.js CLI Calculator
// Supported operations:
// - addition
// - subtraction
// - multiplication
// - division
// - modulo
// - exponentiation
// - square root

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero.');
  return a / b;
}

function modulo(a, b) {
  if (b === 0) throw new Error('Cannot modulo by zero.');
  return a % b;
}

function power(a, b) {
  return Math.pow(a, b);
}

function sqrt(a) {
  if (a < 0) throw new Error('Cannot compute square root of negative number.');
  return Math.sqrt(a);
}

function calculate(operation, a, b) {
  switch (operation.toLowerCase()) {
    case 'add':
    case 'addition':
      return add(a, b);
    case 'subtract':
    case 'subtraction':
      return subtract(a, b);
    case 'multiply':
    case 'multiplication':
      return multiply(a, b);
    case 'divide':
    case 'division':
      return divide(a, b);
    case 'mod':
    case 'modulo':
      return modulo(a, b);
    case 'pow':
    case 'power':
    case 'exponentiation':
      return power(a, b);
    case 'sqrt':
    case 'squareroot':
      return sqrt(a);
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
}

if (require.main === module) {
  const [,, op, arg1, arg2] = process.argv;

  function showUsage() {
    console.log('Usage: node src/calculator.js <operation> <num1> [num2]');
    console.log('Supported operations: add, subtract, multiply, divide, modulo, pow, sqrt');
    console.log('Example: node src/calculator.js add 5 3');
    console.log('Example sqrt: node src/calculator.js sqrt 9');
  }

  if (!op || !arg1) {
    showUsage();
    process.exit(1);
  }

  const a = Number(arg1);
  const b = arg2 !== undefined ? Number(arg2) : undefined;

  if (Number.isNaN(a) || (arg2 !== undefined && Number.isNaN(b))) {
    console.error('Error: both values must be valid numbers.');
    showUsage();
    process.exit(1);
  }

  try {
    const result = calculate(op, a, b);
    console.log(result);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  sqrt,
  calculate,
};
