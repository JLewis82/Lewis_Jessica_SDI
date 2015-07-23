/**
 * Created by Miss_Jessica_Lynne on 7/17/15.
 */
/* basic variables */
var yes;                                                            //declaring a variable
yes = true;                                                         //assigning boolean variable for true
var no;                                                             //declaring a variable
no = false;                                                         //assigning boolean variable for false
var welCome;                                                        //declaring a variable
welCome = alert("Welcome to todays weather! We will review your " +
    "daily forcast to make sure you are prepared for your day!");  //adding a string to the variable to welcome the user

/* asking user for their name and location */
var yourName;                                                                       //declaring a variable
yourName = prompt("Please enter your name so I know how to properly address you."); // asking the user to input their name
alert(" Thank you very much" + "," + yourName + ".");                               // thanking the user for their input using a popup

/* the weather using if/else */
var theWeather;                                                          //declaring a variable
theWeather = prompt(yourName + "," + "" + "Is it raining outside? y/n"); //assigning a prompt with a string asking the user the current weather
if (theWeather == yes)                                                  // using if/else to alert the user depending on their response to the type of weather
{
    alert("Don't forget your umbrella!");                               // if user responds with a yes use this alert
}
else                                                                   // if user responds with anything else besides yes alert them this
{
    alert("Don't forget your sunglasses!");
}

/* temperature using if with && */
var theTemp;                                                                                     //declaring a variable
theTemp = prompt(yourName + "," + "Please enter the current temperature in numeric form...");    //assigning a prompt for the user to enter their current outside temp

if (theTemp <= 40)                                                                              //if the temp is equal or less than 40 degrees
{
    console.log("Wow! Seems to be a bit past cold for this time of year! Dont forget your turtleneck!");
}
if ((theTemp > 40) && (theTemperature <= 60))                                                   //if the temp is greater than 40 but equal or less than 60 then alert this
{
    console.log("Seems like today is a cool day. Might want to grab your jacket!");
}
if ((theTemp > 60) && (theTemperature <= 80))                                                  //if the temp is greater 60 but equal to or less than 80 then alert this
{
    console.log = ("Ah! It is a warm day! Lets not forget your sunglasses!");
}
if ((theTemp > 80))                                                                            //if the temp is greater than 80 then alert this
{
    console.log("Sounds like its hot outside! Lets try to loiter around the AC at work today!");
}

/* using "if" with "else if" to ask the user their fave colour */
//declaring variables for colours and assigning their psychological meaning to them

var orange; //declaring a variable
orange = ("really? orange?!"); // assigning a string to the variable

var green; //declaring a variable
green = ("Green is the color of balance and growth. It can mean both self-reliance " +
"as a positive and possessiveness as a negative, among many other meanings. ");// assigning a string to the variable

var brown; //declaring a variable
brown = ("The color brown is a friendly yet serious, down-to-earth color " +
"" + "that relates to security, protection, comfort and material wealth. "); // assigning a string to the variable

var purple; //declaring a variable
purple = ("Purple is the color of the imagination. It can be creative and " +
"individual or immature and impractical."); // assigning a string to the variable

var black; //declaring a variable
black = ("Black is the color of the hidden, the secretive and the unknown," +
" creating an air of mystery. It keeps things bottled up inside, hidden from the world. "); // assigning a string to the variable

var gray; //declaring a variable
gray = ("From a color psychology perspective, gray is the color of compromise - " + "\n" +
"being neither black nor white, it is the transition between two non-colors. " +
"It is unemotional and detached and can be indecisive."); // assigning a string to the variable

var white; //declaring a variable
white = ("White is color at its most complete and pure, the color of perfection." +
" The color meaning of white is purity, innocence, wholeness and completion. "); // assigning a string to the variable

var yellow; //declaring a variable
yellow = ("yellow is the color of the mind and the intellect. It is optimistic and cheerful. " +
"However it can also suggest impatience, criticism and cowardice."); // assigning a string to the variable

var red; //declaring a variable
red = ("Red is the color of energy, passion, action, ambition and determination. " +
"It is also the color of anger and sexual passion."); // assigning a string to the variable

var blue; //declaring a variable
blue = ("Blue is the color of trust and peace. It can suggest loyalty and " +
"integrity as well as conservatism and frigidity.  "); // assigning a string to the variable


/* having user enter fave colour */
var faveColour; //declaring a variable
faveColour = prompt("Now lets see what you will wear today by you entering your favourite colour! But...." + "\n" +
    "please only enter one of the folowing colours: orange, purple, green, blue, red, white, black, gray, or yellow " +
    "and press enter" + "," + "\n" + "" + yourName + "."  + "\n" +
    "so we can make this decision quite quickly." + "\n" + "" + "We cant have you being late for work today! ");

/* variables and assigning strings for optional colours while using else/if */
if(faveColour === "orange")
{
    alert(orange);
}
else if(faveColour === "purple")
{
     alert(purple);
}
else if(faveColour === "red")
{
    alert(red);
}
else if(faveColour === "brown")
{
    alert(brown);
}
if(faveColour === "blue")
{
    alert(blue);
}
 else if(faveColour === "green")
{
    alert(green);
}
else if(faveColour === "yellow")
{
    alert (yellow);
}
else if(faveColour === "white")
{
    alert(white);
}
else if(faveColour === "black")
{
    alert(black);
}
else if(faveColour === "gray")
{
    alert(gray);
}
else
{
    alert("Please choose from the optional colours: red, blue, orange, green, purple, yellow, brown," +
        " black, gray, or white," + "" + yourName + "" + "\n" + "Otherwise this script will not work. Thank you!");
}

/* The weather confirm using ternary conditional if/else */
var letsConfirm; //declaring a variable
letsConfirm = confirm(" ok so it is definitely" + "" + theTemp + "" + "outside right now? y/n");

if (theTemp != yes)
{
    console.log("It is " + (theTemp >= 90 ? "HOT!" : (theTemperature > 50 ? "NICE!" : "COLD!")))
}
else
{
    console.log("I think there was an error. Lets try this again");
}



/* confirming the correct fave colour before letting user exit site */
var letsConfirm2; //declaring a variable
letsConfirm2 = confirm( " Now lets confirm that" + "" + faveColour + "" + "is your fave colour? yes/no and click ok.");
if (faveColour == yes)
{
    console.log("So your fave colour is:" + "" + faveColour + "?" + "I hope so bc I love that colour!");
}
else
{
    console.log("I think there was an error. Lets try this again");
}



/*  initiating a goodbye */
var theEnd; //declaring a variable
theEnd = alert("Thank you for participating today" + "," + "" + yourName + "" + goodBye + ".");