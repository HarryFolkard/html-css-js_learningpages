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