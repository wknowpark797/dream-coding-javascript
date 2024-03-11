// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; // 에러 발생

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
	name: 'apple',
	color: 'red',
};
// apple = {}; // 에러 발생

// 재할당은 불가능하지만 참조값이 가리키는 객체의 값의 변경은 가능
console.log(apple);
apple.name = 'orange';
console.log(apple);
