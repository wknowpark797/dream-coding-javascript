// 객체를 만드는 방법
// 1. { key: value } - Object Literal 
// 2. new Object() - 클래스
// 3. Object.create(); - 클래스의 create 함수

// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체(함수)

let apple = {
  name: 'apple',
  0: 1,
  'hello-bye': 'hello bye',
  ['hello-bye2']: 'hello bye 2',
};

// 속성, 데이터에 접근
console.log(apple.name); // 마침표 표기법 - dot notation
console.log(apple['hello-bye2']); // 대괄호 표기법 - bracket notation
apple.name;
apple['name'];

// 속성 추가
apple.emoji = '이모지';
console.log(apple.emoji);
console.log(apple['emoji']);

// 속성 삭제
delete apple.emoji;
console.log(apple);