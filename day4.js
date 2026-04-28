// js spread operator
// "..." unpack and union
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const arr3 = [arr1, arr2];  //[[1, 2, 3], [4, 5]] nested
const arr4 = [...arr1, ...arr2] // [1, 2, 3, 4, 5]  flat

console.log(arr3);
console.log(arr4);
console.log(...arr4);

const arr5 = [
    0, 
    ...arr1,
    6,
    ...[10, 11, 12],
    13, 
    14
]
console.log(arr5);


//object spread
const obj1 = {
    "name": "Saugat",
    "age": 21
}
const obj2 = {
    "address": "ktm"
}

const obj3 = { obj1, obj2 };
const obj4 = { ...obj1, ...obj2 };
console.log(obj3);
console.log(obj4);

const obj5 = {
    "id": 1,
    ... { "title": "N/A", "price": 100 },
    "categiry": "Phone",
    "rating": 4.5,
    ...obj2
}
console.log(obj5);



//CRUD collection Example
//create
let data = [
    {"id": 1, "name": "Saugat", "age": 21},
    {"id": 2, "name": "Hari", "age": 21}
]

//push
data.push({ id: 3, name: "Shyam", age: 25 });

//spread
data = [...data, { id: 4, name: "Geeta", age: 40 }];

console.log(data);

//find pointer and edit
const found = data.find(item => item.id === 2);
found.name= "Shyam Kazi"
//find index and edit
const foundIndex = data.findIndex(item => item.id === 1);
data[foundIndex] = { ...data[foundIndex], name: "Shyam Kumar" };
data[foundIndex].age = 12;
// .if not found -> undefined
// .findIndax if not found -> -1


//delete
data.splice(
    foundIndex, // start from which index
    1 //remove how many
); //mutating

data.splice(
    0,  //start from index 0
    2  //delete 2 elements, 0 and 1 index
);


