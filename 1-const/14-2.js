'use strict';

const bar = Object.freeze({ prop1: 'a'});
bar.prop1 = 'b';
console.log(bar);
// Object.preventExtensions
// Object.seal
// Object.freeze