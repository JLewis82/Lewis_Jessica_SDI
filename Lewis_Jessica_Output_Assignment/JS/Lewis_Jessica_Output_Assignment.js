/*
Miss Jessica Lynne Lewis
SDI MDV2330-O
Week 1 Output Assignment
 */

/*declaring basic string and boolean variables used throughout this script*/
var welcomeGreet;                                  //variable to greet user
welcomeGreet = "Welcome";                          //variable states welcome to the user
var goodBye;                                       // declaring a variable for goodbye
goodBye = "Thank you for your input. Goodbye!";    // string for a departure greeting
var aboutMe;                                       // declaring the variable for info about me
aboutMe = "Here is a little information about me:";//assigning the variable a string
var y;                                             //variable for true boolean or yes
y = true;                                          //true boolean
var n;                                             //variable for false or no boolean
n = false;                                         //false boolean

/*getting to know the user*/
var firstName;                                           //declaring the variable
firstName = prompt("What is your first name?");          //using the declared variable to prompt user input
alert(welcomeGreet + "," + firstName + ".My name is Jessica"); //using the greeting variable + the users inputted name variable

var lastName; //declaring the variable for user's last name
lastName = prompt("What is your last name," + firstName + "?");//prompting the user to enter their last name
alert("I like your name" + "," + firstName + lastName + "." + "My last name is Lewis.");
// telling the user my last name while including the variables for their first and last name that they input

/* asking the user random questions */
var myChild;                                                  //declaring the variable for the users child(ren)
myChild =prompt("Do you have a child or children? Enter y/n");// prompting the user to input if they have children or not
alert( "Thank you" + "" + firstName + ". I have a 7yr old daughter.");              //telling the user that I have a child

var carYear;                                         //declaring variable for the users vehicle
carYear = prompt("What is the year of your vehicle");//prompting the user to input the year of their car
var myCar;                                           // declaring the variable for my own car
myCar = 2005;                                        //assigning the number year of my car to the variable
alert("Interesting! My car is a" + myCar + ".");     //telling the user what the year of my my car is


/* A little info about me */
var faveColour;                          //declaring the variable for a favourite colour
faveColour = "grey";                     //assigning the colour value to the variable
var yearofBirth;                         //declaring the variable for my year of birth
yearofBirth = 1982;                      //assinging a number to the variable for my year of birth
var myJob;                               //declaring the variable for my job
myJob = "Freelance Web Dev";             //assigning the variable my job
var myOccupation;                        //declaring the variable for my daily occupation
myOccupation = "Student";                //assigning the variable for my occupation
alert ( aboutMe + "" + "I am a" + "" + myJob +
    ". I was born in" + "" + yearofBirth + " and my favourite colour is" + "" + faveColour + "."); //Concatenated string with the above listed variable to output to the user

/* Goodbye message */
console.log("This concludes todays conversation!" + goodBye); //displaying the goodbye message to the user in the console versus the alert popup
