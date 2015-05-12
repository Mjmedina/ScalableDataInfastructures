//alert("JavaScript works!");

alert ("Do I have enough gas to get to work?");

//Set Variables

//Set Number Variables
var mpg = 30;
var tankSize = 100;

//Set String Variable
var gasRemaining = prompt("How much gas do you estimate to be left in the tank?");
var totalDistance = parseInt(mpg)*parseInt(tankSize);
var tankPercent = parseInt(totalDistance) - gasRemaining;
var distance = totalDistance - tankPercent;

//Conditionals

if(distance >=200){
    console.log("If you have a full tank with "+mpg+"mpg and a tank capacity of"+gasRemaining+"%, then you do not have to fill up!");
}else{
    console.log("You need to fill your tank!");
}