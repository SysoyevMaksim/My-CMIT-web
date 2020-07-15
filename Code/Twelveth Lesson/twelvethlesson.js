let h1 = 300;
let h2 = 300;
let column1 = document.getElementById("column1");
let column2 = document.getElementById("column2");
console.log(column2);
let winnerBlock = document.getElementById("winnerBlock");
document.addEventListener("keyup", rise)

function rise(event) {
    if (event.keyCode === 87){
        h1 += 10;
        column1.style.height = h1 + "px";
    } else if (event.keyCode === 38){
        h2 += 10;
        column2.style.height = h2 + "px";
    }
    if (h1 > 550){
        document.removeEventListener("keyup", rise);
        winnerBlock.style.display = "inline";
        winnerBlock.style.left = "50px";
        winnerBlock.innerHTML = "Blue wins!";
    }
    if (h2 > 550){
        document.removeEventListener("keyup", rise);
        winnerBlock.style.display = "inline";
        winnerBlock.style.left = "200px";
        winnerBlock.innerHTML = "Red wins!";
    }
}

function newGame() {
    document.addEventListener("keyup", rise)
    h1 = 300;
    column1.style.height = h1 + "px";
    h2 = 300;
    column2.style.height = h2 + "px";
    winnerBlock.innerHTML = "";
    winnerBlock.style.display = "none";
}