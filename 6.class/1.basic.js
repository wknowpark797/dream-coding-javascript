// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 (최신 문법)

// [ 생성자 함수 ]
// function Fruit(name, emoji) {
// 	this.name = name;
// 	this.emoji = emoji;
// 	this.display = () => {
// 		console.log(`${this.name} : ${this.emoji}`);
// 	};
// }

// [ 클래스 class ]
class Fruit {
	// 생성자 함수 : new 키워드로 객체를 생성할 때 호출되는 함수
	// -> 필요한 인자 전달
	constructor(name, emoji) {
		this.name = name;
		this.emoji = emoji;
	}

	// 멤버 함수 : function 키워드 사용시 에러 발생
	display = () => {
		console.log(`${this.name} : ${this.emoji}`);
	};
}

// apple과 orange는 Fruit 클래스의 인스턴스
const apple = new Fruit('apple', '사과');
const orange = new Fruit('orange', '오렌지');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
