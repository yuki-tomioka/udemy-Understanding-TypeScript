function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("入力値が正しくありません");
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const ResultPhrase = "Result: ";

add(number1, number2, printResult, ResultPhrase);
