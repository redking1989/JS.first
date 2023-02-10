// window.alert('1') происходит за кулисами, теперь пишем alert('1').
// window.prompt('Как тебя зовут?')
// window.confirm('Как тебя зовут?')
// window.setInterval()
const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('h2')
// const heading2 = document.querySelector('.h2-class')
// const heading2 = document.querySelector('#sub-hello') // css. Всегда 1 элемент
const heading2 = document.querySelector('h2')
// console.dir(heading2)

// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
// console.log(h2List)
// const heading3 = h2List[1]
const heading3 = h2List[h2List.length - 1]
// console.log(heading3)

setTimeout(() => {
    addStylesTo(heading, 'JavaScript')
    // console.dir(heading.id)
    // console.dir(heading.textContent)
    // heading.textContent = 'Changed from JavaScript'
    // heading.style.color = 'red'
    // heading.style.textAlign = 'center'
    // heading.style.backgroundColor = 'black'
    // heading.style.padding = '2rem'
}, 1500)

const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')
    window.location = url
})
setTimeout(() => {
    // addStylesTo(heading3.querySelector('a'), 'Практикуйся', 'blue')
    addStylesTo(link, 'Практикуйся', 'blue')
}, 3000)

setTimeout(() => {
    addStylesTo(heading2, 'И всё получится!', 'yellow', '2rem')
}, 4500)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    // falsy: '', undefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

// https://developer.mozilla.org/ru/docs/Web/Events
heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'
    }
    // console.log('click')
}

// heading.ondblclick

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'yellow') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
    } else {
        heading2.style.color = 'yellow'
        heading2.style.backgroundColor = '#000'
    }
})
// В конце видео https://www.youtube.com/watch?v=Bluxbh9CaQ0 ссылки на полезное.