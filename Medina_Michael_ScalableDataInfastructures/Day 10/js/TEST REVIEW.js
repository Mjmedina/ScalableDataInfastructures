
 /*
Michael Medina
Date
Section 00
Assignment
 */

//alert("Just testing!");



//Create a function to find the difference between two years
 //Global Variables
//var returnedNumber;
//
//
// //Functions
// function yearsBetween()
// {
//     //local variable
//     var yearEntered = parseInt(prompt("What year would you like to use?"));
//     var today = new Date();
//     today = today.getFullYear();
//     var difference = today - yearEntered;
//     return difference;
//
//
// }
//
//
//
// //Main Code
// returnedNumber = yearsBetween();
// console.log("The difference in years is "+ returnedNumber);


 var numArray = [3, 6, 7, 9, 23, 42, 22, 50];
 var currentNum = 21;
 var returnedNum;

 function findNumber (argArray, argNumber)
 {
     var nextGreatest = 0;
     argArray = argArray.sort();
     console.log(argArray);

     for (var i=0; i<argArray.length; i++)
     {
         if (argNumber < argArray[i])
         {
             return argArray[i];

         }


     }
     return nextGreatest;

 }

 returnedNum = findNumber(numArray, currentNum);
 console.log(returnedNum);