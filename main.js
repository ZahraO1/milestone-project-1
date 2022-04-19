//Go fish
//assign a number to cards [52] --> put them all in array
const suits = ['spades','clubs','hearts','diamonds']
const numbers = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
]
//variable that holds the main deck
var cards = []
//generating card deck
function newDeck(){
    suits.forEach(suit =>{
        numbers.forEach(number =>{
            cards.push([number,suit])
        })
    })
}

//function to randomly shuffle all the cards in the main deck
function shuffle(){
    for(let i=0; i<cards.length;i++){
        let randIndex = Math.floor(Math.random()*(cards.length))
        let temp = cards[randIndex];
        cards[randIndex] = cards[i]
        cards[i] = temp;
    }
}
//one array for all the player's decks
const playerDeck = [
    [],  //Player 1's Deck
    [],  //Player 2's Deck
    [],  //Player 3's Deck
    []   //Player 4's Deck
]
//giverDeck and receiverDeck are integers indicating which deck from playerDeck array
//should be altered
function cardChange(giverDeck,receiverDeck,value){
    //for loop iterates over each card that giving player has
    for(let i = 0; i < playerDeck[giverDeck].length;i++){
        //if the card value is the same as what receving player is looking for
        //that card is transferred from giver to receiver
        if(playerDeck[giverDeck][i][0] == value){
            console.log(""+value+"")
            //receiving player gets the card
            playerDeck[receiverDeck].push(playerDeck[giverDeck][i])
            //card is removed from giver
            playerDeck[giverDeck].splice(i,1)
        }
    }
}
//empties the player's Deck as well as main deck
function reset(){
    playerDeck.forEach(player =>{
        player.splice(0,player.length)
    })
    cards.splice(0,cards.length)
}

//if a player is said to go fish, they draw
function drawCard(inDeck){
    if (cards.length != 0){
        playerDeck[inDeck].push(cards.pop())
    }
}
//if a player hand is empty --> they are handed 5 cards from the deck
function emptyHand(inDeck){
    if(playerDeck[inDeck] == 0){
        for(let i = 0; i < 5; i++){
            drawCard(inDeck)
        }
    }
}
//start function
function start(){
    reset()    //board is cleared
    newDeck()  //generates 52 cards
    shuffle()  //shuffles the main deck
    //5 cards go to each player
    for(let i = 0; i < playerDeck.length; i++){
        emptyHand(i)
    }
}