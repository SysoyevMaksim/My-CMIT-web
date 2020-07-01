var counter = 0;

function Alerts() {
    alert("Alert1");
    alert("Alert2");
}

function plusOne() {
    counter++;
    document.getElementById("counterLabel").innerHTML = counter;
}

function minusOne() {
    counter--;
    document.getElementById("counterLabel").innerHTML = counter;
}

function plusFive() {
    counter += 5;
    document.getElementById("counterLabel").innerHTML = counter;
}

function minusFive() {
    counter -= 5;
    document.getElementById("counterLabel").innerHTML = counter;
}