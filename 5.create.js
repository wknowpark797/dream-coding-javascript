const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}은 사과`);
  },
};
const orange = {
  name: 'orange',
  display: function () {
    console.log(`${this.name}은 오렌지`);
  },
};
console.log(apple);
console.log(orange);

console.clear();

// 생성자함수 - 정해진 틀 안에서 원하는 객체 생성이 가능하다. (템플릿)
// 대문자로 시작
// this - 객체 자기자신
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}은 ${this.emoji}`);
  };
  // return this; // 생략 가능 - 생성자 함수에서는 this가 자동으로 리턴된다.
}

const apple2 = new Fruit('apple', '사과');
const orange2 = new Fruit('orange', '오렌지');

console.log(apple2);
console.log(orange2);
console.log(apple2.name);
console.log(apple2.emoji);
apple2.display();