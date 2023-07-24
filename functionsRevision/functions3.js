// // Arrow Function

// const sayMyName = () => {
//     console.log('Arthur')
// }

// sayMyName()

// callback function 

function sayMyName(name) {
    console.log('Antes de executar a funcao callback')

    name()

    console.log('Depos de executar a funcao callback')
}

sayMyName (
    () => {
        console.log('estou em um callback')
    }
)