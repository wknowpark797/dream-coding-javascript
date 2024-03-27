// static - 정적 프로퍼티, 메서드
// -> 모든 객체마다 동일하게 참조해야 하는 프로퍼티와 메서드의 사용
// -> 클래스에 한번만 정의하고 재사용된다.

class Fruit {
	static MAX_FRUITS = 4; // 클래스 레벨의 프로퍼티

	constructor(name, emoji) {
		this.name = name;
		this.emoji = emoji;
	}

	// [ 클래스 레벨의 메서드 ]
	// static 키워드 사용
	// 클래스별로 공통적으로 사용 가능 (각 인스턴스마다의 변경되는 데이터 X)
	// 클래스를 통해서 호출 가능
	// 클래스 레벨의 메서드에서는 this를 참조할 수 없음 (템플릿 상태이기 때문)
	// 생성된 인스턴스에 포함되지 않는다.
	static makeRandomFruit() {
		return new Fruit('banana', '바나나');
	}

	// [ 인스턴스 레벨의 메서드 ]
	// 만들어진 인스턴스의 데이터에 접근
	display = () => {
		console.log(`${this.name} : ${this.emoji}`);
	};
}

// 클래스 이름으로 접근 가능
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

// 만들어진 인스턴스를 통해서 접근 가능
const apple = new Fruit('apple', '사과');
console.log(apple);

// 활용 예시 ...(빌트인 Object)
Math.pow();
Number.isFinite(1);
