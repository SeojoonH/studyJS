// 생성자 함수
function Circle(radius) {
  this.radius = radius;
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메소드를 공유해 사용할 수 있도록 프로토타입에 추가
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

// 인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Cirlce(2);

// Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는 프로토타입 Circle.prototype으로부터 getArea 메소드를 상속 받음
// 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메소드를 공유
console.log(circle1.gatArea === circle2.getArea); // true

console.log(circle1.getArea()); // 3.14~~
console.log(circle2.getArea()); // 12.56~~

// Circle 생성자 함수가 생성한 모든 인스턴스는 상위 객체 역할 하는 Circle.prototype의 모든 프로퍼티와 메소드를 상속 받음
// getArea 메소드는 단 하나만 생성, 프로토타입인 Circle.prototype의 메소드로 할당
