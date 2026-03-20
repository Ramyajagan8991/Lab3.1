#!/usr/bin/env node

// Node.js CLI Calculator
// Supported operations:
// - addition
// - subtraction
// - multiplication
// - division

const [,, op, ...args] = process.argv;

function showUsage() {
  console.log('Usage: node src/calculator.js <operation> <num1> <num2>');
  console.log('Supported operations: add, subtract, multiply, divide');
  console.log('Example: node src/calculator.js add 5 3');
}

if (!op || args.length < 2) {
  showUsage();
  process.exit(1);
}

const x = Number(args[0]);
const y = Number(args[1]);

if (Number.isNaN(x) || Number.isNaN(y)) {
  console.error('Error: both values must be valid numbers.');
  showUsage();
  process.exit(1);
}

let result;
switch (op.toLowerCase()) {
  case 'add':
  case 'addition':
    // addition
    result = x + y;
    break;
  case 'subtract':
  case 'subtraction':
    // subtraction
    result = x - y;
    break;
  case 'multiply':
  case 'multiplication':
    // multiplication
    result = x * y;
    break;
  case 'divide':
  case 'division':
    // division
    if (y === 0) {
      console.error('Error: cannot divide by zero.');
      process.exit(1);
    }
    result = x / y;
    break;
  default:
    console.error(`Error: unknown operation '${op}'.`);
    showUsage();
    process.exit(1);
}

console.log(result);
