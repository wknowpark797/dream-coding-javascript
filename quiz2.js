// 정직원과 파트타임직원을 나타낼 수 있는 클래스 만들기
// 직원들의 정보 : 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

// 내가 작성한 엉망진창 코드...
// 질문) 상속할 때 프로퍼티와 메서드를 private(#)으로 설정해도 되나요?

class Employee {
	constructor(name, department, time) {
		this.name = name;
		this.department = department;
		this.time = time;
	}

	// 질문)
	// 이렇게 사용해도 되나요? 에러가 발생할 줄 알았는데...
	// pay를 자식 클래스에서 선언했는데...
	monthPay = () => {
		return this.pay * this.time * 30;
	};
}

class FullTime extends Employee {
	pay = 10000;
}
class PartTime extends Employee {
	pay = 8000;
}

const fullTimeEmployee = new FullTime('풀타임', '개발팀', 8);
console.log('풀타임 급여 : ', fullTimeEmployee.monthPay());
console.log(fullTimeEmployee);

const partTimeEmployee = new PartTime('파트타임', '개발팀', 5);
console.log('파트타임 급여 : ', partTimeEmployee.monthPay());
console.log(partTimeEmployee);

// ------------------------------
// 선생님 코드

class Employee1 {
	constructor(name, department, hoursPerMonth, payRate) {
		this.name = name;
		this.department = department;
		this.hoursPerMonth = hoursPerMonth;
		this.payRate = payRate;
	}
	calculatePay() {
		return this.hoursPerMonth * this.payRate;
	}
}
class FullTimeEmployee extends Employee1 {
	static PAY_RATE = 10000;
	constructor(name, department, hoursPerMonth) {
		super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
	}
}
class PartTimeEmployee extends Employee1 {
	static PAY_RATE = 8000;
	constructor(name, department, hoursPerMonth) {
		super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
	}
}

const ellie = new FullTimeEmployee('엘리', 's/w', 30);
const bob = new PartTimeEmployee('밥', 's/w', 20);
console.log(ellie.calculatePay());
console.log(bob.calculatePay());
