/**
 * Created by Miss_Jessica_Lynne on 7/28/15.
 */

/*basic variables*/




/*greeting and asking user their name*/
var myName = prompt("enter ur name plz:");

function yourName(firstname)
{
    var timesClicked = 1;

    while (firstname === "")
    {
        firstname = prompt("Dont leave this blank!\n\nPlease enter your name:");

        timesClicked++;

        if (timesClicked === 10)
        {
            console.log("Enuff nomore clicking!");
            break;
        }
    }
    return firstname;
}
myName = yourName(myName);
//console.log("Hello,"+myName+".welcome
myName=yourName(myName);



//functiontogeneraterandomnumburs
    functionrandomNumGen()



/* asking if user wants powerball or lottery*/




/*running math.random()*/
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


/* lottory random number results */
var randomNums;
    randomNums = myLotto(1,10,1);
console.log("Your first random lottory number is " + randomNums +".");
console.log("Your second random lottory number is " + randomNums +".");
console.log("Your third random lottory number is " + randomNums +".");
console.log("Your fourth random lottory number is " + randomNums +".");
console.log("Your fifth random lottory number is " + randomNums +".");
console.log("Your sixth random lottory number is " + randomNums +".");

