class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Mi name es ${this.name} and I am ${this.age}`)
    }


}
module.exports = Person;