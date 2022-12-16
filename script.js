//Variables for wins and losses
var win = 0;
var loss = 0;
var draw = 0;
var rounds = 0;

//Create an array including "Rock", "Paper", "Scissors"
var weapons = ["R", "P", "S"];

//Welcomes user to game!
alert("Let's play Rock, Paper, Scissors!");

//Make the code into a function that we can call upon again
function playGame() {

//Prompt user to choose rock paper or scissors
var weaponChoice = prompt("Type r, p or s to choose rock, paper or scissors");

//Converts the user's input letter into the full weapon name, to look better on the alert
switch (weaponChoice.charAt(0)) {
    case "r" || "R":
        weaponChoice = "rock";
        break;
    case "p" || "P":
        weaponChoice = "paper";
        break;
    case "s" || "S":
        weaponChoice = "scissors";
        break;
    //If user accidentally inputs a wrong letter, the round will not count
    default: 
        alert("Huh? You should only type r, p, or s.");
        rounds--;

}

//Computer makes a random choice from the array
//using Math.random(0)
var computerChoice = weapons[Math.floor(Math.random() * weapons.length)];

//Converts the computer's choice to full weapon name, to look better on the alert
switch (computerChoice) {
    case "R":
        computerChoice = "rock";
        break;
    case "P":
        computerChoice = "paper";
        break;
    case "S":
        computerChoice = "scissors";
        break;
}

//Alert user what the choices were
alert("You chose " + weaponChoice + " and the computer chose " + computerChoice);

//if else statement checks the choices against each other
//Alert user if they win/lose/draw
if (weaponChoice === computerChoice) {
    alert("It's a draw!");
    draw++;
}
else if (weaponChoice === "rock" && computerChoice === "scissors") {
    alert("You win!");
    win++;
}
else if (weaponChoice === "rock" && computerChoice === "paper") {
    alert("You lose!");
    loss++;
}
else if (weaponChoice === "paper" && computerChoice === "scissors") {
    alert("You lose!");
    loss++;
}
else if (weaponChoice === "paper" && computerChoice === "rock") {
    alert("You win!");
    win++;
}
else if (weaponChoice === "scissors" && computerChoice === "rock") {
    alert("You lose!");
    loss++;
}
else if (weaponChoice === "scissors" && computerChoice === "paper") {
    alert("You win!");
    win++;
}

}
//Starts the first round
playGame();

//Ask user to play again
var playAgain = confirm("Would you like to play again?");

//If they want to play again and they have played less than 9 rounds, another round is triggered
for (rounds = 1; rounds < 9 && playAgain === true; rounds++) {
    playGame();
    var playAgain = confirm("Would you like to play again?");
}
//If they are on the 9th round and want to play again, the last round is triggered, after which the scores are displayed
if (rounds === 9 && playAgain === true) {
    playGame();
    alert("Thanks for playing! You won " + win + " times, lost " + loss + " times, and drew " + draw + " times.");
}

//Results will also show in the console log in case user wants to see it again
console.log("You have won " + win + " times");
console.log("You have lost " + loss + " times");
console.log("You have drawn " + draw + " times");