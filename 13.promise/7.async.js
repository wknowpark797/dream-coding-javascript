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

// async - 비동기 함수임을 명시
// 함수의 내부에서 동기적인 코드를 작성할 수 있다.
async function fetchFruits() {
	// Promise를 리턴하는 함수를 호출할 때 await 키워드를 사용하여 기다린 후
	// Promise의 값이 resolve가 되면 값을 변수에 반환한다.
	const banana = await getBanana();
	const apple = await getApple();
	return [banana, apple];
}

// 배열값을 resolve하는 Promise가 만들어진다.
// 즉, Promise를 리턴한다.
fetchFruits().then(console.log);
