//  NAME:  Enter your name here
//  DATE:  Enter the current date
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

//var p;
//var q;
//var r;
//
//p = confirm("First value:  Click OK for true or Cancel for false.");
//q = confirm("Second value:  Click OK for true or Cancel for false.");
//
//if (p && q) {
//    console.log("With " + p + " and " + q + ", the outcome is TRUE.");
//} else {
//    console.log("With " + p + " and " + q + ", the outcome is FALSE.");
//}




// Word Problems
// Problem 1

// Ticket price for Adults

var tix = prompt("Welcome to the MOVIEPLEX experience!\nHow old are you?");

if (tix >=55) {
    console.log("That will be $7.00 good sir!");

}else if (tix <= 10){
    console.log ("That will be $7.00 good sir!")

}else
    {
    console.log("That will be $12.00 please!")

}

// Problem 2

//Tire Pressure in a car

var tirePressure = [];

//Tire pressures
//Set arrays and prompts for each tire.
tirePressure[0] = prompt("How much PSI is in the front left tire?");
tirePressure[1] = prompt("How much PSI is in the front right tire?");
tirePressure[2] = prompt("How much PSI is in the back left tire?");
tirePressure[3] = prompt("How much PSI is in the back right tire?");


if((tirePressure[0] == tirePressure[1]) && (tirePressure[2] == tirePressure[3])) {
    console.log("The tires pass spec!");
}else{
    console.log("Get your tires checked!");
}