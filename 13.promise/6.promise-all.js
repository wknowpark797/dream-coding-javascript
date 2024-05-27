function getBanana() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('바나나');
		}, 1000);
	});
}
function getApple() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('사과');
		}, 3000);
	});
}
function getOrange() {
	return Promise.reject(new Error('no orange'));
}

// [ Quiz ]
// Promise Chaining를 활용하여 바나나와 사과를 배열에 저장하기 (4초 소요)
const array = [];
getBanana()
	.then((value) => {
		array.push(value);
		return getApple();
	})
	.then((value) => {
		array.push(value);
		console.log('array : ', array);
	});

// 정답 예제 코드 ----------
getBanana() //
	.then((banana) =>
		getApple() //
			.then((apple) => [banana, apple])
	)
	.then(console.log);

// Promise.all : 병렬적으로 한번에 모든 Promise를 실행 (3초 소요)
Promise.all([getBanana(), getApple()]) //
	.then((fruits) => console.log('all : ', fruits));

// Promise.race : 주어진 Promise 중 가장 빨리 수행되는 것이 출력 (1초 소요)
Promise.race([getBanana(), getApple()]) //
	.then((fruit) => console.log('race : ', fruit));

// Promise.all - Error가 있을 경우
Promise.all([getBanana(), getApple(), getOrange()]) //
	.then((fruits) => console.log('all-error : ', fruits))
	.catch(console.log);

// Promise.allSettled : 실패, 성공의 결과를 배열로 묶어서 출력
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
	.then((fruits) => console.log('all-settled : ', fruits))
	.catch(console.log);
