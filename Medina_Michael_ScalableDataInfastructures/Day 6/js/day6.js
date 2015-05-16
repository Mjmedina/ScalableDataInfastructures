
 /*
Michael Medina
Date 5/16/2015
Section 00
Assignment
 */

//alert("Just testing!");

                                                //ARRAYS

 function myFirstArray()
 {
     var pirateNames = ["Blackbeard", "Captain Kidd", "Captain Morgan", "Captain Jack Sparrow"];

     //Use a FOR LOOP instead of writing a bunch of console.logs
     for (var i = 0; i < pirateNames.length; i++)
     {
         if (pirateNames[i] === "Captain Morgan")
         {
             console.log(pirateNames[i] + " is my favorite pirate!");
         }


     }
     console.log("The length of the array is " + pirateNames.length);

     //pirateNames.push("Barbosa", "Luffy", "Davy Jones" );
     pirateNames.unshift("Barbosa", "Luffy", "Davy Jones" );

     console.log(pirateNames);

     //pirateNames.pop();
     poppedItem = pirateNames.pop();

     console.log(pirateNames);
     console.log("The popped name is " + poppedItem);
 }



 myFirstArray();


 // Global Variable

//var returnedAverage;
//// Function
//function myAverageFunction()
//{
//     // Local Variables
//     var average = 0;
//     var addNum = 0;
//     var numberArray = [5, 6, 7, 8, 10, 12, 14, 23, 35, 50];
//
//     //For loop to loop through elements of array
//     for( var i = 0; i < numberArray.length; i++)
//     {
//         addNum += numberArray[i];
//     }
//
//
//     //Average of the total
//     average = addNum / numberArray.length;
//
//
//     //Return the final average
//     //add the 'round'
//     return round(average);
//
//
//}
//
//returnedAverage = myAverageFunction();
//
//console.log("The average is " + returnedAverage);
//
//
//
//
//
//














