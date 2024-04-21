// 1. 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
// 단, 주어진 배열의 수정 X
// input : ['바나나', '딸기', '포도', '딸기']
// output: ['바나나', '키위', '포도', '키위']
function changeFunc(arr) {
	const newArr = Array.from(arr);
	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i] === '딸기') newArr[i] = '키위';
	}

	return newArr;
}

const arr = ['바나나', '딸기', '포도', '딸기'];
console.log('주어진 배열: ', arr);
console.log('output: ', changeFunc(arr));

// 2. 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개 있는지 카운트하는 함수 만들기
// input : ['바나나', '키위', '포도', '키위'], '키위'
// output: 2
function countFunc(arr, item) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === item) {
			count++;
		}
	}
	return count;
}

const arr2 = ['바나나', '키위', '포도', '키위'];
const item2 = '키위';
console.log(countFunc(arr2, item2));

// 3. 배열1, 배열2 두개의 배열을 전달받아, 배열1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input : ['바나나', '키위', '포도'], ['바나나', '딸기', '포도', '딸기']
// output : ['바나나', '포도']
function duplicateFunc(arr1, arr2) {
	const returnArr = [];
	for (let i = 0; i < arr2.length; i++) {
		for (let j = 0; j < arr1.length; j++) {
			if (arr2[i] === arr1[j]) returnArr.push(arr[j]);
		}
	}
	return returnArr;
}

const arr3 = ['바나나', '키위', '포도'];
const arr4 = ['바나나', '딸기', '포도', '딸기'];
console.log(duplicateFunc(arr3, arr4));

console.log('------------------------------');

// 1. 정답
function replace(array, from, to) {
	const replaced = Array.from(array);
	for (let i = 0; i < replaced.length; i++) {
		if (replaced[i] === from) {
			replaced[i] = to;
		}
	}
	return replaced;
}
const array = ['바나나', '딸기', '포도', '딸기'];
const result = replace(array, '딸기', '키위');
console.log(result);

// 2. 정답
function count(array, item) {
	let counter = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === item) {
			counter++;
		}
	}
	return counter;
}
console.log(count(['바나나', '키위', '포도', '키위'], '키위'));

// 3. 정답
function match(input, search) {
	const result = [];
	for (let i = 0; i < input.length; i++) {
		if (search.includes(input[i])) {
			result.push(input[i]);
		}
	}
	return result;
}
console.log(match(['바나나', '키위', '포도'], ['바나나', '딸기', '포도', '딸기']));
