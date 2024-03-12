// 조건문 (Conditional Statement)
// if(조건) { }
// if(조건) { } else { }
// if(조건1) { } else if(조건2) { } else { }
let fruit = 'orange';
if (fruit === 'apple') {
	console.log('사과');
	let a = 1;
	console.log(a);
} else if (fruit === 'orange') {
	console.log('오렌지');
} else {
	console.log('X');
}

// 출력되지 않는 조건 - false, 0, '', null, undefined
if (false) {
	console.log('출력되면 안됨');
}
