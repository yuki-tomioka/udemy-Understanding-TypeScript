function add_02(n1: number, n2: number) {
  return n1 + n2;
}

function printResult_02(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});

let combineValues: (a: number, b: number) => number;

combineValues = add_02;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

printResult_02(add_02(5, 12));
