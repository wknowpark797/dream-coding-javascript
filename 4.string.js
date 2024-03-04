// 문자열 타입
let string = '안녕하세요';
string = `안녕!`;
console.log(string);

string = '"안녕!"';
console.log(string);

string = "'안녕!'";
console.log(string);

// 특수 문자 출력 방법 - 이스케이프 표현
string = '안녕!\n여러분\t\t내 이름은\\ \u09AC';
console.log(string);

// 템플릿 리터럴 (Template Literal) ``
let id = '여러분';
let greetings = `'안녕, ${id} ~
즐거운 하루 보내요!'`;
console.log(greetings);
