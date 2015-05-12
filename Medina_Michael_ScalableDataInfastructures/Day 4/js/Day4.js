
 /*
Michael Medina
Date
Section 00
Assignment
 */

//alert("Just testing!");

 //                                                   Variables Example
 // One for First Name
 // One for Last Name
 //var firstName = "Mike",
 //    lastName = "Medina",
 //    yourFirstName,
 //    yourLastName;
 //
 //// Prompts
 //// Ask User for last name
 //yourFirstName = prompt("Enter a name: ", "Type First Name Here");
 //yourLastName  = prompt("Enter your last name: ", "Type Last Name Here");
 //
 //
 //
 //if (yourFirstName === firstName && yourLastName === lastName){
 //    console.log("You are correct!");
 //} else {
 //    console.log("Error: Unauthorized User");
 //}

 //                                                While Loop Example

 //var myNumber = 100;
 //
 //while (myNumber > 15) {
 //    console.log("My number is "+ myNumber);
 //    //myNumber = myNumber + 1;
 //    myNumber = 4;
 //}
 //
 //// For loop
 //for(var i = 0; i <= 10; i++){
 //    console.log
 //}


 //                                                For Loop Example
 // 99 Bottles of Beer on the wall

 for (var pop = 99; pop >= 1; pop--){

     if (pop === 1){
         console.log(pop + " bottle of pop on the wall");
         console.log(pop + " bottle of pop!");

     } else {
         console.log(pop + " bottles of pop on the wall");
         console.log(pop + " bottles of pop!");
     }

     console.log("Take on down, pass it around, ");


     if (pop > 2){
        //As long as pop is greater than 2, we need the plural of bottles.
         console.log((pop -1) + " bottles of pop on the wall.");


     }else if (pop ===1) {
         //When pop equals 1, we indicate no more bottles left
         console.log("No more bottles of pop on the wall.");


     } else {
         //When pop equals 2, we need the singular bottle.
         console.log((pop -1) + " bottle of pop on the wall.");
     }

     console.log(" ");


 }
