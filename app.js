cards = [
    '6011000011112222',
    '333300000000000',
    '5467999988887777',
    '4098555544443333',
    '40341111222244444',
    '347888999000234',
    '374222333111890',
    '5690333366669999',
    '6012999966663333'
]

const visaRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
const mcRegex = /^(?:5[1-5][0-9]{14})$/;
const aeRegex = /^(?:3[47][0-9]{13})$/;
const discRegex = /6011\d{12}/;
var cardType;

function validateCreditCardNumber(ccNum) {
    var isValid = false;
    if (visaRegex.test(ccNum)) {
        cardType = "VISA";
        isValid = true;
    } else if (mcRegex.test(ccNum)) {
        cardType = "MasterCard";
        isValid = true;
    } else if (aeRegex.test(ccNum)) {
        cardType = "American Express";
        isValid = true;
    } else if (discRegex.test(ccNum)) {
        cardType = "Discover";
        isValid = true;
    }

    if (isValid) {
        return "Valid " + cardType + " card"
    } else {
        return "Invalid credit card number"
    }
}

function checkCardNumbers() {
    var validCard;
    for (i = 0; i < cards.length; i++) {
        validCard = validateCreditCardNumber(cards[i]);
        console.log(validCard);
    }
}

checkCardNumbers();