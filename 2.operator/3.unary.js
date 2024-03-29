// 단항 연산자 Unary operators
// + (양)
// - (음)
// ! (부정)

let a = 5;
a = -a; // -1 * 5
console.log(a);
a = -a;
console.log(a);

a = +a;
console.log(a);
a = -a; // -5
a = +a; // +(-5)
console.log(a);

// 부정연산자
let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

console.clear();

// + 연산자를 사용해서 숫자가 아닌 타입들을 숫자로 변환할 경우 어떤값이 나오는지 확인이 가능
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0

console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN

// ! 를 한번만 사용하면 부정연산자
// !! 를 사용해서 불리언이 아닌 타입들을 불리언으로 변환할 수 있다.
console.log(!!1);
