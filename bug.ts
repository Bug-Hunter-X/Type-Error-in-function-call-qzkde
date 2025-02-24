function printString(str: string): void {
  console.log(str);
}

function calculate(a: number, b: number): number {
  return a + b;
}

const result = calculate(5, '10');
printString(result);