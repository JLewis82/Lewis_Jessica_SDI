/**
 * Created by Miss_Jessica_Lynne on 7/17/15.
 */
/* basic variables */
var y;
y = true;
var n;
n = false;
var welCome;
welCome = alert("Welcome to todays weather! We will review your daily forcast to make sure you are prepared for your day!");
var goodBye;
goodBye = alert("Thank you for your time and I hope this information was helpful to you!");

/* asking user for their name and location */
var yourName;
yourName = prompt("Please enter your name so I know how to properly address you.");
alert(" Thank you very much" + "," + yourName + ".");

/* the weather using if/else */
var theWeather;
theWeather = prompt(yourName + "," + "" + "Is it raining outside? y/n");
if (theWeather == y)
{
    alert("Don't forget your umbrella!");
}
else
{
    alert("Don't forget your sunglasses!");
}


/* temperature using if with && */


var theTemp;
theTemp = prompt("Please enter the current temperature in numeric form...");


if (theTemp <= 30)
{
    console.log("Wow! now that is cold!");
}

if ((theTemp > 30) && (theTemperature <= 55))
{
    console.log("It is a cool day");
}

if ((theTemp > 55) && (theTemperature <= 75))
{
    console.log = ("It is a fairly warm day");
}

if ((theTemp > 75))
{
    console.log("Wow! It is very hot today!");
}

/* The weather using ternary conditional if/else */
var letsConfirm;
letsConfirm = confirm(" ok so it is definitely" + "" + theTemp + "" + "outside right now? y/n");

if (theTemp != y)
{
    console.log("I think there was an error. Lets try this again");
} else {
    console.log("It is " + (theTemp >= 90 ? "HOT!" : (theTemperature > 50 ? "NICE!" : "COLD!")))
}
alert("Thank you for participating today," + "" + yourName + "" + goodBye + ".");