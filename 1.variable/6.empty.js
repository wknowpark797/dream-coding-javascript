// null, undefined
let variable;
console.log(variable); // undefined (값이 정해지지 않은 상태)

variable = null;
console.log(variable); // null (값이 없음을 명시)

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태
activeItem = null; // 활성화된 아이템이 없는 상태

// typeof
console.log(typeof null); // object
console.log(typeof undefined); // undefined
