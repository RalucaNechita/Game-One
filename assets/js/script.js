document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const results = {
        'rock': { 'rock': 'Draw', 'paper': 'You Lose', 'scissors': 'You Win', 'lizard': 'You Win', 'spock': 'You Lose' },
        'paper': { 'rock': 'You Win', 'paper': 'Draw', 'scissors': 'You Lose', 'lizard': 'You Lose', 'spock': 'You Win' },
        'scissors': { 'rock': 'You Lose', 'paper': 'You Win', 'scissors': 'Draw', 'lizard': 'You Win', 'spock': 'You Lose' },
        'lizard': { 'rock': 'You Lose', 'paper': 'You Win', 'scissors': 'You Lose', 'lizard': 'Draw', 'spock': 'You Win' },
        'spock': { 'rock': 'You Win', 'paper': 'You Lose', 'scissors': 'You Win', 'lizard': 'You Lose', 'spock': 'Draw' }
    };

    let chances = 3;
    let score = 0;

    function updateChances() {
        document.getElementById('chances').textContent = `Chances left: ${chances}`;
        document.getElementById('score').textContent = `Your score: ${score}`;
        if (chances === 0) {
            document.querySelectorAll('.choices button').forEach(button => {
                button.disabled = true;
            });
            let gameOverMessage = score > 1 ? "Congratulations! You won!" : "Sorry, you lost the game.:("
            document.getElementById('game-over').textContent = gameOverMessage + "Refresh the page to play again"
            document.getElementById('game-over').style.display = 'block';
        }
    }

    document.querySelectorAll('.choices button').forEach(button => {
        button.addEventListener('click', () => {
            if (chances > 0) {
                const userChoice = button.id;
                const computerChoice = choices[Math.floor(Math.random() * choices.length)];

                document.getElementById('user-choice').textContent = `You chose: ${userChoice}`;
                document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;
                const result = results[userChoice][computerChoice];
                document.getElementById('result').textContent = `Result: ${result}`;

                if (result === 'You win') {
                    score++;
                }

                chances--;
                updateChances();
            }
        });
    });

    updateChances();
});
