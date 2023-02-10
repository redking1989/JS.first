// 1. Функции
// 1). Function Declaration Можно в любое место кода поставить переменную great:
// function greet(name) {
//     console.log('Привет, ', name)
// }
// 2). Function Expression Переменная great2 должна быть после функции:
// 'const greet2 = function' и 'const greet2 = function greet2' идентичны:
// const greet2 = function(name) {
//     console.log('Привет2, ', name)
// }

// greet('Лена')
// greet2('Лена')

// console.log(typeof greet) Показывает, будто функция
// console.dir(greet) // На самом деле объект

// 2. Анонимные функции
// let counter = 0
// const interval = setInterval(function() { // есть setTimeout
//     if (counter === 5) {
//     clearInterval(interval) // есть clearTimeout
//     } else {
//     console.log(++counter)
//     }
// }, 1000)

// 3. Стрелочные функции
function greet(name) {
    console.log('Привет, ', name)
}

const arrow = (name, age) => {
    console.log('Привет, ', name, age)
}

const arrow2 = name => console.log('Привет, ', name)
// arrow2('Антон')
// const pow2 = num => {
//     return num ** 2
// } Функция из 1 строчки, поэтому можно записать
const pow2 = num => num ** 2
// console.log(pow2(5))

// 4 Параметры по умолчанию
const sum = (a = 40, b = a * 2) => a + b

// console.log(sum(41, 4))
// console.log(sum())

function sumAll(...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}

const res = sumAll(1, 2, 3, 4, 5, 6, 7)
// console.log(res)

// 5 Замыкания
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Anton')
console.log(logWithLastName('Redkin'))
console.log(logWithLastName('Ivanov'))