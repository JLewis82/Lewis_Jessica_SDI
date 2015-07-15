/* Miss_Jessica_Lynne Lewis
SDI MDV2330-O
Expressions Assignment
 */

/* magic trick 1 */

//basic variables
var y;
y = true;
var n;
n = false;
var welCome;
welCome = alert("Welcome to my magic scripts! Errr, I mean magic TRICKS!");

//ask user to input name
var yourName;
yourName = prompt("First, tell me your name so I know how to address you.");
alert("Thank you," + "" + yourName + ".");

//ask user if they would like to learn magic trick 1
var magicOne;
magicOne = prompt("Today, I will be teaching you some simple math magic to WOW you! " + "Would you like to continue with our first trick" + "" + yourName + "? y/n");
if(magicOne = y)
{
    alert("ok then lets begin...");
}
else(magicOne = n);
{
    prompt("sorry but this is not an option today! please kindly click ok")
}

//explanation of the trick
var explainOne;
explainOne = alert("This particular magic trick will return the number 5 for any given number you will choose." +
    " Regardless of your chosen magic number the number 5 will ALWAYS be the end result of this funky math magic trick!");

/*teaching the trick*/
//step 1 user enters a number
var a;
a = prompt("So here is where you please enter a number. It can be any number of your liking but beware! " +
    "You will be using this number to do some math so choose something you can calculate easily.");

//step 2 double the user mumber var a
var b;
b =  2;
alert("Thank you for entering your number. Now we will take your number and double it.(" + "" + a + "" + "x 2" + "). Press ok to continue...");
var bTotal;
bTotal= (a * b);
alert("So this answer is" + "" + bTotal);

//step 3 is add 10 to bTotal
var c;
c = 10;
alert("Now we will take" + "" + bTotal + "" + "and add 10 to it like this: (" + "" + b + "" + "+ 10" + "). Press ok to continue...");
var cTotal;
cTotal = (bTotal + c);

alert("So this answer is" + "" + cTotal);

//step 4is halving cTotal so divide by two
var d;
d = 2;
var dTotal;
dTotal = (cTotal / 2);

//step five is Take away you original number.
//prompt("Subtract your original number")

var e;
e = (dTotal - a);

    confirm("is" + "" + e + "" + "your magic number?" );


