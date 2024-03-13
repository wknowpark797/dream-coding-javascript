// return을 명시하지 않으면 자동으로 undefined가 반환된다.
function add(a, b) {
	// return a + b;
	return undefined;
}
const result = add(1, 2);
console.log(result);

function print(text) {
	console.log(text);
}
const outcome = print('text');
console.log(outcome); // undefined

// return을 함수 중간에 작성하면 함수가 즉시 종료된다.
// 사용예: 조건이 맞지 않는 경우 함수의 도입부분에서 함수를 종료할 수 있다.
function print2(num) {
	if (num < 0) {
		return; // return undefined; 함수 즉시종료
	}
	console.log(num);
}
print2(12);
print2(-12);
