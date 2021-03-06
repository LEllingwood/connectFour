// the four lines below establish the first function--telling the computer to listen for clicks.  view only.
function askAllColumnsToListenForClick() {
    const columnElements = document.getElementsByClassName("column");
    // for (let columnIndex = 0; columnIndex < columnElements.length; columnIndex++)
    //   const columnElement = columns[columnIndex] looping over the array-like thing that get class elements by name returns.  essentially the same as 
    for (let columnElement of columnElements) {
        columnElement.addEventListener("click", whenTheUserClicks);
    }
}

function createDiscInView(currentPlayer, columnElement) {
    const discElement = document.createElement("div");
    discElement.classList.add("disc", currentPlayer);
    columnElement.appendChild(discElement);
}


// lines below establish a "refresh" of the page. needs some visual formatting
function initView() {
    askAllColumnsToListenForClick()
    document.getElementById("refresh").addEventListener("click", function () {
        window.top.location.reload();
    })
}

function addWinMessage() {
    const message = document.createTextNode("You win! For now...");
    const newP = document.createElement("p");
    const destination = document.getElementById("winMessage");
    newP.appendChild(message);
    destination.appendChild(newP);
}