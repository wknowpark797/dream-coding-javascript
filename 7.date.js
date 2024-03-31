// UTC 기준
// (협정 세계시간, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)

console.log(new Date()); // 현재 시간 설정
console.log(new Date('Jun 5, 2022'));
console.log(new Date('2022-12-17T03:24:00'));

console.log(Date.now());
console.log(Date.parse('2022-12-17T03:24:00')); // 밀리초 단위 표기

const now = new Date();
now.setFullYear(2023);
now.setMonth(0); // 0 -> 1월

console.log(now.getFullYear());
console.log(now.getMonth()); // 0 -> 1월
console.log(now.getDate());
console.log(now.getDay()); // 0 -> 일요일

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getTime());

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); // ISO 8601형식
console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleString('ko-KR'));
