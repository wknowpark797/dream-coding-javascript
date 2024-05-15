// export default : 모듈에서 하나만 노출 가능
// export : 모듈에서 여러개 노출 가능

let count = 0;

export function increase() {
	count++;
	console.log(count);
}

export function getCount() {
	return count;
}
