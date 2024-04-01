"use strict";
let a = 'hello';
let b = a; //less specific
let c = a; //more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
// let val: string = addOrConcat(2, 3 , 'concat') 
//error ts- Type 'string | number' is not assignable to type 'string'.
let strVal = addOrConcat(2, 3, 'concat'); //assertion
let numVal = addOrConcat(2, 3, 'concat'); //assertion
console.log('numVal', numVal);
// DOM
const img = document.querySelector('img');
const myImg = document.getElementById('img');
const yourImg = document.getElementById('img');
img.src;
myImg.src;
yourImg.src;
// Origin JS
// -------------------------------------
// let year = document.getElementById("year")
// let thisYear: string = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear
// Solution 1
// -------------------------------------
// let year: HTMLElement | null = document.getElementById("year")
// let thisYear: string = new Date().getFullYear().toString()
// if(year){
//   year.setAttribute("datetime", thisYear)
//   year.textContent = thisYear
// }
//Solution 2
// -------------------------------------
// let year= document.getElementById("year") as HTMLSpanElement
// let thisYear: string = new Date().getFullYear().toString()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear
//Solution 3
// -------------------------------------
let year = document.getElementById("year");
let thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
