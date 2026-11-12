// Exercise #6: Displaying message

let totalParts = 13000;

// ให้แสดงข้อความ "Total: 13000 Machine parts" โดยใช้การ String Concatenation และ Template Literal

let concatSentence = "Total: " + totalParts + " Machine parts";
let literalSentence = `Total: ${totalParts} Machine Parts`;

// ** เวลาทำ Template Literal ต้องใช้ `` (backticks)

console.log(concatSentence);
console.log(literalSentence);