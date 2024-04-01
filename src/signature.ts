//------------- Transcation-------------------------
interface TransactionObj {
  Pizza: number,
  Books: number,
  Jobs: number
}

const todayTO: TransactionObj = {
  Pizza: -10,
  Books: -10,
  Jobs: 50
}

console.log('todayTO.Pizza Dot notation', todayTO.Pizza)
console.log('todayTO.Pizza beraket notation', todayTO['Pizza'])

let prop: string = 'Pizza'
// console.log('todayTO.Pizza beraket notation', todayTO[prop]) TS - error

const todayNet = (transactions: TransactionObj):
  number => {
  let total = 0
  for (const transaction in transactions) {
    // total += transactions[transaction]
  }
  return total
}

console.log('1111111', todayNet(todayTO));
//------------- Trnsc -------------------------
// interface TrnscObj {
//   readonly [index: string]: number, //any property

// }
interface TrnscObj {
  readonly [index: string]: number, //any other property
  Pizza: number, //required
  Books: number, //required
  Jobs: number //required
}

const today2: TrnscObj = {
  Pizza: -10,
  Books: -10,
  Jobs: 50
}

console.log('todayTO.Pizza Dot notation', today2.Pizza)
console.log('todayTO.Pizza beraket notation', today2['Pizza'])

let prop2: string = 'Pizza'
// console.log('todayTO.Pizza beraket notation', todayTO[prop]) TS - error

const todayNet2 = (transactions: TrnscObj):
  number => {
  let total = 0
  for (const transaction in transactions) {
    total += transactions[transaction]
  }
  return total
}
// today2.pizza = 40 TS-error readonly interfce 
console.log('2222', todayNet2(today2));



interface Students {
  [key: string]: string | number | number[] | undefined, //agar property required dashte bashim bayad hame type haye unaro ezafe konim, classes ham mintune number[] bashe ham undefined
  name: string,
  GPA: number,
  classes?: number[]
}

const student: Students = {
  name: "John",
  GPA: 3.5,
  classes: [100, 200]
}

for (const key in student) {
  console.log(`${key}: ${student[key]}`); //agar [key: string]: string | number | number[] | undefined ro hazf konim error migirim rah halesh paine
}


interface Students2 {
  name: string,
  GPA: number,
  classes?: number[]
}

const student2: Students2 = {
  name: "John",
  GPA: 3.5,
  classes: [100, 200]
}
console.log('-----');
for (const key in student2) {
  console.log(`${key}: ${student2[key as keyof Students2]}`)
}
console.log('-----');
Object.keys(student2).map(key => {
  console.log(student2[key as keyof typeof student2]);
})
console.log('-----');
Object.keys(student2).map(key => {
  console.log(student2[key as keyof Students2]);
})
console.log('-----');
const logStudent2Keys = (student: Students2, key: keyof Students2):
  void => {
  console.log(`Student ${key} : ${student[key]}`);
}
logStudent2Keys(student2, 'name')
logStudent2Keys(student2, 'GPA')
logStudent2Keys(student2, 'classes')