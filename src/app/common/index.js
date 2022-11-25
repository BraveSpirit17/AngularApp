var str = 'Hello Typescript';
var num = 42;
var isActive = false;
var strArray = ['H', 'e', 'l'];
var numArray = [1, 1, 2, 3];
function logInfo(name, age) {
    console.log("Info: ".concat(name, ", ").concat(age));
}
logInfo('Spirit', 23);
function calc(a, b) {
    if (typeof b === 'string') {
        b = +b;
    }
    return a + b;
}
console.log(calc(2, 4));
var Server = /** @class */ (function () {
    function Server(name, ip) {
        this.name = name;
        this.ip = ip;
        this.status = 'working';
    }
    Server.prototype.turnOn = function () {
        this.status = 'working';
    };
    Server.prototype.turnOff = function () {
        this.status = 'offline';
    };
    Server.prototype.getStatus = function () {
        return this.status;
    };
    Server.VERSION = '1.0.3';
    return Server;
}());
var server = new Server('AWS', 123);
var user = {
    name: 'Spirit',
    age: 23,
    logInfo: function () {
        console.log(this.name + ' ' + this.age);
    }
};
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.sayHello = function () {
        console.log(this.name + ' Hello!');
    };
    return User;
}());
var users = [
    { id: 1, name: 'V', age: 2 },
    { id: 2, name: 'E', age: 23 },
    { id: 3, name: 'P', age: 25 }
];
var arr = [1, 2, 3, 4];
