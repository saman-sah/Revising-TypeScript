let username = "saman"
console.log('username: ', username);

let misedDtat: (string | number | boolean)[] = ['saman', 1991, true]

let re: RegExp = /\w+/g

type both = string | number

let helloWorld = <string | number>"Helloworld"
helloWorld = 20

let x: string | number = 'saman'

let y: both = 'sahra'
y = 30

interface User {
  name: string,
  age: number
}

const saman: User = {
  name: 'saman',
  age: 32
}

class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name,
      this.age = age
  }
}

const user: User = new UserAccount("saman", 1)

function deleteUser(user: User) {

}

function getUser(): User {
  return saman
}

function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return obj
  }
  return obj
}

type StringArray = Array<string>
let arrayString: StringArray = ['a', 'b']

type NumberArray = Array<number>
let arrayNumber: NumberArray = [1, +'2']

type ObjectWithNameArray = Array<{ name: string }>
let objNameArray: ObjectWithNameArray = [
  {
    name: 'saman',
  },
  {
    name: 'sadra'
  }
]

type ObjectWithNameArrayNew = Array<{ name: string, [key: string]: any }>
let objNameArrayNew: ObjectWithNameArrayNew = [
  {
    name: 'saman',
    dsdsd: 'dsdsd',
    dsdsdssd: 23323
  },
  {
    name: 'sadra',
    family: 'sahraei'
  }
]


interface Point {
  x: number,
  y: number
}
const logPoint = (p: Point): void => {
  console.log('p.x, p.y', p.x, p.y);
}
const point = { x: 12, y: 25, z: 12 }
logPoint(point)

const point2: Point = {
  x: 12,
  y: 26,
  // z:12 error
}

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y
  }
}

const newVPoint = new VirtualPoint(13, 56)
logPoint(newVPoint)

// tuple
let ourTuple: [number, boolean, string]
ourTuple = [489, true, 'hello']
console.log('ourTuple', ourTuple);

ourTuple.push('new string')
console.log('ourTuple + push', ourTuple);

let ourReadonlyTuple: readonly [number, boolean, string] = [1, false, 'world']
console.log('ourReadonlyTuple', ourReadonlyTuple);
// ourReadonlyTuple.push('new string') readonly -errorrrr

type stringOrNumber = string | number

type Guitarist = {
  name?: string,
  active: boolean,
  albums: String | Number
}

interface Guitarist2 {
  name?: string,
  active: boolean,
  albums: stringOrNumber
}

type userId = stringOrNumber

let fname: 'Saman'
// fname = 'sadra' error

// literal type
let firstName: 'Saman' | 'Sadra'
// username just could set saman or sadra


// functions
const add = (m: number, n: number):
  number => {
  return m + n
}

const logMsg = (message: any):
  void => {
  console.log(message);
}
logMsg('string');
logMsg(add(2, 3));
// logMsg(add(2, '3')); TS - error

const subtract = (x: number, y: number):
  number => {
  return x - y
}

const multiply = (z: number, a: number):
  number => {
  return z * a
}

type mathFunction = (g: number, l: number) => number
// equal to 
interface mathFunction2 {
  (g: number, l: number): number
}

const divide: mathFunction = (k, p) => {
  return k / p
}


// rest parameter
type MathFunc = (...args: number[]) => number
interface MathFunc2 {
  (...args: number[]): number
}
const addAll: MathFunc = (...args) => {
  return args.reduce((acc, val) => acc + val, 0);
}

console.log('Add All', addAll(1, 2, 3, 4));


const optional = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') return a + b + c
  return a + b
}

// Never Type
const createError = (errMsg: string): never => {
  throw new Error(errMsg)
}
const infinite = (): never => {
  let i = 1
  while (true) {
    i++
  }
}

const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false
}