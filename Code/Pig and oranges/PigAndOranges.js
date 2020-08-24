let count = 0;
let time = 30;

document.getElementsByTagName("body")[0].insertAdjacentHTML
('beforeend', '<img src="Images/orange.png" alt="Orange" id="orange">')
let orange = document.getElementById("orange");
orange.style.position = "fixed";

spawnOrange();

function spawnOrange(){
    orange.style.left = Math.random() * (window.innerWidth - 128) + "px";
    orange.style.top = Math.random() * (window.innerHeight - 128) + "px";
}

document.getElementsByTagName("body")[0].insertAdjacentHTML
('beforeend', '<img src="Images/pig.png" alt="Pig" id="pig">');
let pig = document.getElementById("pig");
pig.style.position = "fixed";

const mouseListener = function (event) {
    mouseMoveFunc(event)
};

document.addEventListener('mousemove', mouseListener);

function mouseMoveFunc(event){
    pig.style.left = event.pageX - 64 + "px";
    pig.style.top = event.pageY - 64 + "px";
    checkCollision();
}

function checkCollision(){
    if (Math.sqrt(Math.pow(pig.offsetLeft - orange.offsetLeft, 2)
        + Math.pow(pig.offsetTop - orange.offsetTop, 2)) < 128)
    {
        spawnOrange();
        count++;
        document.getElementById("result").innerHTML = count;
    }
}

let intervalId = setInterval(onTime,1000);

function onTime(){
    time--;
    document.getElementById("time").innerHTML = time;
    if (time === 0){
        document.removeEventListener('mousemove', mouseListener);
        clearInterval(intervalId);
    }
}