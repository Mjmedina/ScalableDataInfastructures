//Michael Medina
//5/26/2015
//SDI Lab 10
//Section 00

//alert("JavaScript works!");


                                    //POWERBALL & FL LOTTO
//create a function to generate a random number.
function someNum(num)
{

    var random=[];

    //for loop to get random numbers from within a set perameter of numbers.
    for (var i=0, t=num.length; i<t; i++)
        random.push(Math.floor((Math.random()*num[i]) +1));

    return random;
}

//Create a function in order to pull numbers within the Powerball main set. 1-59
function getPowerballNum()
{
    return someNum([59,59,59,59,59]);

}

//Create a function in order to pull the single POWERBALL number. 1-35
function getPowerball()
{
    return someNum([35]);

}

//Create a function to get the numbers for FL Lotto. 1-53
function getLotto()
{
    return someNum([53,53,53,53,53,53])

}

powerballNum = getPowerballNum();
powerball = getPowerball();
lotto = getLotto();


console.log ("This week's Powerball numbers are "+ powerballNum+" with our lucky POWERBALL as "+ powerball+ "!");

console.log("This week's Florida Lottery numbers are "+lotto+"!");