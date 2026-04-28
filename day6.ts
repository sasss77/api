// object representation
// 1. ond declaration
const obj1: {
    name: string;
    age: number;
    inPresent?: boolean;  // ? means optional
} = {
    name: "Saugat",
    age: 21
};
console.log(obj1);

// 2. using type
type productType = {
    id: number;
    title: String;
    price: number | number[];   // union type
};
const product1: productType = {
    id: 1,
    title: "Laptop",
    price:  [1000, 1000.77]
}
const product2: productType = {
    id: 1,
    title: "Phone",
    price: 100000
}
console.log(product1);
console.log(product2);

// 3. using interface
interface IUserInterface {
    username: string | number;
    email: string;
    isActive?: boolean;
}

const user1: IUserInterface = {
    username: 123,
    email: "saugatpaneru40@gmail.com"
}
console.log(user1);




// 4. Using class - OOP
class User {
    // encapculation
    username: string;
    email: string;
    isActive: boolean = true; //default value
    constructor(username: string, email: string) {
        this.username = username;
        this.email = email;
    }
    // ... methods
}

const user2 = new User("Saugat", "saugatpaneru40@gmail.com");
console.log(user2);
class Employee extends User {
    // inheritance
    private empId: number;
    constructor(username: string, email: string, empId: number) {
        super(username, email); // call parent constructor
        this.empId = empId;
    }
}

//Polymrphism
const user3: User = new Employee("Pawan", "pawan@gmail.com", 123);
console.log(user3);

// Abstraction
interface IShape {
    area(): number;
}

class Square implements IShape {
    side: number;
    constructor(side: number) {
        this.side = side;
    }
    area(): number {
        return this.side * this.side;
    }
}



// task
type ComplexType = {
    id: number;
    user: User;
    products: productType[];
    square: Square;
    userDetails: IUserInterface;
}
const complexObj: ComplexType = {
    id: 2,
    user: new User("ramu", "ramu@gmail.com"),
    products: [{id: 4, title: "Trimmer", price: 1000}],
    square: new Square(10),
    userDetails: {username: "Saugat", email: "saugat@gmail.com"}
}
console.log(complexObj.square.area());

type PhoneType = { title: string }
type NetworkType = { provider: string }

type callType = PhoneType | NetworkType; // union type
const ct1: callType = { title: "iphone" };
const ct2: callType = { provider: "CLZ" };
console.log(ct1, ct2);

type MobileType = PhoneType & NetworkType; //intersection type "&"
const mt1: MobileType = { title: "iphone", provider: "CLZ" }; // both attriutes
console.log(mt1);



// Generic - Type Injection 
const genericFn = <T>(arg: T): T => {
    console.log(arg, typeof arg);
    return arg;
}

genericFn<string>("hello"); //<T> is replaced by string
genericFn<number>(10); //<T> is replaced by number

interface IApiResponse<T, K> {
    success: boolean;
    message: string;
    data: T;
    error?: K;
}

const res1: IApiResponse<productType, string> = {
    success: true,
    message: "Produt fetched successful",
    data: { id: 1, title: "Laptop", price: 100000 },
}
const res2: IApiResponse<IUserInterface, string> = {
    success: false,
    message: "Produt fetched unsuccessful",
    data: { username: "Saugat", email: "saugat@gmail.com" },
    error: "Product Found"
}
console.log(res1, res2);

const arr1: Array<string> = ["a", "b", "c"]; //generic array type
console.log(arr1);

//Useful type generic
type Category = {
    title: string;
    id: number;
    status?: string;
    isParent?: boolean;
}

const gen1: Required<Category> = {
    title: "A", id: 1, status: "active", isParent: true
}; //all attributes required

const gen2: Partial<Category> = {
    title: "B"
}; // all attributes optional

const gen3: Readonly<Category> = {
    title: "C", id: 3
}; //all attributes readonly
//gen3.title = "D"; ?? cannot change readonly attributes

const gen4: Pick<Category, "title" | "status"> = {
    title: "D", status: "inactive"
}; // only pick title and status


const gen5: Omit<Category, "title" | "isParent"> = {
    id: 5
}; // omit title and isParent

console.log(gen1, gen2, gen3, gen4, gen5);


// Task
const t1:
    Required<Pick<Category, "title" | "id">> = {
    title: "S", id: 10
};


const t2: Omit<Pick<Category, "title" | "id">, "status"> ={
    id: 10, title: "G"
}
const t3: Pick<Omit<Category, "isParent">, "title" | "status"> & {
    price: number | number[];
    description: string | string[] | productType;
} = {
    title: "ggg", status: "yes", price: 1000, description: "UI is essential"
}