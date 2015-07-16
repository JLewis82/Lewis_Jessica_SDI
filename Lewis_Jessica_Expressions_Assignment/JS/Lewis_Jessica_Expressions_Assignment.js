/* Miss_Jessica_Lynne Lewis
SDI MDV2330-O
Expressions Assignment
7/15/2015
 */
 
//basic variables
var y; //declaring a variable for yes
y = true; //assigning true to the variable 
var n; //declaring a variable for no
n = false; //assigning false to the variable 
var welCome; //declaring a variable for the greeting 
welCome = alert("Welcome to my magic script! Errr, I mean magic TRICK!"); //assigning a string to the variable 

/* ask user to input name */
var yourName; //declaring a variable for the users name
yourName = prompt("First, tell me your name so I know how to address you."); //assigning a prompt to the variable to ask the user for their name
alert("Thank you," + "" + yourName + ".");//using a pop up alert to thank the user 

/* ask user if they would like to learn magic trick 1 */
var magic; //declaring a variable
magic = prompt("Today, I will be teaching you some simple math magic to WOW you! " + "Would you like to continue with our first trick" + "" + yourName + "? y/n") ; //assigning the variable a prompt with a concatenated string 
if(magic = y)//using if/else to confirm
{
    alert("ok then lets begin...");
}
else
{
    prompt("sorry but this is not an option today! please kindly click ok")//if the user reply with no 
}

/* explanation of the trick */
var explainOne; //declaring a variable
explainOne = alert("This particular magic trick will return the number 5 for any given number you will choose." +
    " Regardless of your chosen magic number the number 5 will ALWAYS be the end result of this funky math magic trick.") ; //explaining the math magic trick to the use


/* step 1 user enters a number */
var a; //declaring a variable
a = prompt("So here is where you enter a number. It can be any number of your liking but beware! " +
    "You will be using this number to do some math so choose something you can calculate easily."); //asking the user to input a number 

/* step 2 prompt user to double their number */
var b; //declaring a variable
b =  2;// assigning the number 2
alert("Thank you. Now double your number. Press ok to continue...");//asking user to double the number
var bTotal;//declaring a variable
bTotal= (a * b);// taking the variable a and multiplying it by 2

/* step 3 prompt user to add 10 to the previous number */
var c;
c = 10;
alert("Thank you. Now add 10 to this. Press ok to continue...");
var cTotal;
cTotal = (bTotal + c);

/*step 4 prompt user to halving cTotal so divide by two */
var d;
d = 2;
alert("Now take this number and divide it in half. Press ok to continue...");
var dTotal;
dTotal = (cTotal / 2);

/* step five is prompt user to Take away their original number. */

alert("Thank you. Now take this numer and subrtract your original number. Press ok to continue...");
var eTotal;
eTotal = (dTotal - a);
alert("The result is" + "" + eTotal);

/* confirmation that the end result equals the number 5 */
var confirmMe;
confirmMe = confirm("Does" + "" + eTotal + "" + " = 5? y/n" );
if (confirmMe = y)
{
    alert("Thank you!!")
}
else
{
    alert("Please contact your system admin.")
}


/* teach the trick */
var teachTrick;
teachTrick = prompt("Would you like to learn this magic trick? Press ok to continue...");

var aInfo;
aInfo = alert("So from this point on we will be reviewing the following information using this browsers console to make it easier to follow along.");
var aTeach;
aTeach = console.log("Please enter a number. Any number.");

/* step 2 double the user number */
var bTeach;
bTeach =  2;
console.log("Thank you for entering your number. Now we will take your number and double it.(" + "" + aTeach + "" + "x 2" + "). Press ok to continue...");
var bTeachtotal;
bTeachtotal = (a * b);
console.log("So this answer is" + ":" + "" + bTeachtotal);

//step 3 is add 10 to bTotal
var cTeach;
cTeach = 10;
console.log("Now we will take" + "" + bTotal + "" + "and add 10 to it like this: (" + "" + bTeachtotal + "" + "+ 10" + "). Press ok to continue...");
var cTeachtotal;
cTeachtotal = (bTotal + c);
console.log("So this answer is" + "" + cTeachtotal);

//step 4 is halving cTotal so divide by two
var dTeach;
dTeach = 2;
console.log("Now we will take" + "" + cTeachtotal + "" + "and divide it in half: (" + "" + cTeachtotal + "" + "/ 2" + "). Press ok to continue...");
var dTeachtotal;
dTeachtotal = (cTeachtotal / 2);
console.log("So this answer is" + "" + dTeachtotal);


/* step five is Take away you original number. */
console.log("Now we will take" + "" + dTeachtotal + "" + "and subrtract your original number: (" + "" + dTeachtotal + "" + "-" + a + "). Press ok to continue...");
var eTeachtotal;
eTeachtotal = (dTotal - a);
console.log("The result is" + "" + eTeachtotal);

/* confirmation that the end result equals the number 5 */
var confirmTeach;
confirmTeach = confirm("Does" + "" + eTeachtotal + "" + " = 5? y/n" );
if (confirmTeach = y)
{
    alert("Thank you! This concludes today's math magic trick. If you would like to review this trick again with " +
        "a different chosen number then please refresh this page. Goodbye")
}
else
{
    alert("Please contact your system admin.")
}


