import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import indexRoute from "./routes/index";
import connectDB from "./config/connectDB";
require("dotenv").config();




let app = express();

//view engine

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
indexRoute(app);

connectDB();


let port = process.env.PORT || 6789; // if Port is undefined, use port 6789

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

