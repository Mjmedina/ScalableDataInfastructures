
 /*
Michael Medina
Date
Section 00
Assignment
 */

//alert("Just testing!");

 //Global Variables
 var array1= [13, 15, 7, 1923, 67];
 var array2= [9, 33, 77, 11, 26, 28, 164, 92];
 var array3= [5, 12, 34, 76, 45, 2, 1, 98, 93, 555, 667, 12];
 var returnedArray;
 var numArrays = [array1, array2, array3];



 function bubbleSort(argArray)
 {

     //Local Variables
     var num1,
         num2,
         holder;

     for (var newElement in argArray) {


         for (var element in argArray) {
             element = parseInt(element);

             //Assign array elements to variables
             num1 = argArray[element];
             num2 = argArray[element + 1];

             //compare to see which is greater
             if (num1 > num2) {


                 holder = num1;
                 argArray [element] = num2;
                 argArray [element + 1] = num1;


             }


         }

     }

     return argArray;
 }

 //Main code

 for (var each in numArrays) {


     returnedArray = bubbleSort(numArrays [each]);

     console.log("array number " + each + " sorted is " + returnedArray);
 }