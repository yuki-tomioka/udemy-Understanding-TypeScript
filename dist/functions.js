"use strict";
function add_02(n1, n2) {
    return n1 + n2;
}
function printResult_02(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
});
let combineValues;
combineValues = add_02;
console.log(combineValues(8, 8));
printResult_02(add_02(5, 12));
//# sourceMappingURL=functions.js.map