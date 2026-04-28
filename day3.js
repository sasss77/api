// Sync, Async and Promises

//Synchronous and Asynchronous


// macro task => aynchronous
setTimeout(() => {
    console.log("set timeout-> after 5 secs");
},
    5000 // 5 sec
);
console.log("End of the program");



//micro tasks -> promises (async function)
const promiseExample = () => new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                reject("Promise Fail");
            },
            1000  // 1 sec
        );
    }
);
promiseExample()
    .then(result => console.log(result))   // this line runs cuz resolve used
    .catch(error => {                      // this line runs when reject is used
        console.log("Error in promise");
        console.log(error);
    } );
console.log("After Promise");




// Synchronous execution 
const main = async () => {
    console.log("Start of main function");

// handle error cuz reject is used in the promiseEaxmple function
    try {
        const res = await promiseExample();
        console.log(res);

    } catch (error) {
        console.log("Error in main function");
        console.log(error);
    }
    console.log("End of main function");
}
main();



const isPositive = (num) => new Promise(
    (resolve, reject) => {
        if (num > 0) {
            resolve("Positive Integer");
        } else {
            reject("Negative Integer");
        }
    }
);

const isEven = (num) => new Promise(
    (resolve, reject) => {
        if (num %2 == 0) {
            resolve("Even Integer");
        } else {
            reject("Odd Integer");
        }
    }
);



const synchronousCheck = async () => {
    try {
        const res1 = await isEven(10);
        const res2 = await isPositive(11);
        console.log(res1);
        console.log(res2);
    } catch (error) {
        console.log(error);
    }
}



isEven(10).then(result => {
    console.log(result);
    isPositive(5)
        .then(result => console.log(result)
        .catch(error => console.log(error)));
})
    .then(result => console.log(result))
    .catch(error => console.log(error));
    
   












    // Promise parallelism
const timeFunc1 = () => new Promise(
    (resolve, reject) => {
        setTimeout(() => { resolve("Time func 1") }, 2000);
    }
);
const timeFunc2 = () => new Promise(
    (resolve, reject) => {
        setTimeout(() => { resolve("Time func 2") }, 3000);
    }
);
const timeFunc3 = () => new Promise(
    (resolve, reject) => {
        setTimeout(() => { reject("Time func 3") }, 1000);
    }
);
const sequentialExecution = async () => {
    console.time("Sequential Execution");
    const result1 = await timeFunc1();
    console.log(result1);
    const result2 = await timeFunc2();
    console.log(result2);
    console.timeEnd("Sequential Execution");
}

sequentialExecution(); //total time taken = 5 secs






const parallelExecution = async () => {
    console.time("Parallel Execution");
    const [r1, r2] = await Promise.all(
        [
            timeFunc1(),
            timeFunc2(),
            // timeFunc3() // if one rejects whole function rejects
        ]
    );
    console.log(r1, r2);
    console.timeEnd("Parallel Execution");
}

parallelExecution(); // total time taken = 3 secs(max)




const parallelExecutionSettled = async () => {
    console.time("Parallel Execution Settled");
    const [r1, r2,, r3] = await Promise.allSettled(
        [
            timeFunc1(),
            timeFunc2(),
            timeFunc3() 
        ]
    );
    console.log(r1.status, r1.value);
    console.log(r2.status, r2.value);
    console.log(r3.status, r3.reason);
    console.timeEnd("Parallel Execution Settled");
}

parallelExecutionSettled(); // total time taken = 3 secs(max)

