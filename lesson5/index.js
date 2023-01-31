// 1) Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
// 2) Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
// 3) Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
// 4) Выполнить явное преобразование(number, string, boolean)

const str = 'Hello';
const num = 45;
const bool = true;

console.log(str + bool); // "Hellotrue"
console.log(str + num); // "Hello45"
console.log(num + bool); // 46

console.log(str * bool); // NaN
console.log(str * num); // NaN
console.log(num * bool); // 45

console.log(str / bool); // NaN
console.log(str / num); // NaN
console.log(num / bool); // 45

console.log(Number(str)); // NaN
console.log(Number(bool)); // 1
console.log(String(num)); // "45"
console.log(String(bool)); // "true"
console.log(Boolean(num)); // true
console.log(Boolean(str)); // true
