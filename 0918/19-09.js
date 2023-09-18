// obj는 프로토타입 체인의 좀점이다. 따라서 Object.__proto__를 상속 받을 수 없다.
const obj = Object.create(null);

// obj는 Object.__proto__를 상속 받을 수 없다.
console.log(obj.__proto__); // undefined

// __proto__보다 Object.getPrototypeOf 메소드를 사용하는 편이 좋다
console.log(Object.getOwnPrototypeOf(obj)); // null
