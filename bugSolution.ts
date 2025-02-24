function printString(str: string): void {
  console.log(str);
}

function calculate(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

const num1 = 5;
const num2 = 10;

if (isNumber(num1) && isNumber(num2)) {
  const result = calculate(num1, num2);
  printString(result.toString());
} else {
  printString('Invalid input');
}

const num3 = 5;
const str = "10";
if (isNumber(num3) && typeof str === 'string') {
  const result = calculate(num3, parseInt(str));
  printString(result.toString());
} else {
  printString('Invalid input');
}