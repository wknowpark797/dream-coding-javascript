// export default : 사용하는 이름의 변경 가능
// import increase from './counter.js';
// increase();

// export : 사용하는 이름 그대로 사용
// import { increase, getCount } from './counter.js';
// increase();

// export : as를 사용하여 이름 변경
// import { increase as increase1 } from './counter.js';
// increase1();

// 그룹화 사용
import * as counter from './counter.js';

counter.increase();
counter.increase();
counter.increase();
const count = counter.getCount();
console.log('count : ', count);
