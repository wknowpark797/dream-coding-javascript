// Iterable 하다. -> 순회가 가능하다.
// [Symbol.iterator](): IterableIterator;
// 심볼 정의를 가진 객체나, 특정한 함수가 Iterator를 리턴 -> 순회 가능한 객체
// 순회가 가능하면 -> for..of, spread 사용 가능

let array = [1, 2, 3];
for (const item of array) {
	console.log(item);
}

// Iterator를 리턴하는 함수
for (const item of array.values()) {
	console.log(item);
}
for (const item of array.keys()) {
	console.log(item);
}
for (const item of array.entries()) {
	console.log(item);
}

console.clear();
// --------------------------------------------------

array = [11, 22, 33];
const iterator = array.values();

// next()는 결과 객체를 리턴
// value : 값, done : 반복이 끝났는지 여부
console.log(iterator.next()); // { value: 11, done: false }
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value); // undefined
console.log(iterator.next().done); // true

while (true) {
	const item = iterator.next();
	if (item.done) break;
	console.log(item.value);
}
