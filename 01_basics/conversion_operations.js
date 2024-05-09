let num = 22;
let another_num = null; // when we asign null value in this variable then it will show me 0 as a output, but when we asign undefined value in this variable it will show NaN,
console.log(typeof num);
console.log(typeof (another_num));

// convert this "another_num variable into int type"
let changedValue = Number(another_num);
// now we can check this our variable type changed or not
console.log("this is your changed value type : "+typeof (changedValue)); // it will successfully change "string type to number type"
// now we can check the output of changed value

// it will not show thw value in the output, it shows NaN which means this is not a number we can forcely changed their type..
console.log(changedValue);

// print the first variable
console.log(num);


// conclusion

//"33" => 33  | string = number
//"33abe" => NaN  | 
//true => 1  | false => 0


// convert number into boolean
let isLoggedIn = 1;
let convertValue = Boolean(isLoggedIn);
console.log(convertValue);

// 1 => true | 0 => false | "" => false | "Garvit" = true

let first_value = 2311;
let convertString = String(first_value);
console.log(convertString);
console.log(typeof (convertString));


// ************************************ | OPERATIONS | **************************************************

// convert positive value into negative value
let value = 12;
let negative_value = -value;
console.log(negative_value);
console.log(typeof negative_value);

let firstNum = 2;
let secondNum = 3;

// addition
console.log(firstNum + secondNum);

// subtraction
console.log(firstNum - secondNum);

// multplication
console.log(firstNum * secondNum);

// division
console.log(firstNum / secondNum);

// modulo - it will show us reminder value 
console.log(firstNum % secondNum);

// square 
console.log(firstNum ** secondNum);

// concatinate the values
let str1 = "Hello ";
let str2 = "Garvit Sharma";
let concatValue = ( str1 + str2 );
console.log(concatValue);


// prefix and postfix
// this is a postfix
// It will increase the value of X firstly then they gives to Y variable.
let x= 3;
const y = x++;
console.log("X : "+ x); 
console.log("Y : "+ y);

// This is prefix
// In this incearse a value and asign both of the variale .
let a = 1;
const b = ++a;
console.log("A : "+ a);
console.log("B : "+ b);
