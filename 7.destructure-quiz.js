// Quiz
// 인자 만들기

const prop = {
	name: 'Button',
	styles: {
		size: 20,
		color: 'black',
	},
};

function changeColor({ name, styles: { size, color } }) {
	console.log(color);
}
changeColor(prop);

// [ 중첩된 구조분해할당 ]
// 참고 : https://ko.javascript.info/destructuring-assignment
// styles는 접근 불가능 (변수 X)
