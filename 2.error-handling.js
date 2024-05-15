// try catch finally

function readFile(path) {
	throw new Error('파일 경로를 찾을 수 없습니다.'); // 에러 강제 발생
	return '파일의 내용';
}

function processFile(path) {
	let content;
	try {
		content = readFile(path);
	} catch (error) {
		// 에러에 대한 처리
		console.log(error);
		content = '기본 내용';
	} finally {
		console.log('성공, 실패 모든 경우 마지막으로 리소스를 정리할 수 있다.');
	}
	const result = 'hi ' + content;
	return result;
}

const result = processFile('경로');
console.log(result);
