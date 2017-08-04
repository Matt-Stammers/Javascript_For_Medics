// This is a JS comment, remember <!-- is for HTML and /* is for CSS
// This guide is going to assume some very basic understanding & I recommend sololearn app or codeacademy to get started with JS

alert("Welcome Clinical Developer!")

// we have our first peice of Javascript code. If you enter this into the chrome browser console it will come up with an alert.
// try this out in incognito mode if you are logged into gmail

// Ok so JS Datatypes first:

// JS doesn't have floats and int's, just numbers as above

10
10.4
- 19.66

// These are JS strings

"10"
"10.4"
"Welcome Clinical Developer!"

// JS Booleans are lower case

true
false

// these are other datatypes in JS

undefined
null

// basic math operators
// sum, subract, mult, divide, exponentiation & multiply all apply the same as per python
// try them out in the consule in the developer environment of your chrome browser go to settings, more tools and dev tools to get this up
// or you can use an alternative JS programming environment

1+1
1-1
3*4
2/7
2 ** 2
14%2

// string concatenation

"Django" + "is awesome"

// length

"Django".length // will return 6

// \n will start a new line

"Django /n is awesome"

// \t will act as a tab in the same manner
// \ will also escape special characters

"Django quote: \"it's awesome\" said the clin_dev"

// indexing is also 0 based indexing as per python, so to grab the letter g from the above

"Django quote: \"it's awesome\" said the clin_dev"[4]

// variable assignment
// var varName = value; Note snake_casing is heavily discouraged so use camelCasing - see bwelow

var bankBalance = "10000";
bankBalance // this will return 10000

var name = "Clin_Dev: "
name // this will return "Clin_Dev: "

alert(name + bankBalance)
// this will bring up another alert which says "Clin_Dev: 10000" They are very useful to check your work

var blob // this will return undefined
var blobby = null; // this will return null

// to output to the console

console.log("The Clin_Dev is Stuck in the Console") // This will print to the console

// prompt

prompt("Enter your age: ") // This will output to the browser with a text dialogue box which will return the entry to the console

// to save it as a variable

var age = prompt("Enter your age: ") 
age // this will then call the prompt and return the value to the console

// ok so lets create our first mini JS program that will run in the browser it will be a very simple kg -> lbs converter
// you need an HTML file and then connect the seperate JS script (see youtube for this) in the order we want it to be executed
var kg = prompt("Weight in kgs?");
var lbs = kg/0.454;
alert("That is: "+lb+" pounds");
console.log("Conversion Complete!");

// see JS is nice and simple ;)

// ok so now some more on basic operators

2 < 4 // is true
5 > 6 // is false
6 >= 6 // is true
2 == 2 // is true BUT there is a quirk here

// so the above made sense but what about this

"2" == 2 // RETURNS TRUE!!! This is very unusual, to fix it you add ===
"2" === 2 // returns false now as you would expect. This is an example of type coercion

// the same is true of inequality:

"5" != 5 // false
"5" !== 5 // true

// some more examples

true == 1: // returns true
true === 1 // returns false

// null, NaN and undefined

null == undefined // this is true
null === undefined // this is false
NaN == NaN // this will return false - again this is another quirk with JS

// logical operators

8 === 8 && 99 === 99; // AND returns true if both are true
99 === 2 || 2 === 2; // OR returns true if either is true
!(4 === 4) // NOT operator in this case will return false
!!(4 === 4) // NOT operator in this case will return true! This is bad programming but it is functional

// If statements and control flow

if(true){
  console.log("Code is Running in the Console");
}

// ok so that was a very basic example lets make it a bit more complex

var febrile = false;
var patient = 36;
var hot = 37.5;
var veryHot = 39;

if (patient>hot){
  febrile = true;
}else{
  febrile = false;
}

console.log(febrile) // this will return false

// ok so lets make this contain an else if:

var febrile = false;
var patient = 39;
var hot = 37.5;
var veryHot = 39;

if (patient>veryHot){
  console.log("The patient is very febrile");
}else if (patient>= hot && patient <= veryHot{
  console.log("The patient is febrile but not extremely so");
}else{
  console.log("The patient does not have a fever");
}

// This code will return the middle condition because the pt temp is just below the verHot condition
// ok but how do we now combine the variable and control flow so we have an assigned variable

var febrile = false;
var patient = 39;
var hot = 37.5;
var veryHot = 39;
var patientReport = "blank";

if (patient>veryHot){
  patientReport = "The patient is very febrile";
}else if (patient>= hot && patient <= veryHot{
  patientReport = "The patient is febrile but not extremely so");
}else{
  patientReport = "The patient does not have a fever";
}

console.log(patientReport)

// voila - this forms a much better way to print to the consle. We will see the value of this later on.
