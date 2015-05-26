
 /*
Michael Medina
Date
Section 00
Assignment
 */

//alert("Just testing!");


 ////CORRECT PROBLEM 2
 var firstNum = parseFloat(prompt("Please enter a number: "));
 var secondNum;
 var numToFormat = prompt("Enter a number to format: ");
 //
 //function decFormat(argNum, decPlaces)
 //{
 //    return argNum.toFixed(decPlaces);
 //    {
 //
 //
 //
 //
 //    }
 //
 //
 //
 //
 //}
 //

 //function convertNum(argNum)
 //{
 //    while (isNan(argNum))
 //    {
 //        argNum = prompt("No, i said enter a number: ");
 //
 //
 //    }
 //    return parseFloat(argNum);
 //
 //
 //}
 //secondNum = convertNum((firstNum));
 //console.log("The returned number is ", secondNum);




 //Global Varaibles
 var dateOne = new Date("5/23/2015");
 var dateTwo = new Date("5/23/2123");
 var hOrD = "hours" ;                       //Problem 3 Function

 //function dateDiff(firstDate, secondDate, hoursOrDays)
 //{
 //    var difference = Math.abs(firstDate - secondDate);
 //
 //    if (hoursOrDays === "hours")
 //    {
 //        difference = Math.round(difference/1000/60/60);
 //
 //    }else{
 //        difference = Math.round(difference/1000/60/60/24);
 //
 //    }
 //
 //    return difference;
 //}






 //Problem 1 function call
 //returnedNumber = decFormat(numToFormat, numOfDecimals);
 //console.log ("The formatted number is ", returnedNumber);

 //Function 3 Function Call
 secondNum = dateDiff(dateOne, dateTwo, hOrD);
 if (hOrD == "days")
 {
     console.log("The difference in" +hOrD+" between " + dateOne.toDateString() + " and "+dateTwo.toDateString() + " is " + secondNum);

 }
