// 매개변수의 기본값은 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장된다.
// 매개변수 기본값 설정 Default Parameters (a = 1, b = 1)
function add(a, b) {
	console.log(a);
	console.log(b);
	console.log(arguments); // { '0': 1, '1': 2, '2': 3 }
	console.log(arguments[0]);
	return a + b;
}
add(); // (undefined, undefined)
add(1, 2, 3);

// Rest 매개변수 (Rest Parameters)
// 인자의 개수가 정확하지 않을 경우 배열로 받을 수 있다.
function sum(a, b, ...numbers) {
	console.log(a);
	console.log(b);
	console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7);
