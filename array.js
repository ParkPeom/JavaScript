"use strict";
// Array

//1 배열선언
const arr1 = new Array();
const arr2 = [1, 2]; // 0번쨰 인덱스 1 , 1번째 인덱스 2

// 인덱스를 활용해서 삽입,삭제,검색,수정

//2. Index postion
const fruits = ["사과", "바나나"];
console.log(fruits);
console.log(fruits.length); // 2
console.log(fruits[0]); // 대괄호로 데이터로 접근함
// 인덱스에 대한 값을 받아올수있다.
console.log(fruits[1]);
console.log(fruits[2]);

// 맨 마지막의 값을 찾을때는
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits

console.clear(); // 이전 로그들을 지운다.

// 내가 작성한 답
for (let i = 0; i <= fruits.length; i++) {
  console.log(fruits[i]);
}

// 드림코딩 엘리가 작성한 첫번째 답
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}
// c. forEach 콜백 API가 선언된곳으로 이동하게 된다.
// 선언된곳에 와서 이 파라미터 리턴된값이 먼지 써보면서 배우는게
// 실력이 도움이 된다.
//fruits.forEach();

// 4. Addition, deletion , copy
// push: add an item to the end
fruits.push("apple", "banana");
console.log(fruits);

// pop: remove an item from the end
fruits.pop(); // 뒤에서 부터 하나씩 빠져나감
fruits.pop();
console.log(fruits);

// unshift :  add an item to the benigging : 앞에서부터 넣고 뒤에서 뺀다
fruits.unshift("carrot", "orange");
console.log(fruits);

// shift : 앞에서부터 데이터를 뺄수 있다
fruits.shift();
console.log(fruits);

// note !! shift , unshift are slower than pop, push

// shift , unshift 를 사용할경우 데이터가 무수히 많이 이동하게됨...  그러므로 pop 과 push 를 사용하는 것이 좋다..

// remove and item by index position 지정된 포지션에서 제거가 될까 ?  가능하다
// splice : 지정된 위치의 데이터를 삭제 할 수 있다.

fruits.push("사과", "복숭아", "레몬");
console.log(fruits);
fruits.splice(1, 1); // 시작하는 인덱스 , 몇개나 지울건가(안적으면 그 위치부터 뒤에 싹다 제거)
console.log(fruits);

fruits.splice(1, 1, "사과", "수박"); // 지우고 나서 사과와 수박을 넣어줘
console.log(fruits);

// 두가지의 배열을 묶어서 만들 수 있다.
// combine two arrays
const fruits2 = ["사과", "레몬"];
const newFruits = fruits.concat(fruits2); // 기존 fruits 배열에 truits2 를 붙이면 새로 묶어진 배열로 리턴
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("사과")); // 몇번째 인덱스 인지
console.log(fruits.indexOf("수박")); // 몇번째 인덱스 인지
console.log(fruits.includes("수박")); // 배열에 수박이 있는지 true 또는 false
console.log(fruits.includes("코코넛")); // 배열에 수박이 있는지 true 또는 false
console.log(fruits.indexOf("코코넛")); // 없는 값을 출력하면 -1

// lastIndexOf
console.clear();
// 만약 똑같은 데이터가 있으면?
fruits.push("사과");
console.log(fruits.indexOf("사과")); // 제일 첫번째 인 사과를 찾게됨
console.log(fruits.lastIndexOf("사과")); // 제일 마지막 사과를 찾게됨
