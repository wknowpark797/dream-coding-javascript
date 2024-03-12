// [퀴즈]
let num = 7;
// num의 숫자가 짝수이면 '엄지 up', 홀수라면 '엄지 down'을 출력
// if
// ternary
// 두가지 방식으로 구현하기

// [정답]
// if
if (num % 2 === 0) {
	console.log('엄지 up');
} else {
	console.log('엄지 down');
}
// ternary
let emoji = num % 2 === 0 ? '엄지 up' : '엄지 down';
console.log(emoji);
