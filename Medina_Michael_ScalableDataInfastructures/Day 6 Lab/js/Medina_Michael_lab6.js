//alert("JavaScript works!");



//Lab 6 Working With Arrays

                                            //ULTRON's KILL LIST

//create a fucntion to place array inside of.
function theAvengers() {

    //Create variable and array for The Avenger's names.
    var avengerNames = ["Iron Man", "Black Widow", "Thor", "Hulk"];

    //Create variable and array for The Avenger's secret identity's.
    var secretIdentity = ["Tony Stark", "Natasha Romanov", ".... uhhh THOR!?", "Bruce Banner"];


    //Create a 'for' loop set so that it will run as long as the integer is less than the length of the array.
for (var i = 0; i < avengerNames.length; i++) {
    {
        //Prints a message to the user tying the arrays together with a string.
        console.log(avengerNames[i] + "'s secret identity is " + secretIdentity[i]);

    }
}
    //Add a modifier to the variables in order to add Hawkeye to Ultron's kill list.
    avengerNames.push("Hawkeye");
    secretIdentity.push("Clint Barton");

    //Prints a message to the user tying the arrays together with a string.
    console.log(avengerNames[i]+" 's secret identity is "+ secretIdentity[i]);
}

//Main code that calls a function
theAvengers();
