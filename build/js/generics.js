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
function getFirstNumber(array) {
    return array[0];
}
const numbers = [1, 2, 3];
const firstNum = getFirstNumber(numbers);
console.log('firstNum', firstNum);
function getFistStr(array) {
    return array[0];
}
const strs = ['a', 'b', 'c'];
const firstStr = getFistStr(strs);
console.log('firstStr', firstStr);
function getFistElement(array) {
    return array[0];
}
const elementsStr = ['a', 'b', 'c'];
const elementsNum = [1, 2, 3];
const firstElementStr = getFistElement(elementsStr);
const firstElementNum = getFistElement(elementsNum);
console.log('firstElementStr', firstElementStr);
console.log('firstElementNum', firstElementNum);
const input = document.querySelector(".input");
// input.value input type is element and doesnt have value
const inputVal = document.querySelector(".input");
inputVal === null || inputVal === void 0 ? void 0 : inputVal.value;
const response = {
    data: {
        name: 'saman',
        age: 32
    },
    isError: false
};
console.log('response', response);
const res = {
    data: {
        name: 'saman',
        age: 32,
    },
    isError: false
};
console.log('res', res);
const resUser = {
    data: {
        name: 'saman',
        age: 32
    },
    isError: false
};
console.log('resUser', resUser);
const printData = (data) => {
    console.log('data', data);
};
printData(2);
printData("hello");
printData(true);
printData([1, 2, 3, 4, 5, 6]);
printData([1, 2, 3, "hi"]);
printData({ name: "Ram", rollNo: 1 });
const printDataTwo = (firstArg, secondArg) => {
    console.log('firstArg', firstArg);
    console.log('secondArg', secondArg);
};
printDataTwo("Hello", "World");
printDataTwo(123, ["Hi", 123]);
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
let q = new Queue();
q.push(1);
// q.push("2"); // Argument of type '"2"' is not assignable to parameter of type 'number'
q.push(3);
