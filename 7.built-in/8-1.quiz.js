// 1번 퀴즈 정답
const text = 'Hello World!';
for (let i = 0; i < text.length; i++) {
	console.log(text[i]);
}

// 2번 퀴즈 정답
const ids = 'user1, user2, user3, user4';
const array = ids.split(', ');
console.log(array);

// 3번 퀴즈 정답
setInterval(() => {
	const now = new Date();
	console.log(now.toLocaleString('ko-KR'));
}, 1000);
