// Bubbling up, Propagating
// 에러 전파 - 최종적으로 호출한 함수에서 error catch가 가능하다.

function a() {
	throw new Error('error!');
}

function b() {
	try {
		a();
	} catch (error) {
		console.log('상황에 따라 에러 처리 또는 전달');
		throw error;
	}
}

function c() {
	b();
}

try {
	c();
} catch (error) {
	console.log('Catched!');
}
console.log('done!');
