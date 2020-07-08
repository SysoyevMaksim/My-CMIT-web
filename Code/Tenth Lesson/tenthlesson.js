let count = 0;
let now;

let is_plus = false;
let is_minus = false;
let is_multiply = false;
let is_divide = false;

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
}

function plus() {
    calculate();
    count = now;
    now = 0;
    is_divide = false;
    is_minus = false;
    is_multiply = false;
    is_plus = true;
    zero();
}

function minus() {
    calculate();
    count = now;
    now = 0;
    is_divide = false;
    is_minus = true;
    is_multiply = false;
    is_plus = false;
    zero();
}

function divide() {
    calculate();
    count = now;
    now = 0;
    is_divide = true;
    is_minus = false;
    is_multiply = false;
    is_plus = false;
    zero();
}

function multiply() {
    calculate();
    count = now;
    now = 0;
    is_divide = false;
    is_minus = false;
    is_multiply = true;
    is_plus = false;
    zero();
}

function zero() {
    const result = document.getElementById("result");
    result.value = 0;
}