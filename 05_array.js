const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
// const people = [
//     {name: 'Anton', budget: 4200},
//     {name: 'Elena', budget: 3500},
//     {name: 'Victoria', budget: 1700}
// ]
// const fib = [1, 1, 2, 3, 5, 8, 13, '21', true, {}] Можно хранить разные типы
const fib = [1, 1, 2, 3, 5, 8, 13]
// console.log(cars)

// Function
function addItemToEnd() {
}

// Method
// cars.push('Рено')
// cars.unshift('Волга')
// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('БМВ')
// const index = cars.findIndex('БМВ')
// console.log(index)
// cars[index] = 'Porsche'
// console.log(cars)

// let findedPerson
// for (const person of people) {
//     if (person.budget === 3500) {
//         findedPerson = person
//     }
// }

// console.log(findedPerson)

// const index = people.findIndex(function(person) {
//     return person.budget === 3500
// })
// const person = people.find(function(person) {
//     return person.budget === 3500
// })
// const person = people.find((person) => {
//     return person.budget === 3500
// }) Длинный способ написания
// const person = people.find(person => person.budget === 3500)
// console.log(person)

// console.log(cars.includes('Мазда'))

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
//
const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
//
// const pow2Fib = fib.map(pow2).map(Math.sqrt) // Можно и так, и так.
// console.log(pow2Fib)
// console.log(upperCaseCars)
// console.log(cars)
// const pow2Fib = fib.map(pow2)
// const filtreNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filtreNumbers)

// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

const people = [
    {name: 'Anton', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]

const allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
        acc += person.budget
    return acc
}, 0) // acc - значение, person - элемент, по которому итерация
console.log(allBudget)