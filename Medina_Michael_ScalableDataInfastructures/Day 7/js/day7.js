
 /*
Michael Medina
Date
Section 00
Assignment
 */

//alert("Just testing!");


 // Global Variables

 var numberArray = [ 1,2,3,4,5,6,7,8,9,10,11,12];
 var returnedArray =[];
 var userPrompt = prompt("Enter 'odd' to return odd numbers or 'even' to return even numbers");



 //Function
 function evenArray(argArray, oddOrEven)
 {
     //Local Variables
     var newArray =[];
     var modNum;
     var zeroOrOne;

     if (oddOrEven === "odd")
     {
         zeroOrOne = 1;
     } else {
         zeroOrOne = 0;

     }




     for (var i=0; i < argArray.length; i++)
     {
         modNum = argArray[i] % 2;

         if (modNum === zeroOrOne)
         {
             newArray.push(argArray[i]);


         }

     }
     return newArray;

 }

 //Main Code
 returnedArray = evenArray(numberArray, userPrompt);

 console.log("The " + userPrompt + " number array is " + returnedArray);