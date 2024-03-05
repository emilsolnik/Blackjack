
let cards = []
let sum  = 0
let hasBlackjack = false 
let isAlive = false
let message = ""  
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let player={
    name: "Emil",
    chips : 150
}
playerEl.textContent = player.name + " : $" +player.chips

function getRandomCard(){
    let RandomCard = Math.floor(Math.random()*13+1)
    if(RandomCard===1){
        return 11
    }
    if(RandomCard>=10){
        return 10
    }
    else{
        return RandomCard
    }
}
function renderGame(){
    cardsEl.textContent = "cards: "
    for(let i=0; i<cards.length;i++){
    cardsEl.textContent += cards[i]+" "
    }
    if(sum<=20){
        message = "do you want another card?"
    }
    else if(sum===21){
        hasBlackjack = true
        isAlive = false
        message = "Blackjack!"
    }
    else{
        message = "you lost"
        isAlive = false
    }
    
    console.log(message)
    messageEl.textContent = message 
    sumEl.textContent = "sum: "+sum
    
}
function startGame(){
    isAlive = true
    hasBlackjack=false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard+secondCard
    renderGame()

}

function newCard(){
    if(isAlive&&!hasBlackjack){
        let newCard = getRandomCard()
        cards.push(newCard)
        sum +=newCard
        renderGame()
    }
}
console.log(isAlive)
//startGame()
