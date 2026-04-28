import app, { PORT, DUMMY } from "./src/app";
import { PORT as API_PORT } from "./src/config/constant";

app.listen(
    API_PORT, //start backed in this PORT 
    () => {
        console.log(`Server: http://localhost:${API_PORT}`); //backtick
    }
);
// execute: npx tsx --watch app.ts



