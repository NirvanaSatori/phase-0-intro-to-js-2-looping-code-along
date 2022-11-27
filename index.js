// Code your solutions in this file
const cards = ["John", "Jane", "Mary", "Joseph"];

function writeCards (cards, eventName="suprise") {
    let sentCards = [];  //new array
    for ( let i = 0; i < cards.length; i++){
    let message= `Thank you, ${cards[i]}, for the wonderful ${eventName} gift!`;
    //console.log (cards);
    sentCards.push(message);
    }
    return sentCards;
   
};

function countDown() {
    let count = 11;
    while (count > 0){
    count--;
    console.log(count);
}
};

