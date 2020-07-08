let RandomNumber = 0;

function Random() {
    RandomNumber = Math.random();
    document.getElementById("counterLabel").innerHTML = RandomNumber;
}

function Random2() {
    const min = document.getElementById("min");
    const max = document.getElementById("max");
    const min_value = Number.parseInt(min.value);
    const max_value = Number.parseInt(max.value);
    document.getElementById("counterLabel").innerHTML = randomInteger(min_value, max_value);
}

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}