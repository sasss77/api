const name = "John";   //cannot be reassigned or redeclared
// name = "Doe"; //cannot change
let age = 30;
// let age = 30; //cannot redeclare
var city = "New York";
var city = "Pokhara"; //can be reassigned and redeclared
city = "Lalitpur";
console.log(name, age, city);

//HOSTING
console.log(country);

if (true) {
    // let, const -> blocked scope
    let firstName = "Ram";
    const lastName = "Bahadur";   
    var country = "Nepal";  // function soped or global scoped
    console.log(firstName, lastName, country);

}

console.log(firstName, lastName); //error: not defined
console.log(country); //can be accessed outside the block


// common data types
const stringVar = "HelloWorld"; //String '', ""
const numberVar = 40; // number or float 50.1
const booleanVar = true; //boolean true or false
const nullVar = null; //intentional empty
const undefinedVar = undefined; //variable declared but not assigned
const symbol1 = Symbol("Saugat"); //unique and imutable
const symbol2 = Symbol("Saugat"); //unique and imutable
console.log(symbol1 == symbol2);


console.log(stringVar, typeof stringVar);
console.log(numberVar, typeof numberVar);
console.log(booleanVar, typeof booleanVar);
console.log(nullVar, typeof nullVar);
console.log(undefinedVar, typeof undefinedVar);
console.log(symbol1, typeof symbol1);

// =, ==, ===
const num1 = 5;
const num2 = "5";
console.log(num1 == num2);
console.log(num1 === num2);


//collection/list
const array = [1, 2, 3, true, null, "four"];
array.push("saugat");  //add elements at the end
array.unshift(0);  //add element at the beginning
console.log(array);
array.pop(); //removes last element
array.shift(); //remove first element
console.log(array);


//iteration
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//for in loop -> iterating over indecis
for (let index in array) {
    console.log(index, array[index]);
}

//for of loop -> iterating over values
for (let value of array) {
    console.log(value);
}




// Object
//JSON - Javascript "Object" Notation
const person = {
    firstName: "Ram",
    lastName: "Yadav",
    age: 21,
    hobbies: ["reading", "writing"],
    address: {
        city: "ktm",
        postcode: 44600,
        location: [51.69, 69.71]
    }
}

//{key: value}

console.log(person);
console.log(person.firstName);  //dot(.) notation
console.log(person["lastName"]); 

person.age = 26; // update value
person.hobbies.push("coding"); //add element to array


// exception/object/undefined
console.log(person.detail);

// console.log(person.detail.id);

//nullable/fallback
console.log(person.detail ?? "No details available");
console.log(person.detail || "No details available");


const check = 0;
console.log(check ?? "value is null or undefined");
console.log(check || "value is falsly");




//nullable chaining
console.log(person.detail?.id);
console.log(person.detail?.id?.number);

// ?. if undefined, will automatically return undefined for rest




//fallback to chaining
console.log(person.detail?.id ?? "N/A");


// destructing an Object 
const { hobbies, address: { city, country } } = person;
console.log(hobbies, city, country);

const { firstName: fname, lastName: lname } = person;
console.log(fname, lname);