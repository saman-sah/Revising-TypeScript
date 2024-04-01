"use strict";
const todayTO = {
    Pizza: -10,
    Books: -10,
    Jobs: 50
};
console.log('todayTO.Pizza Dot notation', todayTO.Pizza);
console.log('todayTO.Pizza beraket notation', todayTO['Pizza']);
let prop = 'Pizza';
// console.log('todayTO.Pizza beraket notation', todayTO[prop]) TS - error
const todayNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        // total += transactions[transaction]
    }
    return total;
};
console.log('1111111', todayNet(todayTO));
const today2 = {
    Pizza: -10,
    Books: -10,
    Jobs: 50
};
console.log('todayTO.Pizza Dot notation', today2.Pizza);
console.log('todayTO.Pizza beraket notation', today2['Pizza']);
let prop2 = 'Pizza';
// console.log('todayTO.Pizza beraket notation', todayTO[prop]) TS - error
const todayNet2 = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
// today2.pizza = 40 TS-error readonly interfce 
console.log('2222', todayNet2(today2));
const student = {
    name: "John",
    GPA: 3.5,
    classes: [100, 200]
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`); //agar [key: string]: string | number | number[] | undefined ro hazf konim error migirim rah halesh paine
}
const student2 = {
    name: "John",
    GPA: 3.5,
    classes: [100, 200]
};
console.log('-----');
for (const key in student2) {
    console.log(`${key}: ${student2[key]}`);
}
console.log('-----');
Object.keys(student2).map(key => {
    console.log(student2[key]);
});
console.log('-----');
Object.keys(student2).map(key => {
    console.log(student2[key]);
});
console.log('-----');
const logStudent2Keys = (student, key) => {
    console.log(`Student ${key} : ${student[key]}`);
};
logStudent2Keys(student2, 'name');
logStudent2Keys(student2, 'GPA');
logStudent2Keys(student2, 'classes');
