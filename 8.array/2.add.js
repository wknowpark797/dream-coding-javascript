const fruits = ['바나나', '사과', '포도', '복숭아'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]); // index 접근
console.log(fruits.length);

// 배열의 추가, 삭제 - 좋지 않은 방식
// delete 키워드로 삭제하기, index로 수동적으로 추가하기 X
fruits[4] = '딸기'; // (X)
// fruits[fruits.length] = '딸기';
console.log(fruits);

delete fruits[1]; // (X) 삭제한 자리가 남아있다.
console.log(fruits);
