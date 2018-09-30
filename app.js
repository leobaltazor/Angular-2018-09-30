var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Figure = /** @class */ (function () {
    function Figure() {
        this.color = this.color || "black";
    }
    return Figure;
}());
var Horrse = /** @class */ (function (_super) {
    __extends(Horrse, _super);
    function Horrse(x, y, color) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.color = color;
        return _this;
    }
    Horrse.prototype.go = function () {
        var x = this.x;
        var y = this.y;
        console.log("x= " + x + ", y=" + y);
    };
    return Horrse;
}(Figure));
var horse = new Horrse(2, 3, "black");
horse.name = "horse";
horse.go();
var Tour = /** @class */ (function (_super) {
    __extends(Tour, _super);
    function Tour(direction, count) {
        var _this = _super.call(this) || this;
        _this.direction = direction;
        _this.count = count;
        return _this;
    }
    Tour.prototype.go = function () {
        var direction = this.direction;
        var count = this.count;
        console.log("direction= " + direction + ", count= " + count);
    };
    return Tour;
}(Figure));
var tour = new Tour(1, 5);
tour.go();
tour.color = "White";
