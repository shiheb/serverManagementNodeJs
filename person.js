// (function (exports, require, module, __filename, __dirname) { 
// })

// console.log(__dirname, __filename);

module.exports = class Person {

    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    greetings(){

        console.log(`My name is ${this.name} and I am ${this.age}.`);
    }

}
