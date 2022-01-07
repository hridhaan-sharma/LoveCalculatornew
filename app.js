
var first = prompt("Write your name here");
var second = prompt ("Write their name here");

var lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore) + 1;
if (first === second) {    


 document.write( " Love Score Calculator -  The name's can't be same ");

}else{


if (lovescore > 70) {
    document.write("  Love Score Calculator -   Your love score is " + lovescore + "%" +  " , Your love is like a Mother and a Baby ");

}

if (lovescore > 30 && lovescore < 70) {
    document.write("  Love Score Calculator -  Your love score is " + lovescore + "%");

}

if ( 30 >= lovescore  ) {
    document.write("   Love Score Calculator -  Your lovescore is " + lovescore + "%" + "Your love is like oil and water.")
}
}
