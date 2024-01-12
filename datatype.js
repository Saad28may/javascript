let score = true;

console.log(typeof(score));

let changeToNumber = Number(score);

console.log(typeof(changeToNumber));

/*Primitive Data Types
7 types
1.Number
2.String
3.Null
4.Undefined
5.Boolean
6.Symbol
7.BigInt

Non Primitive (Reference)
1.Array
2.Objects
3.Functions

Stack and Heap Memory

Stack memory are used in primitive data types.

In stack you get the copy of the variable actual variable don't change.
Example:
*/
let nameOne = "Saad";
let nameTwo = nameOne;

nameTwo = "Hassan";

//console.log(nameOne);
//console.log(nameTwo);

/*
But in heap you get the reference So the actual variable changes.
Example:
*/
let userOne ={
    username : "Saad" ,
    email : "saad@gmail.com"
}

let userTwo = userOne;

userTwo.email = "hassan@hotmail.com";

console.log(userOne.email);
console.log(userTwo.email);