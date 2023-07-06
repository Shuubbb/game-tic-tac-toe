const gameBoard = document.querySelector('#gameBoard');
const infoDisplay = document.querySelector('#info');
console.log(infoDisplay);
console.log(gameBoard);

const startCells = ["", "", "", "", "", "", "", "", ""]

let go = "circle";
infoDisplay.textContent = "circle goes first"

function createBoard() {
    startCells.forEach((cell, index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square');
        cellElement.id = index;
        gameBoard.append(cellElement);
        cellElement.addEventListener("click", addGo)
    });

}
createBoard();

function addGo(e) {
    const gameDisplay = document.createElement('div')
    gameDisplay.classList.add(go)
    e.target.append(gameDisplay)
    go = go === "circle" ? "cross" : "circle"
    infoDisplay.textContent = " It's now " + go + "' turn.";
    e.target.removeEventListener("click", addGo);
    checkScore()
}

function checkScore() {
    const allSquares = document.querySelectorAll(".square")
    const winningCombo = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    winningCombo.forEach(array => {
        const circleWins = array.every(cell => 
            allSquares[cell].firstChild?.classList.contains('circle'))

        if (circleWins) {
            infoDisplay.textContent="circle wins !"
            allSquares.forEach(squares => squares.replaceWith(square.cloneNode(true)))
            return
        }
    })


    winningCombo.forEach(array => {
        const crossWins = array.every(cell => 
            allSquares[cell].firstChild?.classList.contains('cross'))

        if (crossWins) {
            infoDisplay.textContent="cross wins !"
            allSquares.forEach(squares => squares.replaceWith(square.cloneNode(true)))
            return
        }
    })




}