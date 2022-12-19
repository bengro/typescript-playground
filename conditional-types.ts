// function declaration with conditional return type
function double<T extends number | string>(
  x: T
): T extends string ? string : number;

// followed by function implementation, following immediately
function double(x: any) {
  return x + x;
}

const aNumber = double(10);
const aString = double("10");
// const aObject = double({}); NOT OK, not string | number
