// 엄격모드 Strict mode
// React와 같은 프레임워크 사용시 기본적으로 엄격 모드로 설정
'use strict';

var x = 1;
// delete x; // error

function add(x) {
	var a = 2;
	b = a + x;
	console.log(this); // error
}
// add(1); // error

const array = [1, 2, 3];
// for (num of array) {
// 	console.log(num); // error - num is not defined
// }
