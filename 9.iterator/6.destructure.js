// 구조분해할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다.

const fruits = ['사과', '키위', '딸기', '바나나'];

// 배열의 요소를 의미있는 이름으로 전달
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [y, x, z = 0] = point;
console.log(x, y, z);

function createEmoji() {
	return ['apple', '사과'];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const ellie = { name: 'Ellie', age: 20, job: 's/w engineer' };
function display({ name, age, job }) {
	// console.log('이름', person.name);
	console.log('이름', name);
	console.log('나이', age);
	console.log('직업', job);
}
display(ellie);

const { name, age, job: occupation, pet = '강아지' } = ellie;
console.log(name);
console.log(age);
console.log(occupation); // key를 다른 이름으로 변경
console.log(pet);
