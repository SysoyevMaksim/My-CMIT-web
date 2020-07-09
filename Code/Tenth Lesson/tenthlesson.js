let count = 0;
let now;

let is_plus = false;
let is_minus = false;
let is_multiply = false;
let is_divide = false;
let calculated = false;

function add_number(number) {
    const result = document.getElementById("result");
    if (result.value === ""){
        result.value = "0";
    }
    const result_value = Number.parseInt(result.value);
    result.value = result_value * 10 + Number.parseInt(number);
    now = result_value * 10 + Number.parseInt(number);
}

function delete_number() {
    const result = document.getElementById("result");
    const result_value = Number.parseInt(result.value);
    result.value = Math.floor(result_value / 10);
    now = Math.floor(result_value / 10);
}

function calculate() {
    const result = document.getElementById("result");
    console.log(result.value);
    console.log(count);
    console.log(now);
    console.log(":");
    if (count !== 0) {
        if (is_plus){
            count += now;
        }
        if (is_minus){
            count -= now;
        }
        if (is_multiply){
            count *= now;
        }
        if (is_divide){
            count /= now;
        }
        result.value = count;
        now = count;
    } else {
        result.value = now;
    }
    console.log(result.value);
    console.log(count);
    console.log(now);
    console.log(";");
    calculated = true;
}

function plus() {
    if (!calculated) {
        calculate();
    }
    count = now;
    now = 0;
    is_divide = false;
    is_minus = false;
    is_multiply = false;
    is_plus = true;
    zero();
    calculated = false;
}

function minus() {
    if (!calculated) {
        calculate();
    }
    count = now;
    now = 0;
    is_divide = false;
    is_minus = true;
    is_multiply = false;
    is_plus = false;
    zero();
    calculated = false;
}

function divide() {
    if (!calculated) {
        calculate();
    }
    count = now;
    now = 0;
    is_divide = true;
    is_minus = false;
    is_multiply = false;
    is_plus = false;
    zero();
    calculated = false;
}

function multiply() {
    if (!calculated) {
        calculate();
    }
    count = now;
    now = 0;
    is_divide = false;
    is_minus = false;
    is_multiply = true;
    is_plus = false;
    zero();
    calculated = false;
}

function zero() {
    const result = document.getElementById("result");
    result.value = 0;
}