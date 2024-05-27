function execute() {
	console.log('1');

	setTimeout(() => {
		// callback 함수
		console.log('2');
	}, 3000);

	console.log('3');
}

execute(); // 1 -> 3 -> 2
