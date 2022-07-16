import express from "express";
import config from "../config";
const cors = require("cors");

const app = express();

app.use(express.json());
app.use("/api/v1", require("./routes/fibonacci-routes"));

app.use(cors());

app.listen(config.PORT, () => {
    try {
        return console.log(`server is listening on ${config.PORT}`);
    } catch {
        return console.error(`server error (on ${config.PORT})`);
    }
});
