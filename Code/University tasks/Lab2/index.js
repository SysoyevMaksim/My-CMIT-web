
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


/*
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(k);
*/



//var out=;

//console.log(out);