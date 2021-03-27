const express = require("express");
const path = require("path"); // window or mac
const router = express.Router();


// Define any routes

// app.get()
// app.post()

// router.get();
// router.post();

// 2 paramaters
// req.params
// req.param

router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, "/../views/index.html"));
});
router.get('/index.html', (request, response) => {
    response.sendFile(path.join(__dirname, "/../views/index.html"));
});

router.get('/ajouter.html', (request, response) => {
    response.sendFile(path.join(__dirname, "/../views/ajouter.html"));
});

router.get('/vielle.html', (request, response) => {
    response.sendFile(path.join(__dirname, "/../views/vielle.html"));
});

router.get("/accimeesterlin/api", (req, res) => {
    const age = req.param("age");
    const address = req.param("address");
    res.json({response: age, address: address});
});


router.get("/sadrack/:id", (req, res) => {

    const id = req.params.id;
    res.json({id: id});

});



// Full Stack
// Front End
// Back End

// What is post? 
// Receive what the client is sending

// Why are we using it?
// Get information, and then process and always send a response


const validate = (req, res, next) => {

    const value = req.headers["x-testing"];
    // processing here
    if(value === "student"){
        next();
    } else{
        res.status(409).json({error: "You don't have access to this"});
    }
    
};


router.post('/user', validate, (req, res) => {
    // req to receive stuff from the client or browser
    const { username, address } = req.body;
    const user = {
        username,
        address
    };

    console.log("First One: ", req.headers["x-testing"]);
    console.log("Second One: ", req.headers["x-class"]);

    // res to send stuff to the browser
    res.json({ msg: "We receive your data", data: user });
})







router.get("*", (req, res) => {
    res.json("Page not found");
});


// router.get("/", func,  (req, res) => {

// }));



module.exports = router;


