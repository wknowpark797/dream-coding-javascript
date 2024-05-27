function runInDelay(seconds) {
	// 1. new 연산자로 Promise 생성
	// 2. 생성자 안에는 Promise를 만들 수 있는 callback 함수를 전달해야 한다.
	//    -> 두가지 인자(resolve, reject)를 받아서 어떠한 일을 처리하는 callback 함수
	//    -> resolve(성공시 호출), reject(실패시 호출)
	// 3. callback 함수는 Promise에 의해 호출된다.

	// 대기(Pending) 상태 - return new Promise();
	return new Promise((resolve, reject) => {
		// [ 비동기적인 일 수행 ]
		if (!seconds || seconds < 0) {
			// 거부(Rejected) 상태 - reject();
			reject(new Error('seconds가 0보다 작습니다.'));
		}

		// 이행(Fulfiled) 상태 - resolve();
		setTimeout(resolve, seconds * 1000);
	});
}

/**
 * then - 성공시 호출
 * catch - 실패시 호출
 * finally - 무조건 호출
 */
runInDelay(2)
	.then(() => console.log('타이머 완료.'))
	.catch(console.error)
	.finally(() => console.log('끝났다.'));
