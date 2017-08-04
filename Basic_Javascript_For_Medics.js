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

// basic operators
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

var bankBalance = "100";
bankBalance // this will return 100

var name = "Clin_Dev: "
name // this will return "Clin_Dev: "

alert(name + bankBalance)
// this will bring up another alert which says "Clin_Dev: 100" They are very useful to check your work

var blob // this will return undefined
var blobby = null; // this will return null

// to output to the console

console.log("The Clin_Dev is Stuck in the Console") // This will print to the console

// prompt

prompt("Enter your age: ") // This will output to the browser with a text dialogue box which will return the entry to the console

// to save it as a variable

var age = prompt("Enter your age: ") 
age // this will then call the prompt and return the value to the console

