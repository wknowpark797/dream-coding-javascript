// 키의 이름과 값을 참조하는 변수의 이름이 동일할 경우 축약 가능
const x = 0;
const y = 0;

// const coordinate = { x: x, y: y };
// 축약 버전
const coordinate = { x, y };
console.log(coordinate);

function makeObj(name, age) {
  // return {
  //   name: name,
  //   age: age,
  // };

  // 축약 버전
  return {
    name,
    age,
  };
}