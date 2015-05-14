
 /*
Michael Medina
Date: 5/14/2015
Section 00
Assignment: Functions
 */

//alert("Just testing!");

                                                        //FUNCTIONS


 // Create a function expression (using var keyword)
 // Add a variable inside the function to hold the string value
 // Add a prompt inside the function that asks for your name
 // Add a console.log inside the function that outputs name
 // Output the name inside the function

//Global Varaibles
 var returnedValueVariable;
 var checkName;

 //Functions
 function nameFetcher(){


     var myName = prompt("Enter your name: ", "Mike");

     return myName;
 }


 function nameChecker(nameArgument){

     var trueName;

     if (nameArgument === "Optimus"){
         trueName = true;

     } else {
         trueName = false;
     }
     return trueName;
     

 }


 // Main code
 // GLOBAL variables

 returnedValueVariable = nameFetcher();

 checkName = nameChecker(returnedValueVariable);

 if (checkName){
     console.log("Greetings and welcome!");
 } else{
     console.log("Intruder alert!");
 }








                                                       //Arguments
 //Create a second function with arguments
 //Send the value returned from first function

 //Add conditional in new function
 //Return either "true" or "false"