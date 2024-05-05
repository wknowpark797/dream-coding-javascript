// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다.
// 순회가 가능한 모든것들은 펼쳐질 수 있다.
// EcmaScript 2018 - 최신 문법

// func(...iterable)
// [...iterable]
// {...obj}

function add(a, b, c) {
	return a + b + c;
}
const nums = [1, 2, 3];
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
	console.log(nums);
}
sum(1, 2, 0, 1, 2, 3, 4, 5);

// Array Concat
const fruits1 = ['사과', '키위'];
const fruits2 = ['딸기', '바나나'];

// let arr = fruits1.concat(fruits2);
let arr = [...fruits1, '딸기', ...fruits2];
console.log(arr);

// Object
const ellie = { name: 'Ellie', age: 20, home: { address: 'home' } };
const updated = {
	...ellie,
	job: 's/w engineer',
};
console.log(ellie); // 기존의 object는 변경되지 않는다.
console.log(updated);

// ellie object의 home object는 얕은 복사가 된다.
updated.home.address = 'my home';
console.log(ellie.home);
console.log(updated.home);
