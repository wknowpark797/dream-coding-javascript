{
	const x = 1;
	{
		const y = 2;
		console.log(x); // 1
	}
	console.log(x); // 1
	// console.log(y); // error
}

const text = 'global'; // 전역변수, 전역 스코프 (글로벌 변수, 글로벌 스코프)
{
	const text = 'inside block1'; // 지역변수, 지역 스코프 (로컬 변수, 로컬 스코프)
	{
		const text = 'inside block2';
		console.log(text); // 'inside block1' - 가장 근접한 값에 접근
	}
}
