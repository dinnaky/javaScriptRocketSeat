//function scope

let subject

function createThink() {
    subject = 'study'
}

console.log(subject)
createThink()
console.log(subject)

// function hoisting

sayMyName()

function sayMyName(){
    console.log('Arthur')
}