"use strict";
let username = "saman";
console.log('username: ', username);
let misedDtat = ['saman', 1991, true];
let re = /\w+/g;
let helloWorld = "Helloworld";
helloWorld = 20;
let x = 'saman';
let y = 'sahra';
y = 30;
const saman = {
    name: 'saman',
    age: 32
};
class UserAccount {
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
}
const user = new UserAccount("saman", 1);
function deleteUser(user) {
}
function getUser() {
    return saman;
}
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return obj;
    }
    return obj;
}
let arrayString = ['a', 'b'];
let arrayNumber = [1, +'2'];
let objNameArray = [
    {
        name: 'saman',
    },
    {
        name: 'sadra'
    }
];
let objNameArrayNew = [
    {
        name: 'saman',
        dsdsd: 'dsdsd',
        dsdsdssd: 23323
    },
    {
        name: 'sadra',
        family: 'sahraei'
    }
];
const logPoint = (p) => {
    console.log('p.x, p.y', p.x, p.y);
};
const point = { x: 12, y: 25, z: 12 };
logPoint(point);
const point2 = {
    x: 12,
    y: 26,
    // z:12 error
};
class VirtualPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint);
// tuple
let ourTuple;
ourTuple = [489, true, 'hello'];
console.log('ourTuple', ourTuple);
ourTuple.push('new string');
console.log('ourTuple + push', ourTuple);
let ourReadonlyTuple = [1, false, 'world'];
console.log('ourReadonlyTuple', ourReadonlyTuple);
let fname;
// fname = 'sadra' error
// literal type
let firstName;
// username just could set saman or sadra
// functions
const add = (m, n) => {
    return m + n;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('string');
logMsg(add(2, 3));
// logMsg(add(2, '3')); TS - error
const subtract = (x, y) => {
    return x - y;
};
const multiply = (z, a) => {
    return z * a;
};
const divide = (k, p) => {
    return k / p;
};
const addAll = (...args) => {
    return args.reduce((acc, val) => acc + val, 0);
};
console.log('Add All', addAll(1, 2, 3, 4));
const optional = (a, b, c) => {
    if (typeof c !== 'undefined')
        return a + b + c;
    return a + b;
};
// Never Type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
    }
};
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
