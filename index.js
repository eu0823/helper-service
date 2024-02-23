var express = require("express");
var path = require("path");

var app = express();

app.set(express.static(path.resolve(__dirname, "public")));

app.get("/helper", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "helper"));
});

app.get("/filename", (req, res) => {
    res.send("C://Windows/System32/python2.exe");
})

app.use("*", (req, res) => {
    res.send("Welcome to helper service!");
})

app.listen(80, () => {
    console.log("Helper server is running at port 80");
});