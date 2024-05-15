// 논리 연산자 (Logical Operator)
// && 그리고
// || 또는

// 논리 연산자의 단축평가: short-circuit evaluation
const obj1 = { name: '강아지' };
const obj2 = { name: '고양이', owner: 'Ellie' };

if (obj1 && obj2) {
	console.log('둘다 true');
}

// 조건문 밖에서 사용시 단축평가
let result = obj1 && obj2;
console.log(result);

result = obj1 || obj2;
console.log(result);

console.clear();

// 활용예제
// 조건이 truthy일 때 && 무언가를 해야 할 경우
// 조건이 falshy일 때 || 무언가를 해야 할 경우
function changeOwner(animal) {
	if (!animal.owner) {
		throw new Error('주인이 없습니다.'); // 어플리케이션을 강제로 종료하는 에러
	}
	animal.owner = '바뀐주인';
}
function makeNewOwner(animal) {
	if (animal.owner) {
		throw new Error('주인이 있습니다.');
	}
	animal.owner = '새로운주인';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

console.log('------------------------------');

// null 또는 undefined인 경우를 확인할 때 (&& 연산자 활용)
let item; // = { price: 1 };
const price = item && item.price;
console.log(price);

console.log('------------------------------');

// 기본값을 설정할 때 (|| 연산자 활용)
// [ default parameter ]
// -> 파라미터를 전달하지 않거나, undefined일 경우에만 기본값 설정
// -> 0, null, ''의 경우 그대로 출력 (기본값 설정 X)
// [ || ]
// -> 값이 falshy한 경우 모두 설정(할당) : 0, -0, null, undefined, ''
function print(message) {
	const text = message || 'Hello';
	console.log(text);
}
print();
print(0);
print(-0);
print(null);
print(undefined);
print('');
