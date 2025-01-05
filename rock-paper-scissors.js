// Let the computer choose randomly
function getComputerChoice(choice) {
    let selection;

    if (0 <= choice && choice < 0.33) {
        selection = 'rock';
    } else if (0.33 <= choice && choice < 0.66) {
        selection = 'paper';
    } else {
        selection = 'scissors';
    }
    return selection;
}

// Get the input of the human
function getHumanChoice() {
    let human_choice = prompt('rock/paper/scissors?');
    return human_choice.toLowerCase(); // Ensure case-insensitivity
}

// Create a single game
function playRound(selection, human_choice, scores) {
    // All wins
    if (human_choice === 'rock' && selection === 'scissors') {
        alert('You win! Rock beats Scissors!');
        scores.human_score += 1;
    } else if (human_choice === 'paper' && selection === 'rock') {
        alert('You win! Paper beats Rock!');
        scores.human_score += 1;
    } else if (human_choice === 'scissors' && selection === 'paper') {
        alert('You win! Scissors beats Paper!');
        scores.human_score += 1;
    }
    // All losses
    else if (human_choice === 'scissors' && selection === 'rock') {
        alert('You lose! Rock beats Scissors!');
        scores.computer_score += 1;
    } else if (human_choice === 'paper' && selection === 'scissors') {
        alert('You lose! Scissors beats Paper!');
        scores.computer_score += 1;
    } else if (human_choice === 'rock' && selection === 'paper') {
        alert('You lose! Paper beats Rock!');
        scores.computer_score += 1;
    } 
    // Tie
    else if (human_choice === selection) {
        alert("It's a tie!");
    } else {
        alert("Invalid input. Please choose 'rock', 'paper', or 'scissors'.");
    }
}

// Main game function
function playGame() {
    let scores = {
        human_score: 0,
        computer_score: 0
    };

    for (let i = 0; i < 5; i++) {
        let choice = Math.random();
        let computerChoice = getComputerChoice(choice);
        let humanChoice = getHumanChoice();
        
        if (!['rock', 'paper', 'scissors'].includes(humanChoice)) {
            alert("Invalid choice. Skipping this round.");
            continue;
        }

        playRound(computerChoice, humanChoice, scores);
    }

    alert(`Game over! The computer has won ${scores.computer_score} times; you have won ${scores.human_score} times.`);
    console.log(`The computer has won ${scores.computer_score} times; you have won ${scores.human_score} times.`);
}

// Start the game
playGame();
