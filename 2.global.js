// 자바스크립트의 this : 전역 객체
console.log(globalThis);
console.log(this); // {}

console.log(Infinity);
console.log(NaN);
console.log(undefined);

// 자바스크립트 전역 함수
eval('const num = 2; console.log(num);'); // 자바스크립트 코드로 평가
console.log(isFinite(1));
console.log(isFinite(Infinity));
console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));
console.log(parseInt('11'));

// URL (URI : Uniform Resource Identifier 하위 개념)
// 리소스를 나타낼 수 있는 고유한 주소, 아이디
// 아스키 문자로만 구성되어야 한다.
// 한글, 특수문자는 이스케이프 처리를 해야 한다.
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);
const decoded = decodeURI(encoded);
console.log(decoded);

// 부분적인 것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
