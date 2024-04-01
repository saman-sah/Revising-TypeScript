class Coder {
  secondLang!: string
  constructor(
    public readonly name: string,
    readonly music: string,
    private age: number,
    protected lang: string = 'JavaScript'
  ) {
    this.name = name
    this.music = music
    this.age = age
    this.lang = lang
  }

  public getAge() {
    return `Hello , I'm ${this.age}`
  }
}

const Saman = new Coder('Saman', 'Rap', 32)
console.log('Saman', Saman);
class WebDev extends Coder {
  constructor(
    name: string,
    music: string,
    age: number,
    public computer: string
  ) {
    super(name, music, age)
    this.computer = computer
  }

  public getLng() {
    return `I write ${this.lang}`
  }
}

const Sadra = new WebDev('Sadra', 'Pop', 20, 'Win')
console.log('Sadra', Sadra);


interface Musician {
  name: string,
  instrument: string,
  play(action: string): string
}

class Pianist implements Musician {
  name: string
  instrument: string

  constructor(name: string, instrument: string) {
    this.name = name
    this.instrument = instrument
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`
  }
}


class Peeps {
  static count: number = 0

  static getCount(): number {
    return Peeps.count
  }

  public id: number

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count
  }
}
const John = new Peeps('John')
const Amy = new Peeps('Amy')
const Steave = new Peeps('Steave')


class Bands {
  private dataState: string[]

  constructor() {
    this.dataState = []
  }

  public get data(): string[] {
    return this.dataState
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every(val => typeof val === 'string')) {
      this.dataState = value
      return
    } else {
      throw new Error('Params is not an array of strings')
    }
  }
}

const NewBand = new Bands()

NewBand.data = ['saman', 'sadra']
console.log(NewBand.data);
NewBand.data = [...NewBand.data, 'Sara', 'Ashly']
console.log(NewBand.data);