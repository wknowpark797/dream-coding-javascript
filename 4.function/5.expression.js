// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { } -> 값으로 평가될 수 있는 표현식
// 함수는 객체이므로 변수에 할당, 재할당이 가능하다.
let add = function (a, b) {
	return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
add = (a, b) => {
	return a + b;
};
// add = (a, b) => a + b; // return 키워드 생략
console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 객체편에서 다룸

// 함수는 값으로 평가될 수 있는 표현식이다.
// IIFE (Immediately-Invoked Function Expressions) - 즉각 실행
(function run() {
	console.log('안녕');
})();
