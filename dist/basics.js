"use strict";
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
let number1;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let ResultPhrase = "Result: ";
add(number1, number2, printResult, ResultPhrase);
//# sourceMappingURL=basics.js.map