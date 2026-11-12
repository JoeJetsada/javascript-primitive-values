// Exercise #4: E-commerce logic bug
// Close Quokka before do this!

let numberOfSoldProduct = 12000;
let numberOfProductInStock = undefined;

console.log((numberOfSoldProduct / numberOfProductInStock) * 100);
// ข้อนี้คำตอบจะเป็น NaN เพราะ 12000 หารด้วย undefined (ยังไม่มีค่า) จะเป็น NaN