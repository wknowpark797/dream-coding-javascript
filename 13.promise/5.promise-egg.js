function fetchEgg(chicken) {
	// return new Promise((resolve, reject))
	return Promise.resolve(`${chicken} => 달걀`);
}
function fryEgg(egg) {
	return Promise.resolve(`${egg} => 달걀 후라이`);
}
function getChicken() {
	// return Promise.resolve(`정원 => 닭`);
	return Promise.reject(new Error('닭을 가지고 올 수 없습니다.'));
}

// [ Promise Chaining ]
// -> catch 에러 처리의 순서에 따라 로직도 다르게 흘러간다. (에러 버블링)
// -> 적절한 에러 처리와 대체 값 반환하기
getChicken()
	.catch((error) => {
		console.log(error.name);
		return '닭2';
	})
	.then((chicken) => {
		return fetchEgg(chicken);
	})
	.then((egg) => {
		return fryEgg(egg);
	})
	.then((friedEgg) => console.log(friedEgg));

// ------------------------------
// 전달하는 인자와 호출하는 인자가 동일하면 생략 가능
getChicken()
	.catch(() => '닭2')
	.then(fetchEgg)
	.then(fryEgg)
	.then(console.log);
