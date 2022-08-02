// 'use strict';

// task

let str = 'Hello';

str.test = 5;

alert(str.test);

// in non-strict mode: undefined
// in strict mode: uncaught typeerror- cannot create property test on string
