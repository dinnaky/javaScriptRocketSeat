/*
    Function() constructor

    * Expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const Arthur = new Person("Arthur")
const Eduardo = new Person("Eduardo")

console.log(Arthur.walk())
console.log(Eduardo.walk())
