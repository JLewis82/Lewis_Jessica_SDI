/*
Miss Jessica Lynne Lewis
SDI
Week 1 Output Assignment
 */

/*declaring basic variables used throughout this script*/
var welcomeGreet;            //variable to greet user
welcomeGreet = "Welcome";    //variable states welcome to the user
var y;                       //variable for true boolean or yes
y = true;                    //true boolean
var n;                       //variable for false or no boolean
n = false;                   //false boolean

/*getting to know the user*/
var firstName;                                           //declaring the variable
firstName = prompt("What is your first name?");          //using the declared variable to prompt user input
alert(welcomeGreet + firstName + ".My name is Jessica"); //using the greeting variable + the users inputted name variable


var lastName;
lastName = prompt("What is your last name," + firstName + "?");
alert("I like your name," + firstName + lastName + "." + "My last name is Lewis");

/* asking the user random questions */
var myCar;
myCar =prompt("Do you have a car? Y/n");
console.log( "I drive a Honda Civic");


var carYear;
carYear = prompt("What year is your car?");
var myCaryear;
myCaryear = 2005;
console.log( carYear + "isn't very old. My car is a" + myCaryear + ".");



var faveColour;
faveColour = "grey";
var yearofBirth;
yearofBirth = 1982;
var parentMom;
parentMom = "single mom";
var myJob;
myJob = "Freelance Web Dev";
var myOccupation;
myOccupation = "Student";

console.log ("Here is a little about myself. I am a" + parentMom + "and" + myJob + "."
    + "I was born in" + yearofBirth + "and my favourite colour is" + faveColour + ".");