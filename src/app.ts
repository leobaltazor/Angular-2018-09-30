// // // const first: string = "Hello world";

// // // const arr: [number, string, number]= [1,'2',3]
// // // console.log(first);

// // // console.log(arr);

// // enum KeyCode {
// //   Enter = 13,
// //   Tab = 9
// // }

// // let key: KeyCode = KeyCode.Enter;

// // console.log(key);

// // let b = function add(a: number, b: number): void {
// //   // return a+b;
// // };

// // console.log(b(1, 2));

// // let c = (a: number, b: number) => a + b;

// class User {
//   name: string;
//   constructor(userName: string) {
//     this.name = userName;
//   }
//   getInfo(): void {
//     console.log("Имя: " + this.name);
//   }
// }
// class Employee extends User {
//   company: string;
//   constructor(userName: string, empCompany: string) {
//     super(userName);
//     this.company = empCompany;
//   }
//   getInfo(): void {
//     super.getInfo();
//     console.log("Работает в компании: " + this.company);
//   }
// }

// let bill = new Employee("Bill", 'Micro');

// bill.getInfo();

abstract class Figure {
  name: string;
  color: string = this.color || "black";
  abstract go(): any;
}

class Horrse extends Figure {
  constructor(public x: number, public y: number, public color: string) {
    super();
  }
  go(): void {
    let x = this.x;
    let y = this.y;
    console.log(`x= ${x}, y=${y}`);
  }
}

let horse = new Horrse(2, 3, "black");
horse.name = "horse";

horse.go();

class Tour extends Figure {
  constructor(public direction: number, public count: number) {
    super();
  }
  go(): void {
    let direction = this.direction;
    let count = this.count;
    console.log(`direction= ${direction}, count= ${count}`);
  }
}
let tour = new Tour(1, 5);
tour.go();
tour.color = "White";
