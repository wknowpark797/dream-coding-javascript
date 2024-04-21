// 배열의 함수들
// [포인트] : 배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ['바나나', '사과', '레몬'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치(index) 찾기
console.log(fruits.indexOf('사과'));

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('사과'));

// [ 배열 자체를 수정하는 API ]
// 배열 추가 - 제일 뒤
let length = fruits.push('복숭아'); // 배열 자체를 수정(업데이트), 배열의 길이를 리턴
console.log(fruits);
console.log(length);
// 배열 추가 - 제일 앞
length = fruits.unshift('딸기'); // 배열 자체를 수정(업데이트), 배열의 길이를 리턴
console.log(fruits);
console.log(length);

// 배열 제거 - 제일 뒤
let lastItem = fruits.pop(); // 배열 자체를 수정(업데이트), 제거된 아이템 리턴
console.log(fruits);
console.log(lastItem);
// 배열 제거 - 제일 앞
lastItem = fruits.shift(); // 배열 자체를 수정(업데이트), 제거된 아이템 리턴
console.log(fruits);
console.log(lastItem);

// 중간 아이템 추가, 삭제
const deleted = fruits.splice(1, 1); // 배열 자체를 수정(업데이트), 제거된 아이템이 배열로 리턴
console.log(fruits);
console.log(deleted);
fruits.splice(1, 1, '사과', '딸기');
console.log(fruits);

console.log('------------------------------');

// [ 새로운 배열을 만드는 API ]

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2); // 시작하는 index는 포함, 끝나는 index는 제외 (ex. 0 ~ 1)
console.log(newArr);
console.log(fruits);

newArr = fruits.slice(); // 배열 전체를 리턴
console.log(newArr);

newArr = fruits.slice(1); // index 1부터 끝까지 리턴
console.log(newArr);

newArr = fruits.slice(-1); // 뒤쪽의 index 1부터 끝까지 리턴
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
// -> 두개의 배열을 합친 새로운 배열 반환
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 배열의 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);
console.clear();

// 중첩된 배열을 하나의 배열로 펴기
let arr = [
	[1, 2, 3],
	[4, [5, 6]],
];
console.log(arr);
console.log(arr.flat()); // 1단계의 중첩까지만 펴준다.
console.log(arr.flat(2)); // 단계 지정 (2단계)
arr = arr.flat(2);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text);

text = arr.join(' | '); // 문자열 지정
console.log(text);

// [ 배열 자체를 수정하는 fill 함수 ]
// 특정한 값으로 배열을 채우기
arr.fill(0); // 배열 자체를 수정
console.log(arr);

arr.fill('s', 1, 3); // 끝나는 index는 제외 (ex. 1 ~ 2)
console.log(arr);

arr.fill('s', 1); // index 1부터 끝까지 채우기
console.log(arr);
