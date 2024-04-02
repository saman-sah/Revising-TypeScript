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