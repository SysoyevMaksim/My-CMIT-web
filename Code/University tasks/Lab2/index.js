/*
var x = "x";
var p = "\t";
var s = "\r\n";
var l = "\u2500\u2500";
var dp = "\t\t";
var sum = "\u2211";
var tot = "intotal: ";


var a = arrLab2[292];
var b = arrLab2[222];
var c = arrLab2[74];
var d = arrLab2[366];
var k = arrLab2[188];



console.log(dp+x+p+"2*x"+p+"3*x"+p+"x*x"+s+
            dp+l+l+l+l+l+l+l+l+l+l+l+l+l+l+l+l+l+s+
            dp+a+p+(2*a)+p+(3*a)+p+(a*a)+s+
           
            dp+b+p+(2*b)+p+(3*b)+p+(b*b)+s+
            
            dp+c+p+(2*c)+p+(3*c)+p+(c*c)+s+
           
            dp+d+p+(2*d)+p+(3*d)+p+(d*d)+s+
            
            dp+k+p+(2*k)+p+(3*k)+p+(k*k)+s+
            dp+l+l+l+l+l+l+l+l+l+l+l+l+l+l+l+l+l+s+

            sum+dp+

            (a+b+c+d+k)
            +p+
            ((2*a)+(2*b)+(2*c)+(2*d)+(2*k))
            +p+
            ((3*a)+(3*b)+(3*c)+(3*d)+(3*k))
            +p+
            ((a*a)+(b*b)+(c*c)+(d*d)+(k*k))+s+
            l+l+l+l+l+l+l+l+l+l+l+l+l+l+l+l+l+l+l+l+l+l+l+l+l+s+
            tot+
            (
            (a+b+c+d+k)+
            ((2*a)+(2*b)+(2*c)+(2*d)+(2*k))+
            ((3*a)+(3*b)+(3*c)+(3*d)+(3*k))+
            ((a*a)+(b*b)+(c*c)+(d*d)+(k*k))
            )
            
            );



console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(k);
*/


//var out=;

//console.log(out);

/*let white = 5, black = 1;
let s = "";
while (black < 11) {
    for (let i = 0; i < white; i++) {
        s += "\u0020";
    }
    for (let i = 0; i < black; i++) {
        s += "\u2588";
    }
    for (let i = 0; i < white; i++) {
        s += "\u0020";
    }
    s += "\r\n";
    white--;
    black += 2;
}
while (black > 0) {
    for (let i = 0; i < white; i++) {
        s += "\u0020";
    }
    for (let i = 0; i < black; i++) {
        s += "\u2588";
    }
    for (let i = 0; i < white; i++) {
        s += "\u0020";
    }
    s += "\r\n";
    white++;
    black -= 2;
}
console.log(s);*/

const t = "\t";
const s = "\r\n";
const l = "\u2500\u2500";
const dt = "\t\t";
const sum = "\u2211";
const tot = "intotal: ";


const a = arrLab2[292];
const b = arrLab2[222];
const c = arrLab2[74];
const d = arrLab2[366];
const k = arrLab2[188];

let main_s = "";


main_s += dt + dt + "x" + dt + "2 * x" + t + "3 * x" + t + "x * x" + s;
main_s += dt + dt + l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + s;
main_s += dt + dt + a + " " + t + 2 * a + t + 3 * a + t + a * a + s;
main_s += dt + dt + b + " " + t + 2 * b + t + 3 * b + t + b * b + s;
main_s += dt + dt + c + " " + t + 2 * c + t + 3 * c + t + c * c + s;
main_s += dt + dt + d + " " + t + 2 * d + dt + 3 * d + dt + d * d + s;
main_s += dt + dt + k + " " + t + 2 * k + t + 3 * k + t + k * d + s;
main_s += dt + dt + l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + s;
main_s += sum + dt + dt + (a + b + c + d + k) + t + 2 * (a + b + c + d + k) + t + 3 * (a + b + c + d + k) + t + (a * a + b * b + c * c + d * d + k * k) + s;
main_s += l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + s;
main_s += tot + ((a + b + c + d + k) + 2 * (a + b + c + d + k) + 3 * (a + b + c + d + k) + + (a * a + b * b + c * c + d * d + k * k)) + s;
console.log(main_s);