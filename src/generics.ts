
const echo = <T>(args: T): T => args

const isObj = <T>(args: T): boolean => {
  return (typeof args === 'object' && !Array.isArray(args) && args !== null)
}

console.log(isObj(true));  //false
console.log(isObj("Saman")); //false
console.log(isObj([1, 2, 3])); //false
console.log(isObj({ name: 'Saman' })); // true
console.log(isObj(null));//false

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false }
  }
  if (isObj(arg) && !Object.keys(arg as unknown as Record<keyof T, unknown>).length) {
    return { arg, is: false }
  }
  return { arg, is: !!arg }
}

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

interface BooleanCheck<T> {
  value: T,
  is: boolean
}

const booleanCheckValue = <T>(arg: T): BooleanCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false }
  }
  if (isObj(arg) && !Object.keys(arg as unknown as Record<keyof T, unknown>).length) {
    return { value: arg, is: false }
  }
  return { value: arg, is: !!arg }
}

interface HasId {
  id: number
}

const proccessUser = <T extends HasId>(user: T): T => {
  return user
}

console.log(proccessUser({ id: 1, name: 'Saman' }));
// console.log(proccessUser({ name: 'Saman'})); // error TS - id is required for interface



function getFirstNumber(array: number[]) {
  return array[0]
}
const numbers = [1, 2, 3]
const firstNum = getFirstNumber(numbers)
console.log('firstNum', firstNum);

function getFistStr(array: string[]) {
  return array[0]
}
const strs = ['a', 'b', 'c']
const firstStr = getFistStr(strs)
console.log('firstStr', firstStr);

function getFistElement<ElementType>(array: ElementType[]) {
  return array[0]
}
const elementsStr = ['a', 'b', 'c']
const elementsNum = [1, 2, 3]
const firstElementStr = getFistElement(elementsStr)
const firstElementNum = getFistElement(elementsNum)
console.log('firstElementStr', firstElementStr);
console.log('firstElementNum', firstElementNum);

const input = document.querySelector(".input")
// input.value input type is element and doesnt have value

const inputVal = document.querySelector<HTMLInputElement>(".input")
inputVal?.value



type ApiResponse = {
  data: any,
  isError: boolean
}
const response: ApiResponse = {
  data: {
    name: 'saman',
    age: 32
  },
  isError: false
}
console.log('response', response);


type ApiRes<Data> = {
  data: Data,
  isError: boolean
}
const res: ApiRes<{ name: string, age: number }> = {
  data: {
    name: 'saman',
    age: 32,
  },
  isError: false
}
console.log('res', res);


type UserResponse = ApiRes<{ name: string, age: number }>

const resUser: UserResponse = {
  data: {
    name: 'saman',
    age: 32
  },
  isError: false
}
console.log('resUser', resUser);


const printData = <T>(data: T) => {
  console.log('data', data);
}
printData(2);
printData("hello");
printData(true);
printData([1, 2, 3, 4, 5, 6]);
printData([1, 2, 3, "hi"]);
printData({ name: "Ram", rollNo: 1 });

const printDataTwo = <X, Y>(firstArg: X, secondArg: Y) => {
  console.log('firstArg', firstArg);
  console.log('secondArg', secondArg);
}
printDataTwo("Hello", "World");
printDataTwo(123, ["Hi", 123]);


class Queue<T> {
  private data: T[] = [];

  push(item: T) {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.shift();
  }
}

let q = new Queue<number>();
q.push(1);
// q.push("2"); // Argument of type '"2"' is not assignable to parameter of type 'number'
q.push(3);