// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터 만들기
// Counter 클래스 만들기

// 내가 작성한 엉망진창 코드...
class Counter {
	constructor(number) {
		this.number = number;
	}
	addNumber = () => {
		this.number++;
	};
}

const counter = new Counter(0);
counter.addNumber(); // 1
counter.addNumber(); // 2
counter.addNumber(); // 3
console.log(counter.number);
console.log(counter);

// ------------------------------
// 선생님 코드

class Counter1 {
	#value;
	constructor(startValue) {
		if (isNaN(startValue) || startValue < 0) {
			this.#value = 0;
		} else {
			this.#value = startValue;
		}
	}

	get value() {
		return this.#value;
	}

	increment = () => {
		this.#value++;
	};
}

const counter1 = new Counter1(0);
counter1.increment(); // 1
counter1.increment(); // 2
console.log(counter1.value);
