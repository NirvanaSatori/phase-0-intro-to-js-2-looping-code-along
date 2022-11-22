// Code your solutions in this file
const cards = ["John", "Jane", "Mary", "Joseph"];

function writeCards () {
    for ( let i = 0; i < cards.length; i++){
    console.log (`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    
    }
    return [...cards];

};
const sentCards = writeCards(cards);

function countDown() {
    let count = 11;
    while (count > 0){
    count--;
    console.log(count);
}
};

