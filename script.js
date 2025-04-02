    document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll(".patrate");
    const statusText = document.createElement("h2");
    const resetButton = document.createElement("button");
    let currentPlayer = "X";
    
    statusText.textContent = `Este rândul lui ${currentPlayer}`;
    resetButton.textContent = "Resetează jocul";
    document.body.insertBefore(statusText, document.querySelector(".gameScreen"));
    document.body.appendChild(resetButton);
    
    squares.forEach(square => {
        square.textContent = ""; // Golim casetele la început
        square.addEventListener("click", () => {
            if (square.textContent === "") {
                square.textContent = currentPlayer;
                checkWinner();
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                statusText.textContent = `Este rândul lui ${currentPlayer}`;
            }
        });
    });
    
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linii
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Coloane
            [0, 4, 8], [2, 4, 6]            // Diagonale
        ];
        
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (squares[a].textContent && squares[a].textContent === squares[b].textContent && squares[a].textContent === squares[c].textContent) {
                alert(`Jucătorul ${squares[a].textContent} a câștigat!`);
                resetGame();
                return;
            }
        }
        
        if ([...squares].every(square => square.textContent !== "")) {
            alert("Egalitate!");
            resetGame();
        }
    }
    
    function resetGame() {
        squares.forEach(square => square.textContent = "");
        currentPlayer = "X";
        statusText.textContent = `Este rândul lui ${currentPlayer}`;
    }
    
    resetButton.addEventListener("click", resetGame);
});

