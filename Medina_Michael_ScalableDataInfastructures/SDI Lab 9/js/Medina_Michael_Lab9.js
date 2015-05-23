//Michael Medina
// 5/23/2015
// SDI Lab 8
// Section: 00


// alert("JavaScript works!");



//Problem 1

//Create a function
function deciFix()
{
    var num = parseInt(prompt("Please enter the number you wish to fix: "));
    var dec = parseInt(prompt("Please enter the number of decimal places: "));
    var fix = (num);

    console.log(fix.toFixed(dec));

}

deciFix();





//Problem 2


var t= "Four";

function changeNum(theNum)

{


    if (theNum === "Four")
    {
        console.log(4);
    }


}

changeNum(t);






////Problem 3
function goodDate()
{
    var myDate = "5/23/2016";
    var secondDate = new Date(myDate);

    console.log(myDate);

    var newDate = new Date(2015, 4, 23);


