// 옵셔널 체이닝 연산자 (Optional Chaning Operator)
// ES11 (ECMAScript 2020)
// ?.

// null 또는 undefined인 경우를 확인할 때
let item; // = { price: 1 };
// const price = item && item.price;
const price = item?.price;
console.log(price);

console.log('------------------------------');

let obj = { name: '강아지', owner: { name: '엘리' } };
function printName(obj) {
	// const ownerName = obj && obj.owner && obj.owner.name;
	const ownerName = obj?.owner?.name;
	console.log(ownerName);
}
printName(obj);
