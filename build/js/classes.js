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
