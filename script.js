/*Defining Variables
no need to ever define a type, js works it out for you, hence just use*/
var x = 10

/*Defining Functions*/
function a () {} /*or*/ var a = function () {}
/*note that in the second way the value of the function is assigned to a, 
not the returned result of the function. 
these are two equivalent methods of calling a function 'a'.*/

/*Invoking (Executing) function*/
a();

/*Functions*/
function compare (x, y) {
  return x > y;
}
var a = compare(4,5);
/*so here we are defining a function called compare which returns the highest number of two numbers.
then we are storing the comparasion of 4 and 5 as variable a*/

/*Scope*/
/*what matters is where a function is defined, not where it is executed. 
if a function (that calls on some variable x) is defined globally but initiated elsewhere, 
the computer will look for the variable called in the function in the global scope,
not the scope where the function was executed.*/
var message = "in global";
console.log("global: message = " + message);

var a = function () {
    var message = "inside a";
    console.log("a: message = " + message);
    b();
}

function b () {
    console.log("b: message = " + message);
}

a();
/*
- when we execute a(); the function a creates its own scope 
and we defined its own message in that scope, so that message is what is printed 
(even though we called a() globally).
when we call b() it has no message in its own scope, hence the computer looks in its outer scope (global)
and so we get the variable message from the global scope: message = "in global" instead.
- if we defined function b inside function a, then b's outer reference is a's variable scope, so 
b(); will execute the message = "inside a".*/

/*Types*/
/*a type is a particular data structure. 
js has seven built in types*/
  /*Object Types*/
    /*is a collection of name/value pairs.*/
  /*Primitive Types*/
    /*represents a single, immutable value.*/
    /*Boolean (true or false); Undefined (sets up variable in memory but sets value as 'undefined'); 
    Null (lack of value); Number (only numeric type in js always double-precision 64 bit); String
    (sequence of characters, use "" or ''); Symbol (this is new).*/
    var x; 
    /*== undefined. note that undefined and not defined are two different things!! here x has been declared but has no value,
    so it is undefined. if the variable had never been declared it would be not defined.*/

/*String Concatination*/
var string = "Hello";
string += " World";
console.log(string + "!");
/*So here the use of += adds "World" to our string that already conatins "Hello"*/

// Maths Operators
console.log((5 + 4) / 3);
// these work pretty much exactly as you would expect they do.

// Equality
var x = 4, y = 4;
if (x == y) {
  console.log("x=4 is equality to y=4");
}
// just use double equals signsl - nothing special here!

// Strict Equality
if (x === y) {
  console.log("Strict: x=4 is equal to y=4");
}
else {
  console.log("Strict: x=4 is not equal to y=4")
}
// the triple equals sign stops js from doing 'type conversion'
// e.g. converting x = "4" (a string) to x = 4 (an integer).

// Truth and Falsity
if ( false || null || undefined || "" || 0 || NaN) {
  console.log("This won't ever execute");
}
if ( true && "hello" && 1 && -1 && "false") {
  console.log("All true");
}
// || means or, && means and 

// For loop
var sum = 0;
for (var i = 0; i < 10; i++) {
  sum = sum + 1
}
console.log("sum of 0 through 9 is: " + sum);

// Default values
function orderChickenWith(sideDish) {
  sideDish = sideDish || "nothing";
  console.log("Chicken with " + sideDish);
}
orderChickenWith("noodles");
orderChickenWith();
// so here the || is a shortcut since if the user didn't enter a side dish, rather than
// js noting there is an undefined variable and forcing through the string "undefined" to print
// we just get the output "Chicken with nothing".

// Object Creation
var company = new Object();
company.name = "Tesco";
company.ce = new Object();
company.ceo.firstName = "John";
company.ceo.favColour = "blue";

console.log(company["name"]);
console.log(company.name);
// why are there two ways of calling the values of the object?
// just incase you want to use special signs or spaces or a variable then use the bracket notation
company["stock of company"] = 110;

// Neater Object Creation
