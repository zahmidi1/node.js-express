
const express = require("express");
const app = express(); // start an express app
const path = require("path"); // relative windows or Mac
const bodyParser = require("body-parser");

const router = require("./routes/routing");



// Middlewares
    // app.use()

// Static Files
    // HTML
    // JavaScript
    // CSS
    // ETC
app.use(express.static("public")); // sending static files 
app.use(bodyParser());

app.use("/", router);


app.listen(8080, () => {
    console.log("App is starting at port ", 8080);
}); // required






