// Строки
// const name = 'Антон'
// console.log(typeof name)
// const age = 33
//
// function getAge() {
//     return age
// }
// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' года.' // ''=""
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 40 ? 'A' : 'B'} лет` //Можно ${getAge}, нельзя if...
// console.log(output)

// const output = `
//     <div>This is div</div>
//     <p>this is p</p>
// `
// console.log(output)

// const name = 'Антон' // происходит создание строки new String()
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.charAt(2))
// console.log(name.indexOf('тон'))
// console.log(name.toLowerCase().startsWith('ант'))
// console.log(name.startsWith('ант'))
// console.log(name.endsWith('он'))
// console.log(name.repeat(3))
// const string = '      password        '
// console.log(string.trim())
// // console.log(string.trimLeft()) устарело на момент видео
// // console.log(string.trimRight()) устарело на момент видео
// console.log(string.trimStart()) // теперь так
// console.log(string.trimEnd()) // теперь так

function logPerson(s, name, age) {
    // console.log(s, name, age)
    if (age < 0) {
        age = 'Ещё не родился'
    }
    // return 'Info about person'
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Антон'
const personName2 = 'Владилен'

const personAge = 33
const personAge2 = -10

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

console.log(output)
console.log(output2)
