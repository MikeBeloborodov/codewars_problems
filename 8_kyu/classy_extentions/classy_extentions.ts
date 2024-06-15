abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract speak(): string;
}

export class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  speak() {
    return `${this.name} meows.`;
  }
}
