//  the model is looking at this as if the column is a row, why is the click putting the disc at the bottom of the player view? I'm guessing code starting at line 42...
let currentPlayer;

function initGame() {
    initModel()
    initView()
    currentPlayer = "red"
}

function togglePlaya() {
    if (currentPlayer === "red") {
        currentPlayer = "black";
    } else {
        currentPlayer = "red";
    }
}

// the six lines below tell the computer what to do when the user clicks on a column(columnEvent? columnIndex?)
function whenTheUserClicks(clickEvent) {
    const columnElement = clickEvent.currentTarget;
    if (columnElement.childElementCount >= 6) return;
    // return will trigger the computer to stop executing the function
    dropDisc(columnElement);
    checkWin();
    togglePlaya();
}


// the 7 lines below tell the computer how to drop a disc--the first four lines make changes to the DOM; the second three make changes to the players view.
function dropDisc(columnElement) {
    createDiscInModel(currentPlayer, columnElement)
    createDiscInView(currentPlayer, columnElement)

}

// the functions below check for a win:
function checkWin() {
    if (
        searchForFourConsecutiveDiscs(horizontally) 
        || searchForFourConsecutiveDiscs(vertically) 
        || searchForFourConsecutiveDiscs(diagonallyUpRight)
        || searchForFourConsecutiveDiscs(diagonallyUpLeft)
    ) {
        addWinMessage();
    }
}

//  set edge of board: 
function searchForFourConsecutiveDiscs(searchFunction) {
    console.log(boardModel)
    const columnEdge = boardModel.length - 3;
    for (let columnIndex = 0; columnIndex < columnEdge; columnIndex++) {
        const column = boardModel[columnIndex];
        const rowEdge = column.length - 3; /* 4 */
        for (let rowIndex = 0; rowIndex < rowEdge; rowIndex++) {
            let cell = boardModel[columnIndex][rowIndex];
            if (cell !== 0) {
                const matchFound = searchFunction(cell, columnIndex, rowIndex);
                if (matchFound) return true;
            }
        }
    }

    return false;
}

function horizontally(cell, columnIndex, rowIndex) {
    if (cell === boardModel[columnIndex + 1][rowIndex] && cell === boardModel[columnIndex + 2][rowIndex] && cell === boardModel[columnIndex + 3][rowIndex]) {
        console.log("4 in a row at " + columnIndex + ":" + rowIndex)
        return true;
    }

    return false;
}

function vertically(cell, columnIndex, rowIndex) {
    if (cell === boardModel[columnIndex][rowIndex + 1] && cell === boardModel[columnIndex][rowIndex + 2] && cell === boardModel[columnIndex][rowIndex + 3]) {
        console.log("4 in a row vertically found at " + rowIndex + ":" + columnIndex)
        return true;
    }

    return false;
}

function diagonallyUpRight(cell, columnIndex, rowIndex) {
    if (cell === boardModel[columnIndex + 1][rowIndex + 1] && cell === boardModel[columnIndex + 2][rowIndex + 2] && cell === boardModel[columnIndex + 3][rowIndex + 3]) {
        console.log("4 in a row " + (columnIndex + 1) + ":" + (rowIndex + 1))
        return true;
    }
    return false;
}

function diagonallyUpLeft(cell, columnIndex, rowIndex ) {
if (cell === boardModel[columnIndex + 1][rowIndex - 1] && cell === boardModel[columnIndex + 2][rowIndex - 2] && cell === boardModel[columnIndex + 3][rowIndex - 3]) {
    console.log("4 in a row up-left found at " + (columnIndex + 1) + ":" + (rowIndex + 1))
    return true;
    }
return false;
}