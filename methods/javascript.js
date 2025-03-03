// *********** Distructuring************

let [fst, , , ...last] = ["a", "b", "c", "d"];

console.log(fst);
console.log(last);

// ************swapping from distructuring.************

let x=4,y=8;
console.log(x," ",y);

[x,y]= [y,x];
console.log(x," ",y);

// ************ Function Distructuring***********

function distructuring(){
    return ["a", "b", "c", "d"];
}
let [fst1 , ...lst] = distructuring();
console.log(fst1);
console.log(lst);

// ************ Object Distructuring***********

let marks = { x: 16,y:36,z:35};

const {  a,b,c}= marks;
console.log(a);
console.log(b);
console.log(c);

// ************ Nested Object Distructuring***********

const detail = {
    name: "satish",
    address:{
        country:"india",
        city: {
            pincode:"274402",
        }

    }
};
let {name}= detail;
console.log(name);

let {address:{country: xyz}}= detail;
console.log(xyz);

let {address:{city:{pincode:abc}}}= detail;
console.log(abc);

// ************ Rest Operator************8
// Think of the rest operator as a collector. It gathers items together into a group (an array) when you don't know how many items you're going to get.

// *********** Example:- **********
// Imagine you have a basket, and people keep giving you different fruits. You don't know how many fruits you'll get, so you just collect them all in the basket.

//*********** Example-Code:- ***********

function collectFruits(...fruits) {
    console.log(fruits);
}

// *************** Output:- *****************

// collectFruits('apple', 'banana', 'orange'); // Output: ['apple', 'banana', 'orange']

// **************  Spread Operator *************
// Think of the spread operator as a spreader. It takes a group of items (an array or an object) and spreads them out into individual elements.

// ************************Example:- *********************

// Imagine you have a basket full of fruits, and you want to lay them out on the table individually.

// ****************** Example-Code *********************

const fruit = ['apple', 'banana', 'orange'];
const allFruits = [...fruit, 'mango', 'grape'];
console.log(allFruits);

// ******************** Output:- ************************

//  ['apple', 'banana', 'orange', 'mango', 'grape'

// **************** Key Difference ****************

// ***Rest Operator:***

// Collects items into an array.
// Used in function parameters.
// Example: function(...args) {}

// ***Spread Operator:***

// Spreads items out into individual elements.
// Used in function calls, array literals, or object literals.
// Example: [...array] or {...object}

// *****************JS Hoisting********************

function hoist(){
    x = 55;
    let y = 87;
    console.log(y);
}
hoist();
console.log(x); //run successfully
console.log(y); //show error

// ******************string methods************

let str = "hello world";
var str1 = str.toUpperCase();
console.log(str1); //HELLO WORLD

var str1 = str.toLowerCase();
console.log(str1); //hello world

var str1 = str.substring(2,6);
console.log(str1); //llo

var str1 = str.charAt(4);
console.log(str1); // o

var str2 = ['hello','world'];
var str3 = str.split("");
console.log(str3);
 [
    'h', 'e', 'l', 'l',
    'o', ' ', 'w', 'o',
    'r', 'l', 'd'
  ]

var str1 = str.indexOf('r');
console.log(str1); //8

var str1 = str.big();
console.log(str1); //<big>hello world</big>

var str1 = str.bold();
console.log(str1); //<b>hello world</b>

var str1 = str.italics();
console.log(str1); //<i>hello world</i>

var str1 = str.small();
console.log(str1); //<small>hello world</small>

var str1 = str.sub();
console.log(str1); //<sub>hello world</sub>

var str1 = str.sup();
console.log(str1); //<sup>hello world</sup>

let sentence = "i am beginner in web development. I still learning.";

let text = sentence.search("still"); //search the words.
console.log(text);

text = sentence.replace("web development","java script"); //replace the words.
console.log(text);

//***************JS Map Method******************

const fruits = new Map([
    ['apple',500],
    ['mango',200],
    ['lichhi',200]
]);
console.log(fruits);
fruits.set('banana',100); // append the elements.
console.log(fruits);
console.log(fruits.size);
console.log(fruits.get('lichhi'));// return the value of the data.
fruits.delete('lichhi'); //delete the elements.
console.log(fruits.size); // return the size of elements
console.log(fruits);
console.log(fruits.has('mango')); //return elements exists or not{ return "true" or "false"}.
fruits.clear(); // delete all elements.
console.log(fruits);

//*****************JS Set Method*******************8

const letter = new Set(['a','b','c']);
console.log(letter);;
letter.add('d');// append the elements
console.log(letter);;

//******************* JS Date Method********************8

console.log(new Date());

console.log(Date.parse("23 Mar 2022"));

const d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getTime());
console.log(d.getDay());

// ************** JS Array **********************

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(arr.length);

arr.push(11);
arr.pop(55);

arr.shift();
arr.unshift();

let arr1 = [1,2,8,7,5,3,4,6,9];
console.log(arr.concat(arr1));

console.log(arr.slice(1,5));

console.log(arr1.splice(5,1));

console.log(arr1.indexOf(7));

console.log(arr.includes(16));

console.log(arr.includes(10));

var res = arr.forEach(function (values) {
    console.log(values);

});
console.log(res);

var res = arr.map(x =>x+3);
console.log(res);

var res = arr1.filter(x =>x*3);
console.log(res);

var res = arr.reduce((a,b) => a+b);
console.log(res);

var res = arr1.find(x=>x>2);
console.log(res);

console.log(arr1.sort());
console.log(arr.reverse());

var res = arr1.join('=>');
console.log(res);

var res = arr.flat();
console.log(res);

//************ Practice Question 1*****************

function squarenum(numbers){
    let res = 0;
    numbers.forEach(values => {
        res = values*values;
    });
    console.log(res);
}
let numbers = [2,3,4];
squarenum(numbers);
// console.log(result);

function calculateSquareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i]; // Calculate the square and add to the sum
    }
    return sum;
}

const data = [2,3,4];
const result = calculateSquareSum(data);
console.log("The sum of squares is:", result);


//************ ERRORS *****************

// syntax: =>
try{
    //function block 
}
catch(err){
    // console.log(err.message);
    
}
console.log(Date());