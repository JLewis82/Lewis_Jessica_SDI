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

//assigning the function to request that the user input their name
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
//calling/invoking the above function:
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
alert("Thank for entering you choice as " + powerLotto);



/*running math.random()*/

//LOTTO NUMBERS
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
var randomNums;
    randomNums = myLotto(1,10,1);
console.log("Your first random lottery number is " + randomNums +".");
console.log("Your second random lottery number is " + randomNums +".");
console.log("Your third random lottery number is " + randomNums +".");
console.log("Your fourth random lottery number is " + randomNums +".");
console.log("Your fifth random lottery number is " + randomNums +".");
console.log("Your sixth random lottery number is " + randomNums +".");




/* USING MATH.RANDOM() FOR POWERBALL NUMBERS */
//POWERBALL NUMBERS





var letsConfirm2;                                  //declaring a variable
letsConfirm2 = prompt( " Now lets confirm that" + "," + "\n"
    + faveColour + "\n"
    + "is your fave colour? yes/no and click ok.");// confirming the users fave colour
if (faveColour === yes)                            //if fave colour equals a yes from the user then do this
{
    alert("So your fave colour is:" + "" + faveColour + "?" + "I hope so bc I love that colour!");
}
else                                            // otherwise do this
{
    alert("I think there was an error. Lets try this again");
}


/*  initiating a goodbye */
var theEnd;                                       //declaring a variable
theEnd = alert("Thank you for participating today"
    + "," + "" + yourName + "" + goodBye + "."); //assigning a popup alert to say thank you and goodbye to the user