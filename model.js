// with boardModel[columnIndex-][rowIndex]
let boardModel = []

function createDiscInModel(currentPlayer, columnElement) {
    const columnIndex = Number(columnElement.dataset.column);
    const rowIndex = columnElement.childElementCount
    boardModel[columnIndex][rowIndex] = currentPlayer;
}

function initModel() {
    boardModel = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ]
}

