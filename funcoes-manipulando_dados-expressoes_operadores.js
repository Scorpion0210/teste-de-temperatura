// function createPhrases() {
//     console.log("Sempre estudar")
// }

// createPhrases()

// const sum = (number1, number2) => {
//     let total = number1 + number2

//     return total
// }

// sum(2, 3)

// let n1 = 34
// let n2 = 25

// console.log(`o número 1 é ${n1}`)
// console.log(`o número 2 é ${n2}`)
// console.log(`a soma é ${sum(n1, n2)}`)

// // * callback function

// function sayMayName(name) {
//     name()
// }

// sayMayName(
//     () => {
//         console.log('estou em uma callback')
//     }
// )

// // * function construtura

// function Person(name) {
//     this.name = name
// }

// const mayk = new Person("Mayk")
// const jonh = new Person("João")
// console.log(mayk)
// console.log(jonh)

// let phrase = "Eu quero saber programar em JS"

// let myArray = phrase.split(" ")

// let phraseWithUnderscore = myArray.join("_")

// console.log(phraseWithUnderscore.toLocaleUpperCase())


// * Expressões e operadores

// // Binary
// let number = 1;
// console.log("opa 1: ", number + 1);

// // Unary
// console.log("opa 2: ", ++number, --number)

// // Ternary
// console.log(true ? "Opa" : "Upa")

// // New

// let nome = new String('Thiago');
// nome.surNome = "Amaral"
// let age = new Number(37)

// console.log(nome, nome.surNome, age)

// let data = new Date()
// console.log("data: ", data)

// // * Operadores Unários

// //      typeof
// //      delete
// const users = {
//     nick: 'Scorpion',
//     rank: 'bronze 1'
// }
// delete users.rank
// console.log(typeof users)
// console.log(users)

// // * Operadores Aritiméticos

// // multiplicação *
// console.log(3.2 * 5)
// // divisão /
// console.log(12 / 2)
// // soma +
// console.log(34 + 67)
// // subtração -
// console.log(34 - 67)
// // resto da divisão %
// let remainder;
// remainder = 12 % 2
// console.log(remainder)
// // incremento
// let increment = 0;
// increment++;
// console.log(increment)
// // decremento
// let decrement = 0;
// decrement--;
// console.log(decrement)
// // exponencial
// console.log(3 ** 8)


// // * Grouping operator ( )

// let total = (2 + 3) * 5
// console.log(total)

// // * Operadores de comparação

// // Irá comparar valores e retornar um Boolean como resposta à comparação

// let one = 1;
// let two = 2;

// // ==      igual
// console.log(one == 1) // true
// console.log(one == "1") // true
// // !=      diferente
// console.log(one != 1) // false
// console.log(one != "1") // false
// // ===     estritamente igual
// console.log(one === 1) // true 
// console.log(one === "1") // false
// // !==     estritamente diferente
// console.log(one !== 1) // false 
// console.log(one !== "1") // false
// // >       Maior
// console.log(one > two)
// // >=      Maior igual
// console.log(one >= two)
// // <       Menor
// console.log(two < one)
// // <=      Menor igual
// console.log(two <= one)


// * Precedência dos operadores

// grouping                        ()
// negação e incremento            ! ++ --
// multiplicação e divisão         * /
// adição e subtração              + -
// relacional                      < <= > >=
// igualdade                       == != === !==
// AND                             &&
// OR                              ||
// condicional                     ?:
// assignment (atribuição)         = += -= *=

