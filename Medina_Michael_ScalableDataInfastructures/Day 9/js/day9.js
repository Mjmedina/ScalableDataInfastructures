
 /*
Michael Medina
Date
Section 00
Assignment
 */

//alert("Just testing!");




                                    //LAB 8 Problems 1 and 2


var myEmail = "super@sayain.com";
var emailToF;
var returnedString;
var stringList = "a,b,c,d,e,f,g,h";
var first = ",";
var second = "/";


//Function Time
function checkEmail(argEmail)
{
     var goodEmail = false;
     var atSymbol  = argEmail.indexOf("@");
     var dotSymbol = argEmail.indexOf(".");
     var noSpaces  = argEmail.indexOf(" ");
     var lastAt    = argEmail.lastIndexOf("@");

     // Check for the @ symbol
     if (atSymbol === lastAt && atSymbol != -1)
     {
         goodEmail = true;
     } else {
         return false;
     }


     if ( dotSymbol > -1 && dotSymbol > atSymbol)
     {
         goodEmail = true;
     } else {
         return false;
     }


     if (noSpaces == -1)
     {
         goodEmail = true;
     } else{
         goodEmail = false;

     }

     return goodEmail;

}

//PROBLEM 2
//Split a string at a specified separator and replace it with a new separator.
//function stringSep(oldString, firstStep, newSep)
//{
//     var newString = "";
//
//
//
//     for (var i = 0; i < oldString.length; i++) {
//
//         oldString = oldString.replace(",", "/");
//
//         console.log(oldString);
//     }
//
//     return oldString;
//}


//Function Calls for Problem 1

emailToF = checkEmail(myEmail);
console.log("It is " + emailToF + " that this email is valid.");

//Calls the PROBLEM 2 Function
//returnedString = stringSep(stringList, first, second);
//console.log("The new string is "+ returnedString);






                                        //MATH METHODS
//.abs: Returns absolute value.

//.min: Returns the number with lowest value.

//.max: Returns the number with highest value.

//.ceil: Returns x rounded up to nearest integer.

//.floor: Returns x rounded down to nearest integer.

//.round: Rounds up only if decimal is.5 or greater. Otherwise it rounds down.



//.random: Will return a random floating point number between 1 and 0.
    // When RANDOM:   Math.random() * (max -min) + min

function mathMethods(max, min)
{
    var myRandom = Math.floor(Math.random() * (max - min) + min);

    console.log(myRandom)
}

mathMethods(50, 10);



 //.isNaN: Checks to see if the value passed is a number. False for numbers. True if not.
 // var myReturn = Number.isNaN(value)
 // var myReturn = isNaN (value)

function methodMath(argPrompt)
{
    while (isNaN(argPrompt))
    {
        argPrompt = prompt("Enter a phone number please: ")

    }
    var newAge = parseInt(argPrompt);
        console.log(newAge);


}
var myPrompt = prompt("Enter your phone number");

methodMath(myPrompt);






 //DATE OBJECT: Use the Date as a constructor to create Date objects
    //var myReturn = new Date(value)
    //var myReturn = new Date(year, month, day)
        //[,hours, minute, second, millisecond]

 function goodDate()
 {
     var myDate = "5/23/2016";
     var secondDate = new Date(myDate);

     console.log(myDate);

     var newDate = new Date(2015, 4, 23);


     console.log(newDate);
     console.log(secondDate);

     dateDiff = newDate - secondDate;

     //To convert to Days divide by milliseconds, seconds, minutes, hours.
     //Use .abs for absolute value
     dateDiff = Math.abs(dateDiff / 1000 / 60 / 60 / 24);

     console.log(dateDiff);

 }


 goodDate();




                                   //DATE METHODS

 //.getDate(): Returns the day of the month
 //.getDay(): returns the day of the week as an integer
 //.getMonth() Returns the months as an integer
 //.getFullYear(): Returns full year as 4-digit number
 //.toDateString(): Returns the full date as human-readable