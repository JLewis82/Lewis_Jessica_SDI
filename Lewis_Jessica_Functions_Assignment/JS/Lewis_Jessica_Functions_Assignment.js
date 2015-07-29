/**
 * Created by Miss_Jessica_Lynne on 7/28/15.
 */

/*basic variables*/

var yes;
yes = true;
var no;
no = false;
var welCome;
welCome = ("Welcome to Lucky Numbers, your hot spot for \n\n " +
"the best random lottery and Powerball \n\n " +
"generated numbers on the web!");


/*greeting and asking user their name*/
var myName = prompt("Let's begin! Please enter your name so I may better assist you:");

//assigning the function
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

