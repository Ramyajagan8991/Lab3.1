#!/usr/bin/env node

// Node.js CLI Calculator
// Supported operations:
// - addition
// - subtraction
// - multiplication
// - division

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
  if (b === 0) {
    throw new Error('Cannot divide by zero.');
  }
  return a / b;
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
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
}

if (require.main === module) {
  const [,, op, arg1, arg2] = process.argv;

  function showUsage() {
    console.log('Usage: node src/calculator.js <operation> <num1> <num2>');
    console.log('Supported operations: add, subtract, multiply, divide');
    console.log('Example: node src/calculator.js add 5 3');
  }

  if (!op || !arg1 || !arg2) {
    showUsage();
    process.exit(1);
  }

  const a = Number(arg1);
  const b = Number(arg2);

  if (Number.isNaN(a) || Number.isNaN(b)) {
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
  calculate,
};
