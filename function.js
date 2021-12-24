// function
// 여러번 재사용이 가능
// 한가지의 태스크나 값을 계산
// function name(param1 , param2) {body .... return;  }
// 하나의 함수는 오직 한가지 일
// 함수는 무언가 동작하는것이기 때문에   doSomething , command , verb  같이
// 자바스크립트에서는 함수는 오브젝트이다.  변수에 할당 도 가능 변수에 리턴도 가능

function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}

log("Hello"); // 함수 자체 인터페이스는 String ? 숫자? 명확하지않다
// 그래서 숫자를 전달할수있다..
// 숫자가 문자여롤 변환됨..
log(1234);

// 2. Parametes
// prametive parametest : passed by value
// object parameters : passed by reference

function changeName(obj) {
  // 전달된 obj를
  obj.name = "coder"; // 이름을 coder로
}
const ellie = { name: "ellie" }; // 레퍼런스 - 오브젝트 메모리를 가리킴
changeName(ellie); // 전달된 eliie 가 가리키고있는 값을 coder 로 변경

console.log(ellie);

// 3 Default parametes (added in ES6)
function showMessage(message, from) {
  if (from === undefined) {
    // from 값이 없으면
    from = "unknown";
  }
  console.log(`${message} by ${from}`);
}
showMessage("Hi");

// 3 Default parametes (added in ES6)
function showMessage(message, from = "unknown") {
  // 사용자가 파라미터값을 전달하지 않으면

  console.log(`${message} by ${from}`);
}
showMessage("Hi");

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  // 배열 형태로 전달된다.
  for (let i = 0; i < args.length; i++) {
    // 처음부터 args 개수만큼 출력
    console.log(args[i]);
  }

  for (const arg of args) {
    // arg 모든값들이 하나하나 지정되서 출력
    console.log(arg);
  }
  args.forEach((arg) => console.log(arg)); // for each 로도 출력 가능
}
printAll("dream", "coding", "ellie");
printAll.arguments; // 함수가 왜 오브젝트이냐면 . 를 통해서 확인가능 => 프로토타입

// 5. Local scope
// 밖에서는 안을 볼수 없고 안에서는 밖을 볼수있다.
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello"; // 지역변수 (안에서만 접근 가능)
  console.log(message); // local variable
  console.log(globalMessage);

  function printAnother() {
    console.log(message); // 자식은 부모를 참조할수있지만
    let childMessage = "hello"; // 부모는 자식을 참조 불가..
  }

  // console.log(childMessage); // error
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b; // 계산된값을 리턴하게 된다.
}
const result = sum(1, 2); // 3
console.log(`sum :  ${sum(1, 2)}`);

// 7 Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic... 블럭안에서 작성 하면 가독성이 떨어짐
  }
}
// 위에 것보다
function upgradeUser(user) {
  if (user.point <= 10) {
    // 조건이 맞지않을때 리턴 시키는게 낫다
    return;
  }
}
// function expression
// First - class Function
// 함수는 다른 함수에 할당 되기도 하고 함수는 파라미터로 전달되고
// 리턴값으로 리턴된다
const print = function () {
  // 함수에 이름이 없는 어나니머스 펀션
  // 이름이 있는건 네임드펀션
  console.log("print"); // 필요한것만 변수에 할당 가능
};
print(); // print
const printAgain = print;
printAgain(); // print
const sumAgain = sum; // 기존 함수를 할당
console.log(sumAgain(1, 3)); // 4

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  // 파라미터로 함수 상황에 맞으면 전달된 함수를 부른다
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function () {
  // 할당 anonymous function
  console.log("yes!");
};

const printNo = function print() {
  // 할당 names function
  // console.log("no!");
  //  print(); // 또다른 함수를 호출 -> 재귀함수 피보나치수열할때 필요할떄만.. 호출하기
};
randomQuiz("wrong", printYes, printNo); // 맞으면 yes 틀리면 no
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
  console.log("simplePrint!");
};

// 위코드를  Arrow function 으로 만들면
// const simplePrint = () => console.log("simplePrint!");
// const add = (a, b) => a + b; // 이것이 더 간결 하게 쓸수있다. (함수형 프로그래밍)
// const add = function (a, b) {
//  return a + b;
// };

const simpleMultiply = (a, b) => {
  // 다양한일을 하는 함수가 필요하면 블록을 쓸수있다 대신 값을 리턴해 줘야 한다.
  return a * b;
};

// IIFE : Immediately Invoked Function Expression
// 함수 선언 동시에 호출하기
(function hello() {
  console.log("IIFE");
})();
// 함수를 선언하면 호출해줘야 하지만 선언함과 동시에 함수호출가능
//Fun quiz time
// function calculate(command, a, b)
// command : add , substract , divide , multiply , remainde

function calculate(command, a, b) {
  if (command === "add") {
    return a + b;
  } else if (command === "substarct") {
    return a - b;
  } else if (command === "divide") {
    return a / b;
  } else if (command === "multiply") {
    return a * b;
  } else if (command === "remainder") {
    return a % b;
  }
}
console.log(`${calculate("multiply", 5, 2)}`);
