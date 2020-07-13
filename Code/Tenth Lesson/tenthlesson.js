let count = 0;
let now;
let double = -1;

let is_plus = false;
let is_minus = false;
let is_multiply = false;
let is_divide = false;
let calculated = false;
let is_point = false;

function add_number(number) {
    const result = document.getElementById("result");
    if (result.value === "0"){
        result.value = "";
    }
    const result_value = result.value.toString();
    if (!is_point) {
        result.value = result_value + number;
    } else {
        result.value = result_value.substring(0, result_value.length-1) + number;
    }
    now = Number.parseFloat(result.value);
}

function delete_number() {
    const result = document.getElementById("result");
    const result_value = result.value.toString();
    result.value = result_value.substring(0, result_value.length-1);
    now = Number.parseFloat(result.value);
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

function point() {
    const result = document.getElementById("result");
   // console.log("Hello");
    const result_value = result.value.toString();
    result.value = result_value+".0";
    is_point = true;
    //now = Number.parseFloat(result.value);
}