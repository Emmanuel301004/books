const ans = document.querySelector('#search-Bar');
const htmlCard = document.querySelector('#html');
const cssCard = document.querySelector('#css');
const jsCard = document.querySelector('#js');
const gitCard = document.querySelector('#git');
const networkCard = document.querySelector('#network');
const ssGeneratorCard = document.querySelector('#ss-generator');
const logoGeneratorCard = document.querySelector('#logo-generator');
const qrGeneratorCard = document.querySelector('#qr-generator');
const webSsEnhancerCard = document.querySelector('#web-ss-enhancer');
const cssComponentsCard = document.querySelector('#css-components');
const bannerCard = document.querySelector('#banner');
const animationCard = document.querySelector('#animation');
const mockupCard = document.querySelector('#mockup');
const freepikCard = document.querySelector('#freepik');

function info() {
    const searchValue = ans.value.toLowerCase();
    let foundCard = null;
    let cardTitle = '';

    if (searchValue === "html") {
        foundCard = htmlCard;
        cardTitle = 'HTML';
    } else if (searchValue === "css") {
        foundCard = cssCard;
        cardTitle = 'CSS';
    } else if (searchValue === "javascript" || searchValue === "js") {
        foundCard = jsCard;
        cardTitle = 'JAVASCRIPT';
    } else if (searchValue === "git" || searchValue === "github") {
        foundCard = gitCard;
        cardTitle = 'GITHUB';
    } else if (searchValue === "network" || searchValue === "networking") {
        foundCard = networkCard;
        cardTitle = 'NETWORKING';
    } else if (searchValue === "ss generator" || searchValue === "screenshot generator") {
        foundCard = ssGeneratorCard;
        cardTitle = 'WEB SS GENERATOR';
    } else if (searchValue === "logo generator") {
        foundCard = logoGeneratorCard;
        cardTitle = 'LOGO GENERATOR';
    } else if (searchValue === "qr generator") {
        foundCard = qrGeneratorCard;
        cardTitle = 'QR GENERATOR';
    } else if (searchValue === "web ss enhancer") {
        foundCard = webSsEnhancerCard;
        cardTitle = 'WEB SS ENHANCER';
    } else if (searchValue === "css components") {
        foundCard = cssComponentsCard;
        cardTitle = 'CSS COMPONENTS';
    } else if (searchValue === "banner") {
        foundCard = bannerCard;
        cardTitle = 'BANNER';
    } else if (searchValue === "animation") {
        foundCard = animationCard;
        cardTitle = 'ANIMATION';
    } else if (searchValue === "mockup") {
        foundCard = mockupCard;
        cardTitle = 'MOCKUP';
    } else if (searchValue === "freepik") {
        foundCard = freepikCard;
        cardTitle = 'FREEPIK';
    } else {
        alert("No match found.");
        return;
    }

    if (foundCard) {
        allCards.forEach(card => {
            if (card === foundCard) {
                card.style.visibility = 'visible';
            } else {
                card.style.visibility = 'hidden';
                card.style.display = 'none';
            }
        });
        ans.value = cardTitle;
    }
}

const allCards = document.querySelectorAll('.card, .card1');

allCards.forEach(card => {
    card.addEventListener('click', () => {
        ans.value = card.querySelector('.tip').innerText;
        info();
    });
});
