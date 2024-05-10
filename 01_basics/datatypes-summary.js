// there are 2 types of datatypes 
// 1. primitives datatypes
    // there are 7 types in primitives 
        // [String | Number | Boolean | null | undefined | Symbol | BigInt]
        // Symbol - it basically used in advance js when we work with front end development then we want to make some component unique then we will use this datatype


// 1. Non-primitives datatypes (This is also Known as Reference Datatypes)
    // There are 3 types of Non-primitives datatypes 
        // [Array | Objects | Functions]

// Array example
 let heros = ["Batman", "Superman", "Iron Man", "Captin America", "Hulk", "Docter Stange", "Mysterious", "Harry Porter"];

//  objects
let myBio = {
    name: "Garvit Sharma",
    age: 20,
    qualifications: "BCA",
    collegeName: "Mohyal Educational & Research Technology of Institute",
}

// function
const additionFunction = function () {
    console.log("Hello World!! This is my first small function");
}

// learn about memories
// there are 2 types of memory 
    // heap and stack memory

// stack memory uses only in primitive data = iss stack memory ka data jab bhi change ya update hota hai toh uski data copy m hota hai original data pr koi imapct ni hota
// example
let user_name = "Garvit Sharma";
let role = user_name;
// console.log(role);
role = "Web developer";
// console.log(role);
// console.log(user_name);
// heap memory uses only in non primitive data
// heap memory m jo data hota hai usme uss data ka reference milta hai aur uss reference se data ki original value change ya update hoti hai
// example
let employeeOne = {
    employeeName : "Garvit Sharma",
    Age : 20
}

let employeeTwo = employeeOne;
employeeTwo.Age = 22;
console.log(employeeOne.Age);
console.log(employeeTwo.Age);

