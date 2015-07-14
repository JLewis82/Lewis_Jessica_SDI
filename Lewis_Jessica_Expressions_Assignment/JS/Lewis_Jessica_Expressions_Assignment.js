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
magicOne = prompt("Today, I will be teaching you some simple math magic to WOW you! " +
    "Would you like to continue with our first trick" + "" + yourName + "? y/n");
if(magicOne = y)
{
    alert("ok then lets begin...");
}
else(magicOne = n);
{
    alert("sorry but this is not an option today!")
}

//step 1 user enters a number
var a;
a = prompt("please enter a number");

//step 2 double the user mumber var a
var b;
b =  2;
var bTotal;
bTotal= (a * b);

alert(bTotal);

//step 3 is add 10 to bTotal
var c;
c = 10;
var cTotal;
cTotal = (bTotal + c);

alert(cTotal);

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


