/**
 * Created by Miss_Jessica_Lynne on 7/28/15.
 */

/*BASIC VARIABLES USED THROUGHOUT THIS SCRIPT*/

//BOOLEAN VARIABLES
var yes;
yes = true;
var no;
no = false;

/* VARIABLE FOR WELCOME AND GREETING*/
var welCome;
        welCome = ("Welcome to Lucky Numbers, your hot spot for \n\n " +
                                "the best random lottery and Powerball \n\n " +
                                "generated numbers on the web!");

/* USING A FUNCTION ASKING THE USER TO INPUT THEIR NAME*/
var myName;
    myName = prompt("Let's begin! Please enter your name so I may better assist you:");

/*assigning the function to request that the user input their name*/
    function yourName(username)
    {
        var nameInput = "";
        while (username === "")
        {
            username = prompt("Dont leave this blank!\n\nPlease enter your name:");

            if (nameInput = "")
                {
                    alert("Thank you!");
                    break;
                }
        }
             return username;
    }
      /*calling/invoking the above function:*/
        myName = yourName(myName);
        alert(welCome + myName);


/* ASKING THE USER IF THEY WANT POWERBALL OR LOTTERY NUMBERS */
var powerLotto;
powerLotto = prompt ("Welcome! Would you like to see your lottery numbers or pwerball number?\n\n Please enter either lottery OR powerball...");



function askLotto (validlotto) //function to ask if lotto numbers are wanted
{
    var question = "";
    while (validlotto === "lottery")
    {
         validlotto = alert("Lottery numbers it is then! Please press ok to continue....:");

        if (question === "powerball")
        {
            question = alert("Powerball numbers it is! Please press ok to continue");
            break;
        }
    }
    return validlotto;
}
powerLotto = askLotto(powerLotto);
alert("Thank for entering you choice as \n\n " + powerLotto + ".");


///////       FLIP FLOP THE LOTTO WITH THE POWERBALL TOMORROW:
//////////////


/* add a confirm dialog here to have the script run the users choice by the function */







/*LOTTERY  running math.random()*/

function myLotto(min, max, num)
{
    var myNumbers = [];
    {
        {
            for (var a = 0; a < num; a++)
            {
                myNumbers[a] = Math.random() * (max - min) + min;
                myNumbers[a] = Math.round(myNumbers[a]);
            }
            return myNumbers;
        }
    }
}
//lottery random number results
var randomNums1;
      randomNums1 = myLotto(1,53,1);
var randomNums2;
randomNums2 = myLotto(1, 59, 1);
// console.log("Your second number is " + randomNums + ".");
 var randomNums3;
randomNums3 = myLotto(1, 59, 1);
//console.log("Your third number is " + randomNums + ".");
var randomNums4;
randomNums4 = myLotto(1, 59, 1);
//console.log("Your fourth number is " + randomNums + ".");
var randomNums5;
 randomNums5 = myLotto(1, 59, 1);
//console.log("Your fifth number is " + randomNums + ".");
var randomNums6;
randomNums6 = myLotto(1, 59,1) ;
console.log("Your first random lottery number is " + randomNums1 +"." + "\n\n" + " Your second random lottery number is " +
         randomNums2 +"." + "\n\n" + "Your third random lottery number is " + randomNums3 +"." + "\n\n" + "Your fourth random lottery number is " + randomNums4 +"." +
         "\n\n" + "Your fifth random lottery number is " + randomNums5 +"." + "\n\n" + "And Your sixth random lottery number is " + randomNums6 +".");







/* USING MATH.RANDOM() FOR POWERBALL NUMBERS */
//POWERBALL NUMBER
var myPowerball;
      myPowerball = prompt("Welcome to your number one website to get all of your random Powerball numbers! \n\n" +
                                            " 5 random numbers plus the final random POWERBALL will be generated for you. \n\n" +
                                            "Would you like to test your luck in Powerball today? \n\n Please enter yes or no and click OK to continue.");




            if (myPowerball === "")
            {



/*while(myPowerball === yes)
{*/
    function powerball1(min, max, num) {
        var powerballNumbers = [];
        {
            {
                for (var b = 0; b < num; b++)
                {
                    powerballNumbers[b] = Math.random() * (max - min) + min;
                    powerballNumbers[b] = Math.round(powerballNumbers[b]);
                }
                return powerballNumbers;
            }
        }

    }
    var  randomNums1st;
    randomNums1st = powerball1(1, 59, 1);
    var randomNums6power;
    randomNums6power = powerball1(1, 35, 1);

        console.log("Your 5 random lucky numbers are " + "\n\n" + randomNums1st + "\n\n" + randomNums1st + "\n\n" +
        randomNums1st+ "\n\n" + randomNums1st+ "\n\n" + randomNums1st+ "." +  " Additionally your POWERBALL random number is" + ": "+ randomNums6power + ".");
console.log("Your 5 random lucky numbers are " + "\n\n" + randomNums1st + "\n\n" + randomNums1st + "\n\n" +
    randomNums1st+ "\n\n" + randomNums1st+ "\n\n" + randomNums1st+ "." +  " Additionally your POWERBALL random number is" + ": "+ randomNums6power + ".");

/*else if (myPowerball === "")
{
    alert("I'm sorry but this is currently not an option for you!");
}
*/


/* CONFIRMING THAT THE SCRIPT GAVE THE USER WHAT THEY ASKED FOR */

var letsConfirm2;                                                                                                                                                       //declaring a variable
letsConfirm2 = prompt( " Now lets confirm that requested" + "," + "\n" + powerLotto + "\n"
    + " and that you received all of the numbers? Please enter yes or no and click OK....");                 // confirming the users initial input for their random nums preference

if (faveColour === yes)                                                                                                                                          //   equals a yes from the user then do this
{
    alert("So your fave colour is:" + "" + faveColour + "?" + "I hope so bc I love that colour!");
}
else                                                                                                                                                                              // otherwise do this
{
    alert("I think there was an error. Lets try this again");
}
/*  SAYING THANK YOU AND INITIATING A GOODBYE */
var theEnd;                                                                                                                                                                 //declaring a variable
        theEnd = alert("Thank you for participating today, \n" + yourName + ". " + goodBye + "! ");        //assigning a popup alert to say thank you and goodbye to the user




//////////////////////////////////////////////////
// NOTES BELOW HERE ONLY
////////////////////////////////////////////////
/* original
 //POWERBALL NUMBERS
 var mega;
 mega = 1;

 function powerball(min, max, num)
 {
 var powerballNumbers = [];
 {
 {
 for (var i = 0; i < num; i++)
 {
 powerballNumbers[i] = Math.random() * (max - min) + min;
 powerballNumbers[i] = Math.round(powerballNumbers[i]);
 break;
 }
 return powerballNumbers;

 }
 }
 }
 //lottery random number results
 var randomNums;
 randomNums = powerball(1,59, 6);
 console.log("Your first random lottery number is " + randomNums +".");

 randomNums = powerball(1,59,5);
 console.log("Your second number is " + randomNums +".");

 randomNums = powerball(1,59,4);
 console.log("Your third number is " + randomNums +".");

 randomNums = powerball(1,59,3);
 console.log("Your fourth number is " + randomNums +".");

 randomNums = powerball(1, 59,2)
 console.log("Your fifth number is " + randomNums +".");

 randomNums = powerball(1, 35,1)
 console.log("Your Powerball number is " + randomNums +".");
 */
//Florida lottery has six random numbers between 1 and 53;
// the Powerball lottery has five random numbers between 1 and 59 and a Powerball
 //between 1 and 35.*/


