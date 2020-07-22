let canvas = null;
let ctx = null;

let our_button;
start();

function start() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    our_button = document.getElementById("purple");
    our_button.style.height = "70px";
    our_button.style.width = "70px";
    our_button.style.borderRadius = "35px";
    ctx.fillStyle = "purple";
    /*for(let i=0; i<4; i++) {
        for (let j = 0; j < 3; j++) {
            ctx.beginPath();
            const x = 25 + j * 50; // x coordinate
            const y = 25 + i * 50; // y coordinate
            const radius = 20; // Arc radius
            const startAngle = 0; // Starting point on circle
            const endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
            const anticlockwise = i % 2 !== 0; // clockwise or anticlockwise

            ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

            if (i > 1) {
                ctx.fill();
            } else {
                ctx.stroke();
            }
        }
    }*/
}

function change_color(new_color) {
    console.log(new_color.toString());
    our_button.style.height = "50px";
    our_button.style.width = "50px";
    our_button.style.borderRadius = "25px";
    our_button = document.getElementById(new_color.toString());
    our_button.style.height = "70px";
    our_button.style.width = "70px";
    our_button.style.borderRadius = "35px";
    ctx.fillStyle = new_color.toString();
    console.log(new_color.toString());
}

function draw() {
    console.log(event.pageX + " " + event.pageY);
    ctx.beginPath();
    ctx.arc(event.pageX - 150, event.pageY - 111.4, 10, 0, Math.PI + (Math.PI * 2) / 2, false);
    ctx.fill();
}

function draw_begin() {
    document.addEventListener("mouseup", draw_end);
    document.addEventListener("mousemove", draw);
}

function draw_end() {
    document.removeEventListener("mouseup", draw_end);
    document.removeEventListener("mousemove", draw);
}

