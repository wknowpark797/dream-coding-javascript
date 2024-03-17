// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)

// [ ?? ]
// -> null, undefined일 경우에만 설정
// [ || ]
// -> 값이 falshy한 경우 모두 설정(할당) : 0, -0, null, undefined, ''
let num = 0;
console.log(num || '-1');
console.log(num ?? '-1');
