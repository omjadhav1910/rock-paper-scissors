var userChoice = document.getElementById("user-choice");
var randomImage = document.getElementById("random-image");
var score1 = 0;
var score2 = 0;



//function to make buttons dynamic
document.addEventListener('click', (event) => {
    if (event.target.id == "rock") {
        setUserChoiceImage('./assets/rock-hand.png');
    } else if (event.target.id == "paper") {
        setUserChoiceImage('./assets/paper-hand.png');
    } else if (event.target.id == "scissor") {
        setUserChoiceImage('./assets/scissors-hand.png');
    }
    displayRandomImage();
    compareScore();
});

function getRandomNum(max) {
    return Math.floor(Math.random() * (max + 1));
}

const ImageArray = ['./assets/rock-hand.png', './assets/paper-hand.png', './assets/scissors-hand.png'];



//Function for computer image
function displayRandomImage() {
    let randomImageSrc = getRandomNum(2);
    randomImage.innerHTML = `<img src="${ImageArray[randomImageSrc]}" alt="Random Image">`;
}


//Function for user image
function setUserChoiceImage(imageSrc) {
    let userImage = document.createElement('img');
    userImage.src = imageSrc;
    userChoice.innerHTML = '';
    userChoice.appendChild(userImage);
}


//Function to Compare score
function compareScore() {
    let pcImageSrc = randomImage.firstElementChild.src;
    let userImageSrc = userChoice.firstElementChild.src;

    if (score1 == 5 || score2 == 5) {
        resetGame();
    } else if (userImageSrc === pcImageSrc) {
        console.log("It's a Draw");
    } else if (
        (userImageSrc.includes('rock') && pcImageSrc.includes('scissors')) ||
        (userImageSrc.includes('paper') && pcImageSrc.includes('rock')) ||
        (userImageSrc.includes('scissors') && pcImageSrc.includes('paper'))
    ) {
        score1++;
        updateScore();
        popup(win);
    } else {
        score2++;
        updateScore();
        popup(lose);
    }
}


//Function to update score
function updateScore() {
    let userScoreDisplay = document.getElementById("user-score");
    let pcScoreDisplay = document.getElementById("pc-score");
    userScoreDisplay.innerHTML = score1;
    pcScoreDisplay.innerHTML = score2;
}


//Function to display popup

var win = document.getElementById("you-win")
var lose = document.getElementById("you-lose")

function popup(result) {
    if (score1 == 5 || score2 == 5) {
        result.style.display = "block";
    }
}


//Function Reset Game
function resetGame() {
    if (score1 === 5 || score2 === 5) {
        window.location.reload();
    }
}


//Function to Play Again
var playAgain = document.getElementById("play-again");
playAgain.addEventListener('click', () => {
    window.location.reload();
});


