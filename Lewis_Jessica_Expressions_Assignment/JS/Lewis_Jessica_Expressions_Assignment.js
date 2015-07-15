/* Miss_Jessica_Lynne Lewis
SDI MDV2330-O
Expressions Assignment
 */

/* basic variables */
var y;
y = true;
var n;
n = false;
var welCome;
welCome = alert("Welcome to my magic scripts! Errr, I mean magic TRICKS!");

/* ask user to input name */
var yourName;
yourName = prompt("First, tell me your name so I know how to address you.");
alert("Thank you," + "" + yourName + ".");

/* ask user if they would like to learn magic trick 1 */
var magic;
magic = prompt("Today, I will be teaching you some simple math magic to WOW you! " + "Would you like to continue with our first trick" + "" + yourName + "? y/n");
if(magic = y)
{
    alert("ok then lets begin...");
}
else(magic = n);
{
    prompt("sorry but this is not an option today! please kindly click ok")
}

/* explanation of the trick */
var explainOne;
explainOne = alert("This particular magic trick will return the number 5 for any given number you will choose." +
    " Regardless of your chosen magic number the number 5 will ALWAYS be the end result of this funky math magic trick!");


/* step 1 user enters a number */
var a;
a = prompt("So here is where you please enter a number. It can be any number of your liking but beware! " +
    "You will be using this number to do some math so choose something you can calculate easily.");

/* step 2 prompt user to double their number */
var b;
b =  2;
alert("Thank you. Now double your number. Press ok to continue...");
var bTotal;
bTotal= (a * b);

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
else (confirmMe = n);
{
    alert("Please contact your system admin.")
}


/* teach the trick */
var teachTrick;
teachTrick = prompt("Would you like to learn this magic trick? Press ok to continue...");

/* step 2 double the user number */
var bTeach;
bTeach =  2;
alert("Thank you for entering your number. Now we will take your number and double it.(" + "" + a + "" + "x 2" + "). Press ok to continue...");
var bTeachtotal;
bTeachtotal = (a * b);
alert("So this answer is" + "" + bTeachtotal);

//step 3 is add 10 to bTotal
var cTeach;
cTeach = 10;
alert("Now we will take" + "" + bTotal + "" + "and add 10 to it like this: (" + "" + bTeachtotal + "" + "+ 10" + "). Press ok to continue...");
var cTeachtotal;
cTeachtotal = (bTotal + c);
alert("So this answer is" + "" + cTeachtotal);

//step 4 is halving cTotal so divide by two
var dTeach;
dTeach = 2;
alert("Now we will take" + "" + cTeachtotal + "" + "and divide it in half: (" + "" + cTeachtotal + "" + "/ 2" + "). Press ok to continue...");
var dTeachtotal;
dTeachtotal = (cTeachtotal / 2);
alert("So this answer is" + "" + dTeachtotal);


/* step five is Take away you original number. */

alert("Now we will take" + "" + dTeachtotal + "" + "and subrtract your original number: (" + "" + dTeachtotal + "" + "-" + a + "). Press ok to continue...");
var eTeachtotal;
eTeachtotal = (dTotal - a);
alert("The result is" + "" + eTeachtotal);

/* confirmation that the end result equals the number 5 */
var confirmTeach;
confirmTeach = confirm("Does" + "" + eTeachtotal + "" + " = 5? y/n" );
if (confirmTeach = y)
{
    alert("Thank you! This concludes today's math magic trick. If you would like to review this trick again with " +
        "a different chosen number then please refresh this page. Goodbye")
}
else (confirmTeach = n);
{
    alert("Please contact your system admin.")
}


