

const var1 = "Hello, World";
console.log(var1);
//var1 = 1; // cannot change type

//run
//npx ts-node day5.ts

// ts implementation
let strVar: string = "Ram";
let numVar: number = 42;
let boolVar: boolean = true;
let anyVar: any = "Rajnish is PP";
anyVar = 123;
let unknownVar: unknown = "I am unknown";
unknownVar = 23;
//strVar= anyVar;  // can assign any to String
// strVar = unknownVar; //cannot

console.log(strVar, typeof strVar);
console.log(numVar, typeof numVar);
console.log(anyVar, typeof anyVar);
console.log(boolVar, typeof boolVar);
console.log(unknownVar, typeof unknownVar);

//union 
let unionVar: string | number = "union type";
console.log(unionVar, typeof unionVar);
unionVar = 100;
//unionVar = true // cannot 

console.log(unionVar, typeof unionVar);


// []
let arr1: number[] = [1, 2, 3];

// using array generic type
let arr2: Array<string> = ["a", "b", "c"];
let arr3: (string | number)[] = [1, 2, "b"];
let arr4: any[] = [1, "two", 3];
console.log(arr1, arr2, arr3, arr4);

//tuple
let tupleVar: [string, number] = ["Age", 30];
console.log(tupleVar);


// typescript functions
const add = (a: number, b: number): number => {
    return a + b;
}
console.log(add(5, 10));


const calculate = (a: number, b?: number): string => {
    return "Some Result";
}
console.log(calculate(5));
//console.log(calculate(5. 10));


const detail = (name: string = "Unknown", age: number = 0) => {
    return `Name: ${name}, Age: ${age}`;
}
console.log(detail());  //auto return type
console.log(detail("Saugat", 21));



let i: number;
const filterFruits = (fruits: string[], num: number = 3) => {
    for (i = 0; i < fruits.length; i++) {
        if (countFruits(fruits[i]) >= num) {
            console.log(fruits[i]);
        }
       
    }
}


const countFruits = (fruit: string) => {
    return fruit.length;

}


filterFruits(["Mango", "Apple", "Pear"]);


const countFruit = (fruits: string[]): number => {
    return fruits.filter(fruit => fruit.length > 2).length;
}

 
const findFruits = (fruits: string[], search: string): Promise<string | Error> => new Promise(
    (resolve, reject) => {
        const found = fruits.find(fruit => fruit === search);
        if (found) {
            resolve (found);
        } else {
            reject("not found");
        }
    }
);