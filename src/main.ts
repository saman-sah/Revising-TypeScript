let username = "saman"
console.log('username: ', username);

let misedDtat: (string | number | boolean)[] = ['saman', 1991, true]

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
