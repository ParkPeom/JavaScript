// object 는 키와 value 의 집합체 이다.
// ex ) const obj = {key : name , key : name}
// key는 String 타입이어야 한다.

// primitive type - 변수 하나당 하나의 값만 할당
const name = "ellie";
const age = 4;
print(name, age);

// 관리하기힘들어짐..
function print(name, age) {
  console.log(name);
  console.log(age);
}

// 위 코드를 개선하기 위해 오브젝트를 쓴다.

// 오브젝트 만드는 방법
const obj = {}; // object lieral
const obj2 = new Object(); // object constructor

const ellie = { name: "ellie", age: 4 };
function print2(person2) {
  console.log(person2.name);
  console.log(person2.age);
}
print2(ellie);

// 오브젝트를 { } 사용해서 만들수 있다.
const ellie2 = { name: "ellie", age: 4 };

print(ellie2);

// Runtime : 프로그램이 동작하고 있을때 프로퍼티를 추가,삭제 할수있다.
// 맘이 바꿀때 뒤늦게 추가 할수 있다.
ellie.hasJob = true;
console.log(ellie.hasJob);

// 삭제도 가능하다..
delete ellie.hasJob;

//2. computed properties
// key should be always string
console.log(ellie.name); // 키의 값을 받아오고 싶을때 .(dot)
console.log(ellie["name"]); // 어떤키가 필요한지 즉 런타임에서 결정될때

// key는 String타입
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]); // key을 어떤걸 입력해야할지 우리는 모를때
}
printValue(ellie, "name"); // key는 항상 String 타입이어야 한다.
printValue(ellie, "age");
printValue(ellie, "love");

//3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };

// 3가지 오브젝트 인데

const person4 = { name: "ell" }; // 일리리 더 입력해주기 떄문에 불편...

// 함수를 만들어서 리턴해 주면 된다.
// 오브젝트를 일리리 계속 생성해주면 귀찮다 함수로 만들어두면 좋음(값만 전달해주면 됨)
// 오브젝트로 만들어질 함수는 첫글자가 대문자다
// return으로 하지않고 this 를 쓴다

// 4. Constructor
function MakePerson(name, age) {
  // this = {};
  this.name = name;
  this.age = age;

  // return this;
}
const person5 = MakePerson("LOVE", 5);
console.log(person5);

const person6 = new MakePerson("bum", 6); // 자바스크립트가 알아서 오브젝트를 생성해 준다.

// 5. in operator: property existence check (key in obj)
// key로 가지고 있는지
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
for (key in ellie) {
  // 키들을 출력하기
  console.log(key);
}
console.clear();

// for (value of iterable)
// 배열 리스트 를 순차적으로 iterable
const array = [1, 2, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//for (value of iterable)
const array2 = [1, 2, 4, 5];
for (value of array2) {
  // array 모든값들이 value 에 할당된다.
  console.log(value);
}

//7. Fun cloning
//Object.assingn(desc, [obj1 , obj2 , obj3...])
const user = { name: "ellie", age: 20 }; // 오브젝트를 생성한다.
const user2 = user; // user2 가 user를 가리킨다.

user2.name = "coder"; // 참조변수 값을 바꾸면
console.log(user); // ellie -> coder

// old way
const user3 = {};
for (key in user) {
  // user안에있는 key들을 돌리면서 첫번쨰 키 name 두번째 키 age
  user3[key] = user[key]; // user 의 키값들을 user3 에 복사함
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user); // 모든 Ojbect를 상속받음
// user 복사하고자하는 오브젝트를 user4로 전달한다.
console.log(user4);

const user5 = Object.assign({}, user); // user -> user5 로 복사함
console.log(user5);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); // fruit2 -> fruit1 로 복사 값을 뒤에서 앞으로 덮어씌움
console.log(mixed.color); // blue
console.log(mixed.size); // big

// 자바스크립트는 다양한종류의 데이터를 담을수 있다. 하지만 이렇게 하는건 안좋음

// 자료 구조 검색,삽입,정렬,삭제 등 새로운 데이터를 효율적으로 할수있는지
// 어떤 알고리즘을 써서 효율적을 공부
// 배열 0 1 2 3 4
// 인덱스로 접근 한다.
