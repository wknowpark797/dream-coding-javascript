// 1. 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
// 단, 주어진 배열의 수정 X
// input : ['바나나', '딸기', '포도', '딸기']
// output: ['바나나', '키위', '포도', '키위']
// [Map 활용]
function changeFunc(arr, from, to) {
	const result = arr.map((item) => {
		if (item === from) return to;
		else return item;
	});
	return result;
}
const arr = ['바나나', '딸기', '포도', '딸기'];
console.log(changeFunc(arr, '딸기', '키위'));
console.log('주어진 배열 : ', arr);

// 2. 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개 있는지 카운트하는 함수 만들기
// input : ['바나나', '키위', '포도', '키위'], '키위'
// output: 2
// [forEach 활용]
function countFunc(arr, item) {
	let count = 0;
	arr.forEach((value) => {
		if (value === item) count++;
	});
	return count;
}
console.log(countFunc(['바나나', '키위', '포도', '키위'], '키위'));

// 3. 배열1, 배열2 두개의 배열을 전달받아, 배열1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input : ['바나나', '키위', '포도'], ['바나나', '딸기', '포도', '딸기']
// output : ['바나나', '포도']
// [forEach 활용]
function duplicateFunc(input, search) {
	const returnArr = [];
	input.forEach((value) => {
		if (search.includes(value)) returnArr.push(value);
	});
	return returnArr;
}
console.log(duplicateFunc(['바나나', '키위', '포도'], ['바나나', '딸기', '포도', '딸기']));

// 4. 5 이상(보다 큰)의 숫자들의 평균
// [reduce 활용]
const nums = [3, 16, 5, 25, 4, 34, 21];
function averageFunc(arr, limit) {
	const newArr = arr.filter((value) => value >= limit);
	const result = newArr.reduce((sum, value) => sum + value, 0);
	return result / newArr.length;
}
console.log(averageFunc(nums, 5));

console.log('------------------------------');

// 1. 정답
function replace(array, from, to) {
	return array.map((item) => (item === from ? to : item));
}
const array = ['바나나', '딸기', '포도', '딸기'];
const result = replace(array, '딸기', '키위');
console.log(result);

// 2. 정답
function count(array, item) {
	return array.filter((value) => value === item).length;

	// return array.reduce((count, value) => {
	// 	if (value === item) {
	// 		count++;
	// 	}
	// 	return count;
	// }, 0);
}
console.log(count(['바나나', '키위', '포도', '키위'], '키위'));

// 3. 정답
function match(input, search) {
	return input.filter((item) => search.includes(item));
}
console.log(match(['바나나', '키위', '포도'], ['바나나', '딸기', '포도', '딸기']));

// 4. 정답
const result2 = nums //
	.filter((num) => num > 5) //
	.reduce((avg, num, _, array) => avg + num / array.length, 0);
console.log(result2);
