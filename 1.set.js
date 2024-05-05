// Set

// 생성
const set = new Set([1, 2, 3]);
console.log(set);

// 사이즈 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has(2));
console.log(set.has(5));

// 순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
	console.log(value);
}

// 아이템 추가
set.add(7);
console.log(set);
set.add(7);
console.log(set); // 무시 - 중복 불가능

// 아이템 삭제
set.delete(7);
console.log(set);

// 모두 삭제
set.clear();
console.log(set);

// Object Set
const obj1 = { name: '사과', price: 8 };
const obj2 = { name: '바나나', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// 퀴즈
obj1.price = 10;
objs.add(obj1);
console.log(objs);
// 땡! { { name: '사과', price: 8 }, { name: '바나나', price: 5 }, { name: '사과', price: 10 } }
// 정답 { { name: '사과', price: 10 }, { name: '바나나', price: 5 } }
// -> 동일한 주소값 (Object의 얕은 복사)

// 퀴즈
const obj3 = { name: '바나나', price: 5 };
objs.add(obj3);
console.log(objs);
// 정답~ { { name: '사과', price: 10 }, { name: '바나나', price: 5 }, ,{ name: '바나나', price: 5 } }
// -> 메모리의 참조 주소값이 다르기 때문에
obj3.price = 8;
console.log(objs);
