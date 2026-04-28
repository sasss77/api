import express, { Application, NextFunction, Request, Response } from "express";
import personRoutes from "./routes/person.route";
const app: Application = express();
app.use(express.json()); //json input
app.use(express.urlencoded({ extended: true }));   //x-www-from-urlencoded




app.use("/api/persons",   // base path/prefix
    personRoutes   // router object
);



const PORT: number = 8089;
app.get(
    "/", // path
    (req: Request, res: Response) => { //callback func 
        return res.send("hello, Typescript with Express!");
    }
);


app.get("/exception", (req: Request, res: Response) => {
    try {
        const logic: any = {};
        logic.user.find(); //simuate error 
    } catch(err: Error | any) {
        console.log("Error: ", err);
        return res.status(500).json({ message: "Exception Issue" });
    }
});


// global api handler
app.use(
    (req: Request, res: Response) => {
        return res.status(404).json({message: "API not found"});
    } 
);


// global error handler
app.use(
    (err: Error, re: Request, res: Response, next: NextFunction) => {
        console.error("error:", err);
        return res.status(500).json({message: "Internal Server Error"});
    }
);










// export techniques 
const DUMMY: string = "Dummy Export";
//export object
export {
    PORT,
    DUMMY
}

//default export - only one default export per file
export default app;







app.get(
    "/hello/world",
    (req: Request, res: Response) => {
        return res.send("Hello, World!");
    }
);

app.get(
    "/hello/world/:name", //:name -> route parameter/alias
    (req: Request, res: Response) => {
        // const name = req.params.name; //without destructuring
        const { name } = req.params;  //destructuring
        const { title, age } = req.query;
        //query params -> /hello/world/Saugat?title=MR&age=20
        return res.status(200).json(
            {
                message: `Hello, ${name}!`,
                title,
                age,
            }
        );
    }
);


''
app.get(
    "/api/products/:id/:category", 
    (req: Request, res: Response) => {
        
        const { id, category } = req.params;  
        const { sort, limit } = req.query;
        if (category != "electronics") {
            return res.status(400).send("invalid category");
        }
        return res.status(200).json(
            {
                id: '${id}',
                category: `${category}`,
                sort,
                limit,
            }
        );
    }
);



interface Person {
    id: number;
    name: string;
    age: number;
}

const dataset: Person[] = [
    { id: 1, name: "Saugat", age: 21},
    { id: 2, name: "Ram", age: 20},
    { id: 3, name: "Shyam", age: 31},
];

//1. get all persons
app.get("/api/persons", (req: Request, res: Response) => {
    //alter paginated
    return res.json(dataset);
});

//2. get one by ID - person
app.get("/api/persons/:id", (req: Request, res: Response) => {
    const { id } = req.params;  // route parameter
    const person = dataset.find(
        p => p.id === parseInt(id as string)
    );
    return res.json(person);
});

// 3. Create One Person
app.post("/api/persons", (req: Request, res: Response) => {
    const { name, age } = req.body; //body parameters/ client data
    const newPerson: Person = {
        id: dataset.length + 1,
        name,
        age
    }
    dataset.push(newPerson); //add to dataset
    return res.json(newPerson);
});


// 4. Update one person
// 4.1 put -> full update/ most update
// 4.2 -> patch -> partial update/ least update
app.put("/api/persons/:id", (req: Request, res: Response) => {
    const { id } = req.params;  //route arameter
    const { name, age } = req.body; //body parameters/ client data
    const personIndex = dataset.findIndex(
        p => p.id === parseInt(id as string)
    );
    if (personIndex === -1) {
        return res.json({ message: "Person not found" });
    }
    dataset[personIndex] = { id: parseInt(id as string), name, age }; //update person
    return res.json(dataset[personIndex]);
});

// 5. detete one Person
app.delete("/api/persons/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const personIndex = dataset.findIndex(
        p => p.id === parseInt(id as string)
    );
    dataset.splice(personIndex, 1); //delete person
    return res.json({message: "Deleted "});
});


