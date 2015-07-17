/* Miss_Jessica_Lynne Lewis
SDI MDV2330-O
Expressions Assignment
7/15/2015
 */
 
/* the following are basic variables used throughout the script */
var y;                            //declaring a variable for yes
y = true;                         //assigning true to the variable
var n;                            //declaring a variable for no
n = false;                        //assigning false to the variable
var welCome;                      //declaring a variable for the greeting
welCome = alert("Welcome to my magic script! " +
    "Errr, I mean magic TRICK!"); //assigning a string to the variable

/* ask user to input name */
var yourName;                               //declaring a variable for the users name
yourName = prompt("First, tell me your " +
    "name so I know how to address you."); //assigning a prompt to the variable to ask the user for their name
alert("Thank you," + "" + yourName + "."); //using a pop up alert to thank the user


/* ask user if they would like to learn magic trick 1 */
var magic;                                              //declaring a variable
magic = prompt("Today, I will be teaching you some simple math magic " +
    "to WOW you! " + "Would you like to continue " +
    "with our first trick" + "" + yourName + "? y/n") ; //assigning the variable a prompt with a concatenated string

if(magic = y)                                           //using if/else to confirm
{
    alert("ok then lets begin...");
}
else
{
    prompt("sorry but this is not an option today! please kindly click ok");    //if the user reply with no
}

/* explanation of the math magic trick */
var explainOne;                                                                 //declaring a variable
explainOne = alert("This particular magic trick will return the number 5 for " +
    "any given number you will choose." +
    " Regardless of your chosen magic number the " +
    "number 5 will ALWAYS be the end result of this funky math magic trick.") ; //explaining the math magic trick to the user


/* step 1 the user enters a number */
var a;                                                //declaring a variable
a = prompt("So here is where you enter a number." +
    " It can be any number of your liking but beware! " +
    "You will be using this number to do some math " +
    "so choose something you can calculate easily."); //asking the user to input a number


/* step 2 prompt user to double their number */
var b;                                                              // declaring a variable
b =  2;                                                             // assigning the number 2
alert("Thank you. Now double your number. Press ok to continue...");// asking user to double the number
var bTotal;                                                         // declaring a variable
bTotal= (a * b);                                                    // taking the variable a and multiplying it by 2

/* step 3 prompt user to add 10 to the previous number */
var c;                                                           // declaring the variable
c = 10;                                                          // assigning the variable the number 10
alert("Thank you. Now add 10 to this. Press ok to continue..."); // asking the user to add 10 to the previous number
var cTotal;                                                      // declaring a variable for the total
cTotal = (bTotal + c);                                           // assinging the previous total in step 2 plus the 10 assigned to var c

/*step 4 prompt user to halving cTotal so divide by two */
var d;                                                                        // declaring the variable
d = 2;                                                                        // assigning the number 2 to the variable
alert("Now take this number and divide it in half. Press ok to continue..."); // asking the user to divide the previous number total by 2
var dTotal;                                                                   // declaring a variable
dTotal = (cTotal / 2);                                                        // variable to take the previous total and dividing it by 2

/* step five is prompt user to Take away their original number. */

alert("Thank you. Now take this number and " +
    "subtract your original number. Press ok to continue..."); // alerting the user to subtract their original number fro the previous total
var eTotal;                                                    // declaring a variable
eTotal = (dTotal - a);                                         // subtracting the users original number from the previous total
alert("The result is" + "" + eTotal);                          // telling the user the result

/* confirmation that the end result equals the number 5 */
var confirmMe;                                                 // declaring a variable
confirmMe = confirm("Does" + "" + eTotal + "" + " = 5? y/n" ); // assigning confirm to the variable to verify that the end result is 5
if (confirmMe = y)                                             // an if/ else statement
{
    alert("Thank you!!")
}
else
{
    alert("Please contact your system admin.")
}


/* teach the trick */
var teachTrick; //declaring a variable
teachTrick = prompt("Would you like to learn this magic trick? Press ok to continue..."); //prompting the user to press ok to learn the trick

 /* introducing the user to the magic trick */
var aInfo;                                                                          //declaring a variable
aInfo = alert("So from this point on we will be reviewing the following" +
    " information using this browsers console to make it easier to follow along."); //alerting the user that they will need to follow along using the browser console
var aTeach;                                                                         //declaring a variable
aTeach = console.log("Please enter a number. Any number.");                        // asking the user to enter a number

/* step 2 double the user number */
var bTeach;                                                                                         //declaring a variable
bTeach =  2;                                                                                        //assigning the number 2 to the variable
console.log("Thank you for entering your number. Now we will" +
    " take your number and double it.(" + "" + aTeach + "" + "x 2" + "). Press ok to continue..."); //thanking the user for their input
var bTeachtotal;                                                                                    //declaring a variable
bTeachtotal = (a * b);                                                                              //assigning a times b to the variable
console.log("So this answer is" + ":" + "" + bTeachtotal);                                          //using the console to output the total

/*step 3 is add 10 to bTotal*/
var cTeach;                                                                           //declaring a variable
cTeach = 10;                                                                          //assigning the number 10 to the variable
console.log("Now we will take" + "" + bTotal + "" + "and add 10 to it" +
    " like this: (" + "" + bTeachtotal + "" + "+ 10" + "). Press ok to continue..."); //showing the user the 3rd step of the trick via the console
var cTeachtotal;                                                                      //declaring a variable
cTeachtotal = (bTotal + cTeach);                                                      //adding the total from step 2 plus 10
console.log("So this answer is" + "" + cTeachtotal);                                  //telling the user the total for step 3

/*step 4 is halving cTotal so divide by two */
var dTeach;                                                                          //declaring a variable
dTeach = 2;                                                                          //assinging the number 2 to the variable
console.log("Now we will take" + "" + cTeachtotal + "" + "and divide " +
    "it in half: (" + "" + cTeachtotal + "" + "/ 2" + "). Press ok to continue..."); //showing the user via the console how to do this step of the magic trick
var dTeachtotal; //declaring a variable
dTeachtotal = (cTeachtotal / 2);                                                     //dividing the previous total in step 4 by 2
console.log("So this answer is" + "" + dTeachtotal);                                 //outputting the answer for this step for the user via the console


/* step five is Take away you original number. */
console.log("Now we will take" + "" + dTeachtotal + "" + "and " +
    "subrtract your original number: (" + "" + dTeachtotal + "" + "-" + a + "). " +
    "Press ok to continue...");                   //telling the user via the console the next step to the trick

var eTeachtotal;                                  //declaring a variable
eTeachtotal = (dTotal - aTeach);                  //assigning the previous total in step 4 minus the users original secret number input
console.log("The result is" + "" + eTeachtotal); //telling the user via the console the end result

/* confirmation that the end result equals the number 5 */
var confirmTeach;                                                            //declaring a variable
confirmTeach = confirm("Does" + "" + eTeachtotal + "" + " = 5? y/n" );       //asking the user to confirm that the end result does in fact equal the number 5 to make sure the magic trick actually worked
if (confirmTeach = y)                                                        // an if/else statement
{
    alert("Thank you! This concludes today's math magic trick. If you would like to review this trick again with " +
        "a different chosen number then please refresh this page. Goodbye"); //if user answered yes then they are told goodbye
}
else
{
    alert("Please contact your system admin.");                              // if the user responded other than true then they are informed to contact their system admin
}


