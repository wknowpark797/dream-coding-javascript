// 원시 타입은 값이 복사되어 전달된다.
let a = 1;
let b = a;
b = 2;
console.log(a);
console.log(b);

// 객체 타입은 참조값(메모리 주소, 레퍼런스)가 복사되어 전달된다.
let apple = {
	name: '사과',
}; // 메모리 주소 - 0x1234
let orange = apple; // 메모리 주소 - 0x1234
orange.name = '오렌지';
console.log(apple);
console.log(orange);
