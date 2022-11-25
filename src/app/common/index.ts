let str: string = 'Hello Typescript';
let num: number = 42;
let isActive: boolean = false;

let strArray: string[] = ['H', 'e', 'l'];
let numArray: Array<number> = [1, 1, 2, 3];

function logInfo(name: string, age: number): void {
  console.log(`Info: ${name}, ${age}`);
}

logInfo('Spirit', 23);

function calc(a: number, b: number | string): number {
  if (typeof b === 'string') {
    b = +b;
  }

  return a + b;
}

console.log(calc(2, 4));


class Server {
  static VERSION = '1.0.3';

  private status: string = 'working';

  constructor(public name: string, protected ip: number) {
  }

  public turnOn() {
    this.status = 'working';
  }

  protected turnOff() {
    this.status = 'offline';
  }

  public getStatus(): string {
    return this.status;
  }
}

const server: Server = new Server('AWS', 123);

interface IUser {
  name: string;
  age: number;
  logInfo: () => void;
  id?: any;
}

const user: IUser = {
  name: 'Spirit',
  age: 23,

  logInfo() {
    console.log(this.name + ' ' + this.age);
  }
}

interface ISayHello {
  sayHello: () => void;
}

class User implements ISayHello {
  constructor(private name: string, private age: number) {
  }

  sayHello() {
    console.log(this.name + ' Hello!');
  }
}

interface IUserField {
  name: string;
  age: number;
  id?: any;
}

const users: Array<IUserField> = [
  {id: 1, name: 'V', age: 2},
  {id: 2, name: 'E', age: 23},
  {id: 3, name: 'P', age: 25}
]

const arr: Array<number> = [1, 2, 3, 4];
