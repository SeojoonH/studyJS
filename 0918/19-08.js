const parent = {};
const child = {};

// child의 프로토타입을 parent로 설정
child.__proto__ = parent;

// parent의 프로토타입을 child로 설정
parent.__proto__ = child; // TypeError: Cycles __proto__ value

// 이러한 코드는 에러를 발생시킨다.
// 프로토타입 체인은 단방향 링크드 리스트로 구현되어야 한다.
// (프로퍼티 검색 방향이 한쪽으로만 흘러가야한다.)
// 위와 같이 할 경우 순환 참조하는 프로토타입 체인이 만들어지기 때문에 프로토타입 체인 종점이 존재하지 않는다.
// 따라서, 프로토타입 체인에서 프로퍼티를 검색할 때 무한 루프에 빠지게 된다.
