// 증가 & 감소 연산자 (Increment & Decrement operators)
let a = 0;
console.log(a);

a++; // a = a + 1;
console.log(a);

a--; // a = a - 1;
console.log(a);

console.clear();

// 주의 사항!!
// a++ 필요한 연산을 하고, 그 뒤 값을 증가 시킨다.
// ++a 값을 먼저 증가하고, 필요한 연산을 한다.
a = 0;
console.log(a++); // 0
console.log(a); // 1

let b = a++;
console.log(b); // 1
console.log(a); // 2

b = ++a;
console.log(b); // 3
console.log(a); // 3
