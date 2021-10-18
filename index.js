const Person = require('./scripts/person.js')


const person1 = new Person("Adam Smith", 40);
const person2 = new Person("Jon Smith", 56);


console.log(person1.greeting())
console.log(person2.greeting())