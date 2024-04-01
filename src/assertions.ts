type One = string
type Two = string | number
type Three = 'hello'

let a: One = 'hello'
let b = a as Two //less specific
let c = a as Three //more specific


let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'):
  number | string => {
  if (c === 'add') return a + b
  return '' + a + b
}

// let val: string = addOrConcat(2, 3 , 'concat') 
//error ts- Type 'string | number' is not assignable to type 'string'.

let strVal: string = addOrConcat(2, 3, 'concat') as string //assertion
let numVal: number = addOrConcat(2, 3, 'concat') as number //assertion
console.log('numVal', numVal);


// DOM
const img = document.querySelector('img')!
const myImg = document.getElementById('img') as HTMLImageElement
const yourImg = <HTMLImageElement>document.getElementById('img')

img.src
myImg.src
yourImg!.src



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
let year = document.getElementById("year")!
let thisYear: string = new Date().getFullYear().toString()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear