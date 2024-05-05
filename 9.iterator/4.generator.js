// const multiple = {
// 	[Symbol.iterator]: () => {
// 		const max = 10;
// 		let num = 0;

// 		return {
// 			next() {
// 				return { value: num++ * 2, done: num > max };
// 			},
// 		};
// 	},
// };

// [ Generator ]
// 작성법 : function 뒤에 * 키워드 작성하기
function* multipleGenerator() {
	try {
		for (let i = 0; i < 10; i++) {
			console.log(i);
			yield i ** 2;
			// [ yield ]
			// 사용자가 원할 때까지 기다린 후 하나씩 리턴
			// next 함수가 호출되어야 다음 코드 실행
		}
	} catch (error) {
		console.log(error);
	}
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return(); // generator 종료
multiple.throw('Error ~~'); // multiple 내부에 error 던지기

next = multiple.next();
console.log(next.value, next.done);
