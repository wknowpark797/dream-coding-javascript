// 접근제어자 - 캡슐화
// private(#), public(기본), protected
// private(#) : 내부에서는 사용 가능, 외부에서는 사용 불가능

class Fruit {
	// [ Field ]
	// -> constructor에서 주어지는 데이터일 경우 생략 가능
	#name;
	#emoji;
	#type = '과일'; // 인스턴스를 만들 때 초기화

	constructor(name, emoji) {
		this.#name = name;
		this.#emoji = emoji;
	}

	#display = () => {
		console.log(`${this.#name} : ${this.#emoji}`);
	};
}

const apple = new Fruit('apple', '사과');

// apple.#name = '오렌지'; // #field는 외부에서 접근이 불가능
console.log(apple);
