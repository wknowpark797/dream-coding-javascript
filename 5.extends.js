// class Tiger {
// 	constructor(color) {
// 		this.color = color;
// 	}
// 	eat() {
// 		console.log('먹자!');
// 	}
// 	sleep() {
// 		console.log('잔다!');
// 	}
// }

// class Dog {
// 	constructor(color) {
// 		this.color = color;
// 	}
// 	eat() {
// 		console.log('먹자!');
// 	}
// 	sleep() {
// 		console.log('잔다!');
// 	}
// 	play() {
// 		console.log('놀자!');
// 	}
// }

class Animal {
	constructor(color) {
		this.color = color;
	}
	eat() {
		console.log('먹자!');
	}
	sleep() {
		console.log('잔다!');
	}
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
	// 자식 클래스에서 constructor를 정의할 때 부모의 데이터도 받아와야 한다.
	constructor(color, ownerName) {
		super(color); // super : 상속하고 있는 부모 클래스의 생성자
		this.ownerName = ownerName; // 자식에서 필요한 데이터 추가 정의
	}

	// 자식에서 필요한 함수 추가
	play() {
		console.log('놀자!');
	}

	// [ 오버라이딩 (overriding) ]
	eat() {
		super.eat(); // 부모 클래스의 함수 호출
		console.log('강아지가 먹는다!'); // 자식에서 필요한 기능 추가 정의
	}
}
const dog = new Dog('분홍이', '엘리');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
