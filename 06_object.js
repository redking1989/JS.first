const person = {
    name: 'Anton',
    age: 33,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    // 'complex key': 'Complex Value',
    // ['key' + (1 + 3)]: 'Computed Key', // key_4
    greet() {
        console.log('greet from person')
    }, // Раньше было так: greet: function () {}
    info() {
        // console.log('this:', this)
        console.info('Информация про человека по имени', this.name)
    }
}

// console.log(person.name)
// const ageKey = 'age'
// console.log(person['age'])
// console.log(person ['complex key'])
// person.greet()
//
// person.age++
// person.languages.push('by')
// // person['key_4'] = undefined
// delete person['key_4']
// console.log(person)
// console.log(person['key_4'])

// Деструктуризация
// const name = person.name
// const age = person.age
// const languages = person.languages

// const {name, age: personAge = 10, languages} = person
// console.log(name, personAge, languages)
// console.log(person)

// for (let key in person) {
//     if (person.hasOwnProperty(key)) { //Если свойства нет в прототипе key
//         console.log('key:', key)
//         console.log('value:', person[key])
//     }
// } или так:
// const keys = Object.keys(person)
// console.log(keys) // Массив из ключей объекта
// Object.keys(person).forEach((key) => {
//     console.log('key:', key)
//     console.log('value:', person[key])
// })

// Context
// person.info()
const logger = {
    keys() {
        console.log('Object Keys: ', Object.keys(this))
    },
    keysAndValues() {
        // "key": value
        // Object.keys(this).forEach(key => {
        //     console.log(`"${key}": ${this[key]}`)
        // })
        // либо:
        // const self = this
        // Object.keys(this).forEach(function(key) {
        //     console.log(`"${key}": ${self[key]}`)
        // })
        // либо:
        Object.keys(this).forEach(function(key) {
            console.log(`"${key}": ${this[key]}`)
        }.bind(this))
    },

    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('------ Start ------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('------------')
            }
        })
        if (bottom) {
            console.log('------ End ------')
        }
    }
}
// logger.keys(person)
// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)
// logger.keysAndValues.call(logger)
// logger.keysAndValues.call(person)
// logger.keysAndValues.call({a: 1, c: {b: 2}})
logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])
