// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
"use strict"; // strict 모드로 개발 자바스크립트 엔진이 효율적으로 더욱 빠르게 분석-> 성능개선 업 !

// 2. Variable  변수 : 변경될수 있는 값  rw(read/write) - 읽고 쓰기가 가능하다.
// let (added in ES6)
let name = "ellie"; // 변수의 값 할당 한가지의 박스를 가리키고 있는 곳에 ellie값 저장
console.log(name); // 출력

name = "hello";
console.log(name);

let globalName = "global name"; // 어플리케이션 실행하고 끝나는 순간까지 메모리에 탑재됨

// 블록 밖에서는 블록안에 못본다.
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
}

console.log(name);
console.log(globalName);

// var 쓰면 안되는 이유
// 선언도 하기 전에 값을 할당해버리고 출력도 가능해서.. 쓰면 안됨
// var hoisting : 어디선언 상관없이 맨 위로 선언을 끌어 올려준다.
// var은 블럭범위가 없다..
console.log(age);
var age;
age = 4;
// var 는 선언하기도 전에 사용가능.. let 은 선언하고 사용가능
{
  age = 4; // 아무곳에서나 보이게 됨...
  var age;
}
console.log(age);

// 3. Constant(read only) : 값을 할당하면 바뀌지 않는 값 다시는 값을 변경 할수 없다.  - 읽기만 가능하고 다른값으로 쓰는게 불가능하다.
// 웬만하면 값을 할당하고 변경되지 않는 데이터 타입
// 이유 1. 보안상 2. 다양한 스레드가 동시에 변수에 값을변경되니.. 값이 변하지않는걸 사용 3.
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types (primitive : value 값 자체가 메모리에 저장 , object : 너무커서 메모리에 ellie 가 가리키는 레퍼런스를 통해서 object가 담겨있는 메모리를 )
// 더이상 작은 단위로 나눠줄수없는 아이템 : number, String , boolean , null , undefiedn, symbol
// function , 프로그래밍 언어는 함수도 변수에 할당이 가능하고 그렇기 떄문에 함수에 인자로도 리턴으로 함수

// 자바스크립트는 number 로 다끝난다~~

const count = 17; // Integer
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt
const bigInt = 1234567889123213123213213n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//String
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting} , type: ${typeof greeting}`);

const helloBob = "hi ${brendan}!";
console.log(`value: ${helloBob} , type: ${typeof helloBob}`);
console.log(`value: " + helloBob + " type : " + typeof ${helloBob}`);

// boolean
// flase : 0 , null , undefined , NaN , ''
// true : any other value  다른값들은 true 로 봄
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test} , type: ${typeof test}`);

// null
let nothing = null;
console.log(`value : ${nothing}, type: ${typeof nothing}`);

// undefined 값이 정해지지 않은
let x = undefined;
console.log(`value : ${x}, type : ${typeof x}`);

// symbol 식별자 동일한 것으로 만들어도 다르다
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");

console.log(symbol1 === symbol2);

// 동일한 심볼로 만드는 방법

const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");

console.log(gSymbol1 === gSymbol2);

// 5. 다이나믹 타이핑 : 선언시 어떤 타입인지 선언하지 않아도 프로그램 동작할때 할당된 값에 따라 변경됨
// 프로토 타입에 유용하지만 다수의 엔지니어 다이나믹 타이핑 떄문에 발등에 불.

let text = "hello";
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + "5";
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); 오류가 발생한다.

// object 이름 , 나이  const 한번 할당된 오브젝트는 다른 오브젝트로 변경 불가
const ellie = { name: "ellie", age: 20 };
