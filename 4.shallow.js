// 얕은 복사 (Shallow Copy) - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할 때 항상 얕은 복사가 이루어진다.
// Array.from, concat, slice, spread(...), Object.assign

const pizza = { name: '피자', price: 2 };
const ramen = { name: '라멘', price: 3 };
const sushi = { name: '초밥', price: 1 };

// 서로 다른 배열객체를 가진다.
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1: ', store1);
console.log('store2: ', store2);

store2.push(sushi);
console.log('store1: ', store1);
console.log('store2: ', store2);

pizza.price = 4;
console.log('store1: ', store1);
console.log('store2: ', store2);
