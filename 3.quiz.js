// 1. 주어진 배열에서 중복을 제거하기
const fruits = ['바나나', '사과', '포도', '바나나', '사과', '복숭아'];
// -> ['바나나', '사과', '포도', '복숭아']

const setFruits = new Set();
fruits.forEach((item) => {
	setFruits.add(item);
});
console.log('setFruits: ', setFruits);

// 2. 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들기
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);
// -> [1, 2, 3]

const newSet = new Set();
set1.forEach((item) => {
	if (set2.has(item)) {
		newSet.add(item);
	}
});
console.log('newSet: ', newSet);

// -----------------------------------

// 1. 정답
function removeDuplication(array) {
	return [...new Set(array)];
}
console.log(removeDuplication(fruits));

// 2. 정답
function findIntersection(set1, set2) {
	return new Set([...set1].filter((item) => set2.has(item)));
}
console.log(findIntersection(set1, set2));
