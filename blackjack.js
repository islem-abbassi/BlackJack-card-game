
let sum=0
let msg=""
let isAlive=false
let wins=false
let cards= []

let msgel=document.getElementById("msg")
let sumel=document.querySelector("#sum")
let cardel=document.querySelector("#card")

let player={
     name:"islem",
     chips:234
}
let playerel=document.getElementById("player")
playerel.textContent=player.name+": $"+player.chips

function getRandomCard(){
    let x=Math.floor(Math.random()*13)+1
    if (x===1){
        return 11
    }
    if(x>10){
        return 10
    }
    return x
}

function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard, secondCard]
    sum=firstCard+secondCard
    renderGame()
}

function renderGame(){
    cardel.textContent="cards:"
    for(let i=0;i<cards.length;i++){
        cardel.textContent+=cards[i]+" "
    }
    sumel.textContent="sum:"+" "+sum
if (sum <= 20){
    msg="do you want a new card?"
}else if (sum===21){
    msg="woooho! you win!!"
    wins=true
}else{
    msg="you're out hihihi"
    isAlive=false 
}
msgel.textContent=msg
}
function newCard(){
    if ( isAlive===true &&  wins===false){
    console.log("drawing new cards")
    let thirdCard=getRandomCard()
    sum+=thirdCard
    cards.push(thirdCard)
    renderGame()
}}

function rollDice(){
    let randomn=Math.floor(Math.random()*6)+1
    return randomn
}
console.log(rollDice())