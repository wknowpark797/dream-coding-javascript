// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 X
// 상태 변경이 필요한 경우, 새로운 상태를(object, 값) 만들어서 반환해야 한다.
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리 주소 전달) -> 동일한 object를 가리킨다.

// 원시값 변경
function display(num) {
	num = 5; // X
	console.log(num);
}
const value = 4;
display(value);
console.log(value);

// 객체값 변경 (심각한 문제 발생)
function displayObj(obj) {
	obj.name = 'Bob'; // 외부로부터 주어진 인자(object)를 내부에서 변경하지 말아야 한다.
	console.log(obj);
}
const ellie = { name: 'Ellie' };
displayObj(ellie);
console.log(ellie);

// 반환할 때는 새로운 object 만들기
function changeName(obj) {
	return { ...obj, name: 'New' };
}
