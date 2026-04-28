// Generic - Type Injection 
const genericFn = <T>(arg: T): T => {
    console.log(arg, typeof arg);
    return arg;
}

genericFn<string>("hello"); //<T> is replaced by string
genericFn<number>(10); //<T> is replaced by number