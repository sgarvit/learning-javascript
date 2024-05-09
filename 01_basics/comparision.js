// Now we can learn about [greater than (>) | less than (<) | equals to (==) | greater than equals to (>=) | less than equals to (<=) | not equals to (!=)]

// do some tricky 
console.log("2" > 2); //false
console.log("2" < 2); //false
console.log("2" <= 2); //true
console.log("2" >= 2); //true
console.log("2" == 2); //true
console.log("2" === 2); //false
console.log("2" == "2"); //false

// **The main point is greater than and equals to will works  differently and it will show different result..**

// null
console.log(null > 0); // false beacuse comparison will convert this null value into number (0) and 0 is not greater than 0
console.log(null == 0); // false this is also gives us false 
console.log(null >= 0); // true

// undefined
console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// NaN
console.log(NaN > 0); // false
console.log(NaN == 0); // false
console.log(NaN >= 0); // false