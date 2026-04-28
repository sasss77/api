function functionName(arg1, arg2) {
    const res = arg1 + arg2;
    console.log(res);
    return res;
}
const ret = functionName(2, 4);
console.log(ret);



//variable regereced function
const variableFunc = function () {
    console.log("some result");
}
variableFunc();

//arrow function
const arrowFunc = (arg) => "Hello " + arg;
const ret2 = arrowFunc("World");
console.log(ret2);


//arrow function behaviour
const arrowFunction2 = () => {
    console.log("Scope arrow");;
    return "something";
}

arrowFunction2();
console.log(arrowFunction2());

const obj = {
    "name": "Saugat",
    func1: function() {
        console.log("Scope normal", this.name);
    },
    func2: () => {
        console.log("Scope arrow", this.name);   //undefined
    }
}

//arrow  is anonymous
obj.func1();
obj.func2();


//closure and callback
const outerFunc = (outerArg) => {
    let counter = outerArg;
    const innerFunc = () => {
        counter++;
        console.log(counter);
    }
    return innerFunc;
}

const closureFunc = outerFunc(1);
closureFunc();  //2
closureFunc();  //3 -> preserves the state of outer variable


const closureFunc2 = outerFunc(1);
closureFunc2();  //2
closureFunc2();  //3 -> preserves the state of outer variable


closureFunc();  //4







//higher order function or callback
const hof1 = (arg1, callback) => {
    callback(arg1);
}

const callbackFunc = (arg) => {
    console.log("Hello", arg);
}

hof1("World", callbackFunc);
hof1("World", (arg) => console.log("Hi", arg));


const calculate = (n1, n2, cb) => {
    const res = cb(n1, n2);
    console.log(res);
    return res;
}

const addition = (a, b) => a + b;
const additionRes = calculate(2, 3, addition);
const subtractRes = calculate(2, 3, (a, b) => a - b); 


//list/collection callback
const fruits = ["apple", "mango", "grapes"];
//iteration using callback
const howToIterate = (item, index, arr) => {
    //logic to iterate
    console.log(index, item);
}
fruits.forEach(howToIterate);
fruits.forEach(
    (item, index) => console.log(index, item)
);



// map/transform
const transformedFruits = fruits.map(
    (item, idx, arr) => item.toUpperCase()
);
console.log(transformedFruits);


//UI/UX
const liTags = fruits.map(
    (item, idx) => {
        let classname = "";
        if (idx % 2 === 0) {
            classname = "bg-light text-dark";
        } else {
            classname = "bg-dark text-light";
        }
        return `<li id = "${item}" class = "${classname}" >${item}</li>`;
    }
)
console.log(liTags);

const accumulatedValue = fruits.reduce(
    (acc, item, idx, arr) => acc + item,
    "" //initial state
);
console.log(accumulatedValue);








// map- return student names
// filter - return array of students who scored above 80
// filter - return array of students with even index
// reduce - return total grade of all students 