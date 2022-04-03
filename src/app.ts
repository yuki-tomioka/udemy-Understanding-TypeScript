interface Greatable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greatable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greatable;

user1 = new Person("max");

user1.greet("Hello I am");
console.log(user1);
