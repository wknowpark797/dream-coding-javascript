// 주어진 seconds(초)가 지나면 callback 함수를 호출한다.
// 단, seconds가 0보다 작으면 에러 발생

/**
 * callback, seconds 파라미터의 다양한 에러발생 가능성에 대해 생각하며 코딩하기
 */

function runInDelay(callback, seconds) {
	if (seconds < 0) throw new Error('seconds가 0보다 작습니다.');
	const timeCalc = seconds * 1000;
	setTimeout(callback, timeCalc);
}

try {
	runInDelay(() => console.log('callback 함수 실행'), 3);
} catch (err) {
	console.log(err);
}

// ------------------------------

function runInDelay2(callback, seconds) {
	if (!callback) {
		throw new Error('callback 함수를 전달 해야 한다.');
	}
	if (!seconds || seconds < 0) {
		throw new Error('seconds는 0보다 커야 한다.');
	}
	setTimeout(callback, seconds * 1000);
}

try {
	runInDelay2(() => {
		console.log('타이머 완료.');
	}, 2);
} catch (error) {}
