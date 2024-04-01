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