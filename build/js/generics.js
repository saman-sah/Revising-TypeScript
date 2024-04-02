"use strict";
const echo = (args) => args;
const isObj = (args) => {
    return (typeof args === 'object' && !Array.isArray(args) && args !== null);
};
console.log(isObj(true)); //false
console.log(isObj("Saman")); //false
console.log(isObj([1, 2, 3])); //false
console.log(isObj({ name: 'Saman' })); // true
console.log(isObj(null)); //false
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log('----------------- generics ----------------------------');
console.log('false', isTrue(false));
console.log('0', isTrue(0));
console.log('true', isTrue(true));
console.log('1', isTrue(1));
console.log('Saman', isTrue('Saman'));
console.log('', isTrue(''));
console.log('null', isTrue(null));
console.log('{}', isTrue({}));
console.log('[]', isTrue([]));
console.log('[1, 2, 3]', isTrue([1, 2, 3]));
console.log('NaN', isTrue(NaN));
console.log('-0', isTrue(-0));
console.log('{name: "Saman"}', isTrue({ name: 'Saman' }));
const booleanCheckValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const proccessUser = (user) => {
    return user;
};
console.log(proccessUser({ id: 1, name: 'Saman' }));
// console.log(proccessUser({ name: 'Saman'})); // error TS - id is required for interface
