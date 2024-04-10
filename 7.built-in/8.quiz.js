// 1. 문자열의 모든 캐릭터를 하나씩 출력하기
const text = 'Hello World!';
for (let i = 0; i < text.length; i++) {
	console.log(text.charAt(i));
}

// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'user1, user2, user3, user4';
const arrayId = ids.split(',');
console.log(arrayId);

// 3. 1초에 한번씩 시계를 (날짜포함) 출력하기 - setInterval
function getDay(day) {
	switch (day) {
		case 0:
			return '일요일';
		case 1:
			return '월요일';
		case 2:
			return '화요일';
		case 3:
			return '수요일';
		case 4:
			return '목요일';
		case 5:
			return '금요일';
		case 6:
			return '토요일';
	}
}
setInterval(() => {
	const now = new Date();
	console.log(
		`
    ${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 ${getDay(now.getDay())} 
    ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초
    `
	);
}, 1000);
