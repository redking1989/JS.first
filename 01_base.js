// 1. Переменные
// variable
// var name = 'Antonius'
// Код можно писать без ;
// camelCase
// const firstName = 'Anton'
// const lastName = 'Redkin' //string
// let age = 33 //number
// const age = 33
// const isProgrammer = true //boolean

// name = 'Anton'
// Так нельзя lastName = 'Red'

// age = 28
// age = '28'
// age = 'some string'
// age = false
// console.log(age)
// console.log(isProgrammer)
// console.log(age)

// Допустимо:
// const _ = 'private'
// const $ = 'some value'
// Недопустимо:
// const if = 'mkef'
// const withNum5 = '5'
// const 5withNum = '5' ошибка

// 2. Динамическая типизация. Мутирование.
// console.log("") допустимо
// console.log('Имя человека: ' + firstName + ', а возраст человека: ' +  age)
// console.log(age)
// console.log(age.toString())
// alert('Имя человека: ' + firstName + ', а возраст человека: ' +  age) - в браузере, не в JavaScript

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// Операторы
// const currentYear = 2023
// let currentYear = 2023
// const birthYear = 1989
//
// // const age = currentYear - birthYear
// // console.log(age)
//
// const a = 10
// const b = 5
//
// let c = 32
// c = c + a

// c += a
// c -= a
// c *= a
// c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear++) //2023
// console.log(currentYear) //2024
// // console.log(++currentYear) //2024
// // console.log(currentYear) //2024
// console.log(--currentYear) //2023
// console.log(c)

// Типы данных
// const isProgrammer = true
// const name = 'Anton'
// const age = 33
// let x // в let можно не задавать содержание переменной
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 Приоритет операторов
// const fullAge = 33
// const birthYear = 1989
// const currentYear = 2023

// // > < >= <= https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// const isFullAge = currentYear - birthYear >= fullAge // 34>=33 => true
// console.log(isFullAge)

// 6 Условные операторы
// const courseStatus = 'fail' // статусы ready, fail, pending
//
// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// }
//
// else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в процессе разработки')
// } else {
//     console.log('Курс не получился')
// }

// const isReady = true

// if (isReady === true) {
//     console.log('Всё готово!')
// }
// или:
// if (isReady) {
//     console.log('Всё готово!')
// } else {
//     console.log('Всё не готово')
// }
// или коротко (Тернарное выражение):

// isReady ? console.log('Всё готово!') : console.log('Всё не готово')

// const num1 = 42 // number
// const num2 = '42' // string
//
// console.log(num1 === num2) // == приводит к одному типу данных, поэтому надо использовать ===

// 7 Булевая логика https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Logical_AND
// && (логическое "и") - если хотя бы 1 false, то false
// || (логическое "или") - если хотя бы 1 true, то true
// ! - логическое "нет", можно применять многократно !!!!

// 8 Функции

// function calculateAge(year) {
//     return 2023 - year
// }
//
// // const myAge = calculateAge(1989)
// // console.log(myAge)
// // console.log(calculateAge(1989))
// // console.log(calculateAge(2019))
// // console.log(calculateAge(1999))
//
// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//
//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     } else {
//         console.log('Вообще-то это уже будущее!')
//     }
//
// }
//
// logInfoAbout(  'Антон',  1989)
// logInfoAbout(  'Елена',  1992)
// logInfoAbout(  'Елена',  2024)

// 9 Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']
// console.log(cars)
//Текущеее поведение: не работает кнопка
//Требуемое поведение: нужно чтобы работала кнопка
//Шаги воспроизведение: 1. Открываю приложение 2. Перехожу во вкладку "вкладка 2" 3. Нажимаю кнопку
// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// Проще:
// const cars = ['Мазда', 'Мерседес', 'Форд']

// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])
// cars[0] = 'Porsche'
// // console.log(cars)
// // cars[3] = 'Mazda'
// // cars[cars.length + 1] = 'Mazda'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// } Длинная запись

// for (let car of cars) {
//     console.log(car)
// }

// 11 Объекты
// const person = new Object({})
const person = {
    firstName: 'Anton', // Каждый элемент - ключ
    lastName: 'Redkin',
    year: 1989,
    languages: ['Ru', 'En', 'De'],
    hasWife: false,
    greet: function() {
        console.log('greet from person')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
// const key = 'languages'
const key = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)
person.greet()