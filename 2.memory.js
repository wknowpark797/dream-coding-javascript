function add(a, b) {
	console.log(a);
	console.log(b);
	return a + b;
}

// 함수 이름 할당 -> 함수를 가리키는 메모리 주소 복사
// 동일한 함수 정의를 가리킨다.
const sum = add;

console.log(sum(1, 2));
console.log(add(1, 2));
console.log(add());
