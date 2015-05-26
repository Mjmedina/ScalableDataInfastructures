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
someNum();