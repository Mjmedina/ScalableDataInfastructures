//Michael Medina
// 05-19-2015
// SDI Lab: 00
// Assignment: Lab 7






//alert("JavaScript works!");


// Global Variables

var arrayOne = [57, 78, 12, 3, 1];
var arrayTwo = [345, 4, 69, 17, 94, 13, 12, 82];
var arrayThree = [7, 90, 46, 64, 49, 93];


//Function

function numOrder(num)
{

    var temp = 0;
    //Create for loop
    for(t = 0; t < num.length; ++t)
    {
        for(i = t+1; i < num.length; ++i)
        {
            if (num[t] > num[i])
            {
                temp = num[t]; num[t] = num[i]; num[i] = temp;
            }
        }
    }
    console.log(num);
}

//call the arrays
numOrder(arrayOne);
numOrder(arrayTwo);
numOrder(arrayThree);


