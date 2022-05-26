const express = require("express");
const cors = require('cors');

const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const connectDB = require("./src/config/config");
const app = express();


const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Hello Node!");
});

const subTypeApi = require("./src/api/subTypes.api");
app.use("/subtype", subTypeApi());

const uploadDocApi = require("./src/api/uploadDoc.api");
app.use("/uploadDoc", uploadDocApi());

app.listen(PORT,() => {

    console.log(`App listening at http://localhost:${PORT}`);
    
});