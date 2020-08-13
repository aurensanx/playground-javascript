// const _ = require("lodash");

const person = { name : "john"};

function sayHi(age) {
  console.log(`${this.name} is ${age}`)
}

sayHi.call(person, 31);
sayHi.bind(person, 31);
