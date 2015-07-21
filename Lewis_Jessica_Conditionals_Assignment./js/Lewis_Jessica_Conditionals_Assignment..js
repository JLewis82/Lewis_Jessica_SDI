/**
 * Created by Miss_Jessica_Lynne on 7/17/15.
 */
/* basic variables */
var yes;
yes = true;
var no;
no = false;
var welCome;
welCome = alert("Welcome to todays weather! We will review your daily forcast to make sure you are prepared for your day!");

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
theTemp = prompt(yourName + "," + "Please enter the current temperature in numeric form...");


if (theTemp <= 30)
{
    console.log("Wow! Seems to be a bit past cold for this time of year! Dont forget your sweater!");
}

if ((theTemp > 30) && (theTemperature <= 55))
{
    console.log("Seemes like today is a fairly nice and cool day");
}

if ((theTemp > 55) && (theTemperature <= 75))
{
    console.log = ("It is a nice and fairly warm day. Lets not forget your sunglasses!");
}

if ((theTemp > 75))
{
    console.log("Wow! It is very hot today! Lets try to loiter around the AC at work today!");
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


/* using "if" with "else if" to ask the user their fave colour */

/* declaring variables for colours and assigning their psychological meaning to them */
var orange;
var green;
var brown;
var purple;
purple = ("Purple is the color of the imagination. It can be creative and individual or immature and impractical.");
var black;
var gray;
var white;
var yellow;
var red;
var blue;


/* having user enter fave colour */
var faveColour;
faveColour = prompt("Now lets see what you will wear today by you entering your favourite colour! But...." +
    "please only enter one of the folowing colours: orange, purple, green, blue, red, white, black, gray, or yellow and press enter." + "" + yourName + "."  +
    "so we can make this decision quite quickly bc we cant have you being late for work today! ");
if(faveColour === "orange")
{
    alert("");
}
else if(faveColour === "purple")
{
     alert(purple);
}
else if(faveColour === "red")
{
    alert("Red is the color of energy, passion, action, ambition and determination. It is also the color of anger and sexual passion.");
}
else if(faveColour === "brown")
{
    alert("The color brown is a friendly yet serious, down-to-earth color that relates to security, protection, comfort and material wealth. ")
}
if(faveColour === "blue")
{
    alert("Blue is the color of trust and peace. It can suggest loyalty and integrity as well as conservatism and frigidity.  ")
}
 else if(faveColour === "green")
{
    alert("Green is the color of balance and growth. It can mean both self-reliance as a positive and possessiveness as a negative, among many other meanings. ")
}
else if(faveColour === "yellow")
{
    alert ("yellow is the color of the mind and the intellect. It is optimistic and cheerful. However it can also suggest impatience, criticism and cowardice.")
}
else if(faveColour === "white")
{
    alert("White is color at its most complete and pure, the color of perfection. The color meaning of white is purity, innocence, wholeness and completion. ")
}
else if(faveColour === "black")
{
    alert("Black is the color of the hidden, the secretive and the unknown," +
        " creating an air of mystery. It keeps things bottled up inside, hidden from the world. ")
}
else if(faveColour === "gray")
{
    alert("From a color psychology perspective, gray is the color of compromise - " + "\n" +
        "being neither black nor white, it is the transition between two non-colors. It is unemotional and detached and can be indecisive.");
}
else
{
    alert("Please choose from the optional colours: red, blue, orange, green, yellow, brown, black, gray, or white.");
}


/* goodbye */
var theEnd;
theEnd = alert("Thank you for participating today," + "" + yourName + "" + goodBye + ".");