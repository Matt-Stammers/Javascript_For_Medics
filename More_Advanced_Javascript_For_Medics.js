// Ok so let's start with functions

// you can then call the function in the console as hello() if you put hello alone it will return just the function details

function hello(){
  console.log("hello Clin_Dev!");
}

// this one will accept the input and return that to the console as well, so helloClinDev(Matt) will return "Hello Matt")

function helloClinDev(name){
  console.log("Hello "+ name);
}

// this one will multiply the numbers but beware because of type coercion!

function multNums(num1,num2){
  console.log(num1*num2);
}

// this one contains a default setting. This can be achieved as below:

function helloPerson(name="Jonno") {
  console.log("Hello "+name);
}

// if a value is named that will override the default. Otherwise the default will be presented

// ok so let's make it a bit more complicated. Now we need to use return or it will fault

function formal(title="Clin_Dev", name="Jonno") {
  return title + " " + name
}

// this one will now work when called in the console with or without the arguments
// this one will multiply any number by ten.

function timesTen(num) {
  var times = num * 10
  return times
}

// when you call it in the console or say var result = timesTen(10), then request result you will get 100
// note the scope of times is local only to the function

// ok so let's move onto arrays now
// say we wanted to store some variables in a much more convenient fashion
// arrays, like python lists are a great way to achieve this

var clinDev1 = "Frontend"
var clinDev2 = "Backend"
var clinDev3 = "Data Science"

// the above is not in an array, so lets make one

var clinDevs = ["Frontend", "Backend", "Data Science"]

// there you go they are all stored in an array now
// indexing again starts at 0 as per string indexing.

clinDevs[2] // will return Data Science

// note ararys in JS are mutable
// so...

clinDevs[1]= "UX"

// this has now changed backend to ux in the array

// however

clinDev2[0] = "P"

// this will not work as strings are immutable in JS
// arrays in JS can take in anything:

var funArray = [20, "70", false]
funArray.length

// arrays will return the length as the number of items, in this case 3.
// how do we remove an item from an array?

funArray.pop()

// this will remove the last value from the array

funArray.push(true)

// this will achieve the opposite
// arrays can also be nested like python lists

var matrixArray = [[1,2,3],[1,2,3],[1,2,3]]

// this has length 3 so don't be fooled
// iterating through arrays

for(var i = 0;i<arr.length;i++){
  console.log(arr[i]);
}

// this is one way to do it
// or you can use:

for (number of arr){
  console.log(letter);
}

// nice, note that if you want to manipulate the for of loop you can do the following:

for (number of arr){
  console.log("Welcome Clin_Dev");
}

// this will instead print "Welcome Clin_Dev" to the console 4 times
// or if you wanted to do an alert:

for (letter of arr){
  alert(letter);
}

// or:

arr.forEach(alert); // aha, an even more efficient built in method!
// ok so another example of this

function addGreat(name){
  console.log(name+" is Great!");
}

addGreat("JS")

// this will return "JS is Great"
// but let's now combine the function call with an array to make it even more powerful

var languages = ["Python", "JS", "R"]
languages.forEach(addGreat)

// haha, now we're cooking on gas - this process is much more scalable than tediously writing out each function call

// finally we need to talk about JS objects - they are similar to dictionary 'objects' in other languages

var carInfo = {make:"Ford",year:2000, model"Focus"}:
carInfo["make"]

// when you call the object you need to reference it as a string. This is different to in Python

var myObject = {a:"Yo", b:[2,3,4],c:{inside:['a','c']}};
myObject['b'][1]
myObject['c']['inside'][0]

// this will return 3 and 'a' once again nesting can occur at multiple levels
// ok lets change one

var myObject = {a:"Yo", b:[2,3,4],c:{inside:['a','c']}};
myObject['b'][1] = 100
myObject['b'][1] += 1

// this will first change the 3 contained in 'b' to 100 and then increment it by one
// this will only work on a number
// to show the whole object call:

console.dir(myObject)

// this can then be expanded.
// ok so iterating through - note they are inherently unordered like in Python

for (key in myObject){
  console.log(key);
}

// doesn't actually have to be key, could be any letter but key is readable
// to acces the items as well:

for (key in myObject){
  console.log(key);
  console.log(myObject[k]);
}

// viola. Ok so now on to an even cooler topic - object methods
// these are functions effectively within an object!

var basic = {
  property : "Hello",
  myMethod: function(){
    console.log("The myMethod was called")
  }
}

// if you call this alone it won't work but you can see the method within basic

basic.myMethod()

// this will now execute the function and say that the myMethod was called.
// however we need to add this:

var myObj = {
  name : "Matt"
  greet: function(){
    console.log("Hello " + this.name)}}
    
myObj.greet()

// Woohoo, it's working - you now know all you need to know to get started with JS in frontend web-development
  
