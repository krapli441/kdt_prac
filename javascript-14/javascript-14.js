//* 1. 객체 리터럴, 정적인 key, value 작성

const staticObjectLiteral = {
  id: "park",
  password: "1234",
  email: "krapli441@gmail.com",
};

console.log(staticObjectLiteral);

//* 2. 객체 리터럴, 동적인 key, value 작성

const initializeObjectLiteral = {};
initializeObjectLiteral.id = "park";
initializeObjectLiteral.password = "1234";
initializeObjectLiteral.email = "krapli441@gmail.com";

console.log(initializeObjectLiteral);

//* 3. 내장 객체 생성자 함수를 활용, 동적인 key, value 작성

const initializeObjectConstructor = new Object(); // Object라는 내장 '생성자 함수 선언'

initializeObjectConstructor.id = "park";
initializeObjectConstructor.password = "1234";
initializeObjectConstructor.email = "krapli441@gmail.com";

console.log(initializeObjectConstructor);

//* 4. 생성자 함수 활용, 정적인 key, value 작성

class ConstructionObject {
  constructor(id, password, email) {
    this.id = id;
    this.password = password;
    this.email = email;
  }
  // setter에 의해 '데이터타입'을 원하는 것만 받을 수 있도록 '제한'을 걸 수 있다.
  set id(value) {
    if (typeof value === "string") {
      this._id = value;
    }
  }
  set password(value) {
    if (typeof value === "string") {
      this._password = value;
    }
  }
  set email(value) {
    if (value.includes("@")) {
      this._email = value;
    }
  }
  //! this. 뒤에 바로 _를 붙이는 이유? -> 위에서 이미 id, password, email을 써서 그런 것 같다.
}

const makeInstance = new ConstructionObject(
  "park",
  "1234",
  "krapli441@gmail.com"
);
console.log(makeInstance);

//* 5. 단순히 객체를 리턴하는 함수

function returnObject(id, password, email) {
  let objectValue = {
    id: id,
    password: password,
    email: email,
  };
  return objectValue;
}

const returnObjectValue = returnObject("park", "1234", "krapli441@gmail.com");

//* 6. class 작성법을 지원하기 전 생성자 함수 제작 방식

function oldSchoolConstructor(id, password, email) {
  this.id = id;
  this.password = password;
  this.email = email;
}

const oldSchoolInstance = new oldSchoolConstructor(
  "park",
  "1234",
  "krapli441@gmail.com"
);
console.log(oldSchoolInstance);
