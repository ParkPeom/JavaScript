// class 나 object 가 없다면
// name bread i count age
// name , bread , count , age
// class 안에서 필드와 메소드를 두는것을 캡슐화
// 객체지향 프로그래밍 언어 -> 구현해야할 기능 잘 정리

// class : 템플릿만 정의해 놓음 , declare once , no data in
// 클래스(정의만해놓고 실제로 메모리에 올라가지않음) -> 오브젝트

"use strict";
// class template
// object : instance of a class
// ES6 에 추가됨
// 기존에 존재하는 프로토타입을 기반으로 간편하게 쓸수있도록 문법만 클래스에 추가

// 프로토타입을 살펴볼 필요가 있다 오늘은 클래스를 어떻게 쓸수있나

// 1. class declarations
class Person {
  // 사람이라는 클래스
  // constructor
  constructor(name, age) {
    // 생성자
    // field
    this.name = name;
    this.age = age;
  }

  // 말하는 메소드 존재
  speak() {
    console.log(`${this.name}: hello!`);
  }
}
const ellie = new Person("ellie", 20); // 오브젝트를 키울때 new 키워드를 사용한다.

// 이름과 나이 출력
console.log(ellie.name); // 이름 출력
console.log(ellie.age); // 나이 출력
ellie.speak(); // 함수 출력

// 2. Getter and Setters
// setter 에 잘못된 값이 안들어가도록
class User {
  constructor(firstName, lstName, age) {
    this.firstName = firstName;
    this.lstName = lstName;
    this.age = age; // 메모리에 값이 바로 할당하는것이 아니라
    // set 에 값이 할당된다.
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // 값을 받아올때 value 값을 가져온다.
    this._age = value; // set를 호출하게 된다. 무한정 반복된까
    // getter setter 에 쓰는 변수를 다른거로 만들어줘야한다.
    //  if (age < 0) {
    //   throw Error("age can not be negative");
    // }
    this._age = value < 0 ? 0 : value; // 잘못된값 -1 이어도 0 이 들어감
  }
}
const user1 = new User("Steve", "job", -1);
console.log(user1.age); // getter , setter 내부적으로 이용하게됨

// 3. Field (public, private)
// Too soon!
class Expression {
  publicFied = 2; // 외부에서 접근이 가능하다
  #privateField = 0; // private 필드 클래스 내부에서만 값이 보여지고 변경가능하지만 외부에서 값을 읽을수도 변경 불가
}

//const experiment = new Experiment();
//console.log(experiment.publicFied); // 2
//console.log(experiment.privateField); // undified 접근 못함

// 최신브라우저에서도 잘 사용안함
// 4. static properties and methods
// Top soon!

class Article {
  static publisher = "Dream Coding"; // 동일하게 반복적으로 사용되는 값
  // 오브젝트 상관없이 클래스에 연결되어짐
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher); // 클래스로 바로 호출이 가능
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);

Article.printPublisher(); // static 메소드 클래스로부터 바로 접근이 가능

// 5. Inheritance 상속
// a way for one class to extends another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    // 고칠게 있으면 한곳에서만 수정하면 된다 - 코드의 간결함
    // 다형성
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return width * this.height;
  }
}

class Rectangle extends Shape {
  // 상속을 받는다. Shape 의 속성과 필드가 자동으로 포함됨
}

// 동일한 것들을 계속 이용할수 가 있다.
class Triangle extends Shape {
  // 삼각형 넓이는 나누기 2를 해야하므로 오버라이딩 해서 재정의
  getArea() {
    return (width * this.height) / 2;
  }

  // 색다르게 그려보고 싶으면
  draw() {
    console.log("▲"); // 재정의 함수만 호출된다.
  }

  toString() {
    return `Triangle: color: ${this.colr}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");

rectangle.draw(); // 작성한 함수를 호출하게 된다.
console.log(rectangle.getArea); // 20 * 20

const triangle = new Triangle(20, 20, "red");
triangle.draw();

console.log(Triangle.getArea); // width * height / 2
// 필요한 함수만 재정의해서 쓸수있다.
// 오버라이딩

// 6. Class checking: instanceOf
// 왼쪽 오브젝트가 오른쪽의 클래스로부터 만들어졌는지 확인
console.log(rectangle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t
console.log(triangle instanceof Object); // t
console.log(triangle.toString());

// c. forEach
fruits.forEach((fruit) => console.log(fruit));
