//Michael Medina
//5/28/2015
//Term: May '15
//SDI 1505 Lab: 00


//                                         PRACTICAL EXAM

//alert("JavaScript works!");




//CORRECT PHONE NUMBER FORMAT (954)555-5555

function realDigits(p) {
    var t = parseInt(prompt("Please enter phone number:"));
    var hyphen = "-";
    var initial = (p[t]);
    var validNum = false;

    if (typeof p === 'string' || (p.length < 9 || p.length > 11)
        || !(initial === '0'
        || initial === '3'))

        return false;


    if (hyphen > -1) {
         validNum = true;
    } else {
        return false;
    }
    return validNum;


    if (t && !realDigits(t)) {
        console.log("That is a valid phone number!");
    } else {
        console.log("No I'm sorry that isn't correct");


    }
}
realDigits();
console.log("The number "+realDigits+"is valid!");
