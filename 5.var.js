// var의 특징 (단점)
// - 코드의 가독성과 유지보수성에 좋지 않다.

// 1. 변수를 선언하는 키워드 없이 선언 & 할당이 가능하다.
// 선언인지, 재할당인지 구분하기 어렵다.
something = '똥';
console.log(something);

// 2. 중복 선언이 가능하다.
var poo = '똥';
var poo = '똥';
console.log(poo);

// 3. 블럭 레벨 스코프가 동작하지 않는다.
var apple = '사과';
{
	var apple = '사~과';
	{
		var apple = '초록사과';
	}
}
console.log(apple); // 초록사과

// 4. 함수 레벨 스코프만 지원이 가능하다. (정상작동)
function example() {
	var dog = '강아지';
}
console.log(dog); // error
