"use strict";
class Coder {
    constructor(name, music, age, lang = 'JavaScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello , I'm ${this.age}`;
    }
}
const Saman = new Coder('Saman', 'Rap', 32);
console.log('Saman', Saman);
class WebDev extends Coder {
    constructor(name, music, age, computer) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLng() {
        return `I write ${this.lang}`;
    }
}
const Sadra = new WebDev('Sadra', 'Pop', 20, 'Win');
console.log('Sadra', Sadra);
class Pianist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Amy = new Peeps('Amy');
const Steave = new Peeps('Steave');
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(val => typeof val === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Params is not an array of strings');
        }
    }
}
const NewBand = new Bands();
NewBand.data = ['saman', 'sadra'];
console.log(NewBand.data);
NewBand.data = [...NewBand.data, 'Sara', 'Ashly'];
console.log(NewBand.data);
