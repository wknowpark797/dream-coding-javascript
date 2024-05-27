function fetchEgg(chicken) {
	return Promise.resolve(`${chicken} => 달걀`);
}
function fryEgg(egg) {
	return Promise.resolve(`${egg} => 달걀 후라이`);
}
function getChicken() {
	// return Promise.resolve(`정원 => 닭`);
	return Promise.reject(new Error('닭을 가지고 올 수 없습니다.'));
}

async function getResult() {
	let chicken = '';

	try {
		chicken = await getChicken();
	} catch (error) {
		chicken = '닭2';
	}

	const egg = await fetchEgg(chicken);
	const friedEgg = await fryEgg(egg);
	return friedEgg;
}
getResult().then(console.log);

// ------------------------------
async function makeFriedEgg() {
	let chicken;
	try {
		chicken = await getChicken();
	} catch {
		chicken = '닭2';
	}
	const egg = await fetchEgg(chicken);
	return fryEgg(egg);
}
makeFriedEgg().then(console.log);
