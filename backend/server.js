//https://sd.blackball.lv/library/Full-Stack_React_Projects_2nd_Edition_(2020).pdf
const home = require("./routes/home.js");
const express = require('express');
const app = express();

app.listen(3000, function(){
    console.log("listening to 3000")
})


app.use("/", home);
