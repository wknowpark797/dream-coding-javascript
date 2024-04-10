// 배열 생성 방법

// 1. Array 클래스 사용
let array = new Array(3); // 배열의 사이즈 지정
console.log(array);

array = new Array(1, 2, 3); // 배열의 아이템 추가
console.log(array);

// 2. Static 함수 사용
array = Array.of(1, 2, 3, 4, 5);
console.log(array);

// 3. 배열 리터럴 사용
const anotherArray = [1, 2, 3];
console.log(anotherArray);

array = Array.from(anotherArray); // 배열을 복사하여 생성
array = Array.from('text'); // 순회(iterable)가 가능한 모든것 전달 가능
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야 한다.
// 하지만, 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고
// 오브젝트와 유사함!
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체이다.
// 이것을 보완하기 위해 타입이 정해져 있는 타입 배열이 있다. (Typed Collections)
array = Array.from({
	0: '안',
	1: '녕',
	length: 2,
});
console.log(array);
