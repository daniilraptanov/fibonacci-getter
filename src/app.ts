import express from "express";
import { ClientCreator } from "./db/client";
const cors = require("cors");
require('dotenv-safe').config();

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use("/api/v1", require("./routes/fibonacci-routes"));

app.use(cors());

app.listen(port, async () => {
    try {
        const creatorInstance = await ClientCreator.getInstance();
        if (!creatorInstance) {
            throw Error("Error in ClientCreator");
        }
        
        return console.log(`server is listening on ${port}`);
    } catch (err) {
        console.log(err);
        return console.error(`server error (on ${port})`);
    }
});
