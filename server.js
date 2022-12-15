const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(cors());


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"))
app.use('/static', express.static(path.join(__dirname + '/public')));
app.get('/' , (req,res) => {
 res.redirect("/twitter-clone")
});
app.get("/twitter-clone", (req,res) => {
    res.sendFile(path.join(__dirname + '/public/views/twitter.html'));
})

app.listen(PORT)