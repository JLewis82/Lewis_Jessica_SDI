/**
 * Created by Miss_Jessica_Lynne on 7/28/15.
 * SDI
 * Functions Assignment
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
            alert("Powerball numbers it is! Please press ok to continue");
            break;
        }
    }
    return validlotto;
}
powerLotto = askLotto(powerLotto);
alert("Thank for entering you choice as \n\n " + powerLotto + ".");






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
var myPowerball;
myPowerball = prompt("Welcome to your number one website to get all of your random Powerball numbers! \n\n" +
    " 5 random numbers plus the final random POWERBALL will be generated for you. \n\n" +
    "Would you like to test your luck in Powerball today? \n\n Please enter yes or no and click OK to continue.");


while(myPowerball == yes)
{
    function powerball(min, max, num)
    {
        var powerballNumbers;
        powerballNumbers = Math.random() * (max - min) + min;
        powerballNumbers = Math.round(powerballNumbers);
        {
            {
                for (var a = 0; a < num; a++)
                {
                    powerballNumbers[a] = Math.random() * (max - min) + min;
                    powerballNumbers[a] = Math.round(powerballNumbers[a]);
                }
                return powerballNumbers;
            }
        }
    }
    var randomPower1;
    randomPower1 = powerball1(1,53,1);

    var randomPower2;
    randomPower2 = powerball1(1, 59, 1);

    var randomPower3;
    randomPower3 = powerball1(1, 59, 1);

    var randomPower4;
    randomPower4 = powerball1(1, 59, 1);

    var randomPower5;
    randomPower5 = myLotto(1, 59, 1);

    var randomPowerball6;
    randomPowerball6 = myLotto(1, 35,1) ;

   // var randomNums1st;
    //randomNums1st = powerball1(1, 59, 1);
    //var randomNums6power;
    //randomNums6power = powerball1(1, 35, 1);
}
console.log("Your first random lottery number is " + randomPower1 +"." + "\n\n" + " Your second random lottery number is " +
    randomPower2 +"." + "\n\n" + "Your third random lottery number is " + randomPower3 +"." + "\n\n" + "Your fourth random lottery number is " + randomPower4 +"." +
    "\n\n" + "Your fifth random lottery number is " + randomPower5 +"." + "\n\n" + "And Your sixth random lottery number is " + randomPowerball6 +".");


/* CONFIRMING THAT THE SCRIPT GAVE THE USER WHAT THEY ASKED FOR */

var letsConfirm2;                                                                                                                                                       //declaring a variable
letsConfirm2 = prompt( " Now lets confirm that requested" + "," + "\n" + powerLotto + "\n"
    + " and that you received all of the numbers? Please enter yes or no and click OK....");                 // confirming the users initial input for their random nums preference

if (letsConfirm2 === yes)                                                                                                                                          //   equals a yes from the user then do this
{
    console.log("Thank your!");
}
else  if (letsConfirm2 === "")                                                                                                                                                                            // otherwise do this
{
    alert("please contact your system admin");
}
/*  SAYING THANK YOU AND INITIATING A GOODBYE */
var theEnd;                                                                                                                                                                 //declaring a variable
        theEnd = ("Thank you for participating today, \n" + yourName + "! ");        //assigning a popup alert to say thank you and goodbye to the user
alert(theEnd);




