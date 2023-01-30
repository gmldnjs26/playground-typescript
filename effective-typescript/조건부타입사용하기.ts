// function double<T extends string | number>(x: T): T;

// function double(x: any) {
//   return x + x;
// }

// const num2: number = 12;

// const num = double(num2);
// const str = double("x");

// function double(x: number): number;
// function double(x: string): string;

function double<T extends number | string>(
  x: T
): T extends string ? string : number;

function double(x: any) {
  return x + x;
}
const num = double(12);
const str = double("x");

function f(x: number | string) {
  return double(x);
}
