//const slider = document.getElementById("slider");
const output = document.getElementById("result");
//const number = document.getElementById("number");
const number_text = document.getElementById("number_text");
const button = document.getElementById("generate");
const checkbox = document.getElementById("reaped");
let numbers = [];

/*function slider_function() {
    console.log(slider);
    console.log(slider.value);
    number.innerHTML = slider.value;
    if (slider.value === 1){
        number_text.innerHTML = " случайного числа";
    } else {
        number_text.innerHTML = " случайных чисел";
    }
}*/

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

$("#slider").slider({
    animate: "slow",
    range: "max",
    value: 1,
    min: 1,
    max: 50,
    slide: function (event, ui) {
        $("#number").text(ui.value);
        if (ui.value === 1) {
            number_text.innerHTML = " случайного числа";
        } else {
            number_text.innerHTML = " случайных чисел";
        }
    }
});

function button_function1() {
    button.style.background = 'url("Images/but_sm_bg.png") bottom left no-repeat';
}

function button_function2() {
    button.style.background = 'url("Images/but_sm_bg.png") top left no-repeat';
}

function generate() {
    output.innerHTML = null;
    let end;
    const selectedOption = $("input:radio[name=variant]:checked").val();
    if (selectedOption !== "из диапазона") {
        numbers = [];
        read();
    }
    if (checkbox.checked) {
        if (selectedOption === "из диапазона") {
            end = Math.min($("#slider").slider("value"), Math.abs(document.getElementById("begin").value -
                document.getElementById("end").value) + 1);
        } else {
            end = Math.min($("#slider").slider("value"), numbers.length);
        }
    } else {
        end = $("#slider").slider("value");
    }
    if (checkbox.checked) {
        let mySet = new Set();
        for (let i = 0; i < end; i++) {
            output.innerHTML += "  ";
            let output_value;
            while (mySet.has(output_value = catch_value())) ;
            mySet.add(output_value);
            output.innerHTML += output_value;
        }
    } else {
        for (let i = 0; i < end; i++) {
            output.innerHTML += "  ";
            output.innerHTML += catch_value();
        }
    }
}

function catch_value() {
    const selectedOption = $("input:radio[name=variant]:checked").val();
    if (selectedOption === "из диапазона") {
        return randomInteger(Math.min(document.getElementById("begin").value, document.getElementById("end").value),
            Math.max(document.getElementById("begin").value, document.getElementById("end").value));
    } else {
        return catch_list_value();
    }
}

function catch_list_value() {
    //console.log(numbers);
    return numbers[randomInteger(0, numbers.length - 1)];
}

function read() {
    let s = document.getElementById("our_list_value").value;
    let mySet = new Set();
    let s1 = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " " || s[i] === "," || s[i] === "\r" || s[i] === "\n" || s[i] === ".") {
            if (s1 !== "") {
                //console.log(s1);
                //console.log(Number.parseInt(s1));
                if (checkbox.checked) {
                    if (!mySet.has(Number.parseInt(s1))){
                        mySet.add(Number.parseInt(s1));
                        numbers.push(Number.parseInt(s1));
                    }
                } else {
                    numbers.push(Number.parseInt(s1));
                }
            }
            s1 = "";
        } else {
            s1 += s[i];
        }
    }
    if (checkbox.checked) {
        if (!mySet.has(Number.parseInt(s1))){
            mySet.add(Number.parseInt(s1));
            numbers.push(Number.parseInt(s1));
        }
    } else {
        numbers.push(Number.parseInt(s1));
    }
}

function display_list() {
    document.getElementById("our_range").style.display = "none";
    document.getElementById("our_list").style.display = "block";
}

function display_range() {
    document.getElementById("our_range").style.display = "block";
    document.getElementById("our_list").style.display = "none";
}