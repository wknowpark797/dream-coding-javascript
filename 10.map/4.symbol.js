// Symbol 심벌
// 유일한 키를 생성할 수 있다.
const map = new Map();

// [원시타입]
// const key1 = 'key';
// const key2 = 'key';
// map.set(key1, 'Hello');
// console.log(map.get(key2));
// console.log(key1 === key2); // true

// [Symbol]
// 문자열이 같아도 서로 다른 유일한 키를 생성
const key1 = Symbol('key');
const key2 = Symbol('key');
map.set(key1, 'Hello');
console.log(map.get(key2)); // undefined
console.log(key1 === key2); // false

// 동일한 문자열로 하나의 키를 사용하고 싶을 경우, Symbol.for 사용
// 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); // true

// Symbol의 문자열 정보
console.log(Symbol.keyFor(k1));
console.log(Symbol.keyFor(key1)); // undefined -> 레지스트리 보관 X

// Object 사용 예제
const obj = { [k1]: 'Hello', [Symbol('key')]: 1 };
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key')]);
