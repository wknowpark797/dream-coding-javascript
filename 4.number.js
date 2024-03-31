const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2); // object

// [ Static Properties ]
console.log(Number.MAX_VALUE);
// 정수에서 사용할 수 있는 최고의 값
// e+308 : 10의 308승
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

// 예제
if (num1 < Number.MAX_VALUE) {
}
if (Number.isNaN(num1)) {
}

// 지수 표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

// 반올림하여 문자열로 변환
const num4 = 123.12;
console.log(num4.toFixed());
console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG')); // 나라별 지역언어로 변환

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될 때 -> 지수 표기법

// 0과 1 사이에서 나타낼 수 있는 가장 작은 숫자
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
	console.log(Number.EPSILON);
}

// 자바스크립트에서 실수와 실수를 계산할 때 예상하지 못한 작은 오차가 발생할 수 있다.
// -> Number.EPSILON를 사용하여 해결
// 자바스크립트에서는 정확하게 부동소수점까지 계산되지 않는다.
// -> 작은 오차 발생
const num = 0.1 + 0.2 - 0.2; // 0.1 예상
console.log(num);

function isEqual(original, expected) {
	return original === expected;
}
console.log(isEqual(0.1, 0.1)); // true
console.log(isEqual(num, 0.1)); // false

// -> 절대값 함수를 사용
function isEqual2(original, expected) {
	return Math.abs(original - expected) < Number.EPSILON;
}
console.log(isEqual2(0.1, 0.1)); // true
console.log(isEqual2(num, 0.1)); // true
