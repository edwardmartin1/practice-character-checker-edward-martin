const input = require("readline-sync");

let inputText = input.question("Tell me a word or phrase: ");
let inputIndex = input.questionInt("Tell me which index number to query: ");

console.log("The character at index " + inputIndex + " is " + inputText[inputIndex]);
