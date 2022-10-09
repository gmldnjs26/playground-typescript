let anyVar: any;
let unknownVar: unknown;

console.log(anyVar.length);

if (typeof unknownVar === "string") {
  console.log(unknownVar.length);
}
