//confirmation that JS file is working
console.log("Up and running!");

//cards objects in cards array
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
}
]

//cards. being played storage array
const cardsInPlay = [];

//function to confirm whether the two flipped cards are a match or not
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");}
}
//function that ""
function flipCard(cardId){
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped" + " " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suite);
	checkForMatch();
	}

//calling the flipCard function here
flipCard(0);
flipCard(1);