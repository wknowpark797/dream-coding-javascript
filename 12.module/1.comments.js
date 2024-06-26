// 주석 Comments
// 한 줄 주석
// TODO(작성자): 해야할 일 작성
// ex) TODO(작성자): XX기능 구현하기

/**
 * 주석은 코드 자체를 설명하는 것이 아닌,
 * 왜(WHY), 어떻게(HOW)를 설명하는 것이 좋은 주석
 * (단, 정말 필요한 경우에만 사용)
 */

// 외부에서 많이 쓰이는 함수 api의 경우 JSDoc을 사용하면 좋음 -> 문서 변환 가능
/**
 * 함수에 대한 설명
 * @param {*} a 인자에 대한 설명
 * @param {*} b 인자에 대한 설명
 * @returns 반환값에 대한 설명
 */
function add(a, b) {
	return a + b;
}
