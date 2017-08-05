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
