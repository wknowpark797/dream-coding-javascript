const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);

console.log(text.length); // 12
console.log(text[0]); // H
console.log(text.charAt(0)); // H

// 문자열의 index
console.log(text.indexOf('l')); // 2
console.log(text.lastIndexOf('l')); // 9

console.log(text.includes('tx')); // false
console.log(text.startsWith('h')); // false
console.log(text.endsWith('!')); // true

console.log(text.toUpperCase()); // HELLO WORLD!
console.log(text.toLowerCase()); // hello world!

console.log(text.substring(0, 2)); // He
console.log(text.slice(2)); // llo World!
console.log(text.slice(-2)); // d!

const space = '         space         ';
console.log(space.trim()); // space

const longText = 'Get to the point';
console.log(longText.split(' ')); // [ 'Get', 'to', 'the', 'point' ]
console.log(longText.split(' ', 2)); // [ 'Get', 'to' ]
