
const cardArray = [
    { name: 'fries', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
    { name: 'fries', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'hotdog', img: 'images/hotdog.png' }
    ]
cardArray.sort(() => 0.5 - Math.random())
// Variables
let chosenIds = []
let chosenNames = []
const wonCards = []
const grid = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')

function creategrid() {
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}
function flipcard(){
    let cardId = this.getAttribute('data-id')
    chosenIds.push(cardId)
    chosenNames.push(cardArray[cardId].name)
    this.setAttribute('src', cardArray[cardId].img)
    if(chosenNames.length == 2){
       setTimeout(checkMatch, 600)
    }
}
function checkMatch(){
    const allcards = document.querySelectorAll('img')
    const op1 = chosenIds[0]
    const op2 = chosenIds[1]
    if(op1 === op2 ){
        allcards[op1].setAttribute('src', 'images/blank.png')
        allcards[op2].setAttribute('src', 'images/blank.png')
        // alert('You Suck !!!!')
    } else if (chosenNames[0] === chosenNames[1]){
        allcards[op1].setAttribute('src', 'images/white.png')
        allcards[op2].setAttribute('src', 'images/white.png')
        allcards[op1].removeEventListener('click', flipcard)
        allcards[op2].removeEventListener('click', flipcard)
        wonCards.push(chosenNames)    
    } else {
        allcards[op1].setAttribute('src', 'images/blank.png')
        allcards[op2].setAttribute('src', 'images/blank.png')
        // alert('You Suck !!!!')
    }
    chosenIds = []
    chosenNames = []
    resultDisplay.innerHTML = wonCards.length
    if(wonCards.length == cardArray.length/2){
        resultDisplay.innerHTML = 'You Compleated the game !!!!'
    }
}
creategrid()
