// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 한다.
// 5, 순회하는 숫자를 모두 출력
// 5, 순회하는 숫자의 두배값을 모두 출력
// function iterate(max, action)

const printNum = (num) => {
	for (let i = 0; i <= num; i++) {
		console.log(i);
	}
};
const doubleNum = (num) => {
	for (let i = 0; i <= num; i++) {
		console.log(i * 2);
	}
};
function iterate(max, action) {
	action(max);
}

iterate(5, printNum);
iterate(5, doubleNum);

// ------------------------------

function iterate2(max, action) {
	for (let i = 0; i < max; i++) {
		action(i);
	}
}
function log(num) {
	console.log(num);
}
function doubleAndLog(num) {
	console.log(num * 2);
}

iterate2(3, log);
iterate2(3, doubleAndLog);
// iterate2(3, (num) => console.log(num));
// iterate2(3, (num) => console.log(num * 2));

// ------------------------------

// [사용예제]
// setTimeout(callback, 1000);
setTimeout(() => {
	console.log('3초 뒤 함수 실행');
}, 3000);
