// 생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    // Math.PI는 원주율을 나타내는 상수
    return Math.PI * this.radius ** 2;
  };
}

// 반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);

// 반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);

// Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작하는 getArea 메소드를 중복 생성, 모든 인스턴스가 중복 소유한다.
// getArea 메소드는 하나만 생성, 모든 인스턴스가 공유해 사용하는 것이 바람직한 방법
console.log(circle1.getArea === circle2.getArea); // false  -> 새로 생성된 getArea이기 때문에 동일하지 않다.

console.log(circle1.getArea()); // 3.14~~~
console.log(circle2.getArea()); // 12.56~~~

// Circle 생성자 함수가 인스턴스를 생성할 때마다
// getArea 메소드를 중복 생성, 모든 인스턴스가 중복 소유한다.
// 이 같은 경우는 메모리를 불필요하게 낭비하는 것
// 또한 인스턴트 생성 -> 메소드 생성 = 퍼포먼스에 악영향
