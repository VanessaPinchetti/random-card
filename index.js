let pints = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q","K"];

const generateRandonPintIndex = () => {
    return Math.floor(Math.random() * pints.length);
}


let randomPint = pints[generateRandonPintIndex()];

let upPint = document.querySelector(".up-pint");
if (randomPint === "&spades;") {
    upPint.style.color = "black";
}

if (randomPint === "&clubs;") {
    upPint.style.color = "black";
}

if (randomPint === "&hearts;") {
    upPint.style.color = "red";
}

if (randomPint === "&diams;") {
    upPint.style.color = "red";
}

upPint.innerHTML = randomPint;

// the end upPint 





let downPint = document.querySelector(".down-pint");
if (randomPint == "&spades;") {
    upPint.style.color = "black";
}

if (randomPint == "&clubs;") {
    upPint.style.color = "black";
}

if (randomPint == "&hearts;") {
    downPint.style.color = "red";
}

if (randomPint == "&diams;") {
    downPint.style.color = "red";
}

downPint.innerHTML = randomPint;

// the end downPint 



// Numbers
const generateRandonNumberIndex = () => {
    return Math.floor(Math.random() * numbers.length);
}

let randomNumber = numbers[generateRandonNumberIndex()];


let number = document.querySelector(".number");
number.innerHTML = randomNumber;