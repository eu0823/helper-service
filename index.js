var express = require("express");
var path = require("path");

var app = express();

app.set(express.static(path.resolve(__dirname, "public")));

app.get("/helper", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "helper"));
});

app.use("*", (req, res) => {
    res.send("Welcome to helper service!");
})

app.listen(80, () => {
    console.log("Helper server is running at port 80");
});