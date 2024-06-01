const ans = document.querySelector('#search-Bar');
const htmlCard = document.querySelector('#html');
const cssCard = document.querySelector('#css');
const allCards = document.querySelectorAll('.card');

function info() {
    if (ans.value.toLowerCase() === "html") {
        // Show HTML card
        htmlCard.style.visibility = 'visible';
        // Hide all other cards
        allCards.forEach(card => {
            if (card !== htmlCard) {
                card.style.visibility = 'hidden';
                card.style.display = 'none';
                
            }
        });
    } else if (ans.value.toLowerCase() === "css") {
        // Show HTML card
        cssCard.style.visibility = 'visible';
        // Hide all other cards
        allCards.forEach(card => {
            if (card !== cssCard) {
                card.style.visibility = 'hidden';
                card.style.display = 'none';
            }
        });
    } 
}

