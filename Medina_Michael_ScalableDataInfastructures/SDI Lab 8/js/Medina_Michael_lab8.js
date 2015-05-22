//Michael Medina
//05-21-2015
// SDI Lab: 00
// Assignment: Lab 7


//alert("JavaScript works!");


//Create a function that will accept a string as an argument

var myEmail = "mjmedina@comcast.net";
var returnString;

function email(properFormat)
{
    var atSymbol = properFormat.indexOf("@");
    var period   = properFormat.indexOf(".");
    var noSpace  = properFormat.indexOf(" ");
