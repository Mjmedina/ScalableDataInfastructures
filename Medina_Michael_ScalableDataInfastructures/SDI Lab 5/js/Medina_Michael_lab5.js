//alert("JavaScript works!");

function addNumbers (a, b)
{
    return a += b;
}

function subNumbers (a, b)
{
    return a -= b;
}
function multNumbers (a, b)
{
    return a *= b;
}


function divNumbers (a, b){
    while (a=== 0 || b=== 0) {

        console.log ("Enter new values that aren't 0 when dividing.");
        a = parseInt(prompt("Please insert the first number"));
        b = parseInt(prompt("Please insert the second number"));
    }  return a /= b;



}

var firstNum = parseInt(prompt("Please insert the first number"));
var secondNum = parseInt(prompt("Please insert the second number"));
var operation = "0";

while (operation != "+" && operation != "-" && operation != "*" && operation != "/")
{
    operation = prompt("Please enter an operator.");
} if (operation === "+"){
    var final = addNumbers(firstNum, secondNum)
} else if (operation === "-"){
    var final = subNumbers(firstNum, secondNum)
} else if (operation === "*"){
    var final = multNumbers(firstNum, secondNum)
} else if (operation === "/"){
    var final = divNumbers(firstNum, secondNum)
} else {
    console.log("This is not what i asked for. ")
}

console.log (firstNum +" " + operation + " " + secondNum + " = "+ final);

