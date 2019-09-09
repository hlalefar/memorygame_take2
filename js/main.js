console.log("Up and running!");
//objects
const cards = [
{
rank: 'queen',
suite: 'hearts',
cardImage: "images/queen-of-hearts.png"
},
{
rank: 'queen',
suite: 'diamonds',
cardImage: "images/queen-of-diamonds.png"
},
{
rank: 'king',
suite: 'hearts',
cardImage: "images/king-of-hearts.png"
},
{
rank: 'king',
suite: 'diamonds',
cardImage: "images/king-of-diamonds.png"
},
]
const cardsInPlay = [];

function flipCard() {
this.getAttribute('dataID');
console.log("User flipped " + cards[cardId].rank)
};

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
};

cardsInPlay.push(cards[cardId]);
//create board function
function createBoard() {
	for (var i = 0; i < arrayName.length; i++) 
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
  	cardElement.setAttribute('dataID', i);
  	cardElement.addEventListener('click', flipCard);
  	cardElement.appendChild(game-board);
};
createBoard();