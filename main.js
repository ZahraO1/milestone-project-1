//Go fish
//assign a number to cards [52] --> put them all in array
const suits = ['♠','♣','♥','♦']
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
    updateDecks()
    for(let i = 0; i < player1cards.length;i++){
        player1cards[i].style.display = "none"
    }
    document.getElementById("deck").textContent = ""

    document.getElementById("player-2-value").textContent = ""
    document.getElementById("player-3-value").textContent = ""
    document.getElementById("player-4-value").textContent = ""
}

//if a player is said to go fish, they draw
function drawCard(inDeck){
    if (cards.length != 0){
        playerDeck[inDeck].push(cards.pop())
    }
    updateDecks()
    createReset()
}
//if a player hand is empty --> they are handed 5 cards from the deck
function emptyHand(inDeck){
    if(playerDeck[inDeck] == 0){
        for(let i = 0; i < 5; i++){
            drawCard(inDeck)
        }
    }
    updateDecks()
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
    updateDecks()
    createReset()
}

function updateDecks(){
    document.getElementById("deck").textContent = cards.length

    document.getElementById("player-2-value").textContent = playerDeck[1].length
    document.getElementById("player-3-value").textContent = playerDeck[2].length
    document.getElementById("player-4-value").textContent = playerDeck[3].length

    cardsArray();
    let x = 0;
    let y = 0;
    for(let i = 0; i < playerDeck[0].length;i++){
        player1cards[i].textContent = playerDeck[0][i]
        x = -(46*i)
        y = -(101.5*i)
        player1cards[i].style.left =""+x+"%";
        player1cards[i].style.top = `${y}%`;
        player1cards[i].style.display = "block";
    }

}
var player1cards = []
function cardsArray(){
    player1cards[0] = document.getElementById("card-1")
    player1cards[1] = document.getElementById("card-2")
    player1cards[2] = document.getElementById("card-3")
    player1cards[3] = document.getElementById("card-4")
    player1cards[4] = document.getElementById("card-5")
    player1cards[5] = document.getElementById("card-6")
    player1cards[6] = document.getElementById("card-7")
    player1cards[7] = document.getElementById("card-8")
    player1cards[8] = document.getElementById("card-9")
    player1cards[9] = document.getElementById("card-10")
    player1cards[10] = document.getElementById("card-11")
    player1cards[11] = document.getElementById("card-12")
    player1cards[12] = document.getElementById("card-13")
}

function createReset(){
    var deck = document.getElementById("deck")
    var resetButton = document.createElement("button")
    resetButton.textContent = "Reset"
    resetButton.style.backgroundColor = "purple";
    resetButton.style.width = "30%";
    resetButton.style.alignSelf = "center"
    resetButton.style.position = "relative"
    resetButton.style.top = "175%"
    resetButton.style.color = "white";
    deck.appendChild(resetButton);
    resetButton.addEventListener("click",reset)
}

function createStart(){
    
}


//there are 52 cards
//need to create an element for each card --> or use 52 images
//keep the cards centered --> how to make it so that the cards move to make sure they're centered
//need animations for that 
//need animations to show cards moving from deck to player hands
//each card should have a back and front face --> opponents hide their cards
//==> when opponents show cards, the front face will be shown
//display the wordings in the center, top left and bottom right of card

//first start with displaying cards --> getting information on the cards seems a bit easier after that
//middle deck can display how many cards are in the deck

//need a function for turns and timing
//==> since there are 4 players, index 0,1,2,3
//