const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const Router = require("./Router/Routes");
const connectdb  = require("../DB/Db");
require("dotenv").config();

const app = express();
const port = process.env.PORT 


app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(Router);

app.get("/", (req, res) => {
  res.send("Welcome to my chat app");
});

connectdb().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
