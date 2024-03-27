// 접근자 프로퍼티 (Accessor Property) - getter, setter

class Student {
	constructor(firstName, lastName) {
		// 생성자가 한번 호출된 이후에는 업데이트 되지 않는다.
		this.firstName = firstName;
		this.lastName = lastName;
	}

	// 행동보다는 객체의 상태를 나타내고 싶을 때 (프로퍼티의 일부로 간주)
	get fullName() {
		return `${this.lastName} ${this.firstName}`;
	}

	set fullName(value) {
		console.log('set : ', value);
	}
}

const student = new Student('수지', '김');
console.log(student.firstName);

console.log(student.fullName); // getter
student.fullName = '김철수'; // setter (할당)
