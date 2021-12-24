// 1. String concatenation
console.log("my" + " cat"); // mycat
console.log("1" + 2); // 12
console.log(`string literals: 1 +  2 = ${1 + 2}`);

//2 Numeric operators
console.log(1 + 1); // add
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2); // 나머지
console.log(2 ** 3); // 2의 3승

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // 3
console.log(`preIncrement : ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; // 3
console.log(`postIncrement : ${postIncrement} , counter : ${counter}`); // 3 , 4

const preDecrement = --counter;
console.log(`preDecrement : ${preDecrement} , counter : ${counter}`); // 3  , 3

const postDecrement = counter--;
console.log(`postDecrement : ${postDecrement} , counst : ${counter}`); // 3 ,  2

// 4 Assignment operators

let x = 3;
let y = 6;
x += y; // x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators

console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6 Logical operators : || (or) , && (and) , !(not)
const value1 = false;
const value2 = 4 < 2;

// || (or) 처음으로 true 가 나오면 멈춤  뒤에가 true 든 false 든 상관없음
console.log(`or: ${value1 || value2 || check()}`);

// && (and) 세개가 true 가 나와야 한다.
console.log(`and: ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("wow");
  }
  return true;
}

if (nullableObject != null) {
  nullableObject.something;
}

// !(not) : 값을 반대로 바꿔줌
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion  : 타입을 변경해서 검사
console.log(stringFive == numberFive); // 똑같다 true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion : 타입이 다르면 다른거다 <- 이방법을 추천함
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// Object equality by reference
// 각자 서로 다른 오브젝트를 가리키고 있다.
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// equality - puzzler
console.log(0 == flase); // true
console.log(0 === flase); //  false
console.log("" == false); // true
console.log("" === flase); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. conditional operators: if
// if, else if , else
const name = "ellie";

if (name === "ellie") {
  console.log("Welcome, Ellie!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unkwnon");
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "ellie" ? "yes" : "no");

//10. switch
//use for multiple if checks

const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away");
    break;
  case "Chrome":
    console.log("love you!");
    break;
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("some all!");
    break;
}

// 반복문
// 11 . Loops
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// 12. do while
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop
for (i = 3; i > 0; i--) {
  console.log(`for : ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`line variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i : ${i}, j: ${j}`);
  }
}

for (let i = 0; i < 19; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`i : ${i}`);
}

for (let i = 0; i < 10; i++) {
  if (i == 8) {
    break;
  }
  console.log(`i = ${i}`);
}
