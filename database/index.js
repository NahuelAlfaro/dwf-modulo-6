"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3002;
app.use(express.static("dist"));
app.get("/users", function (req, res) {
    res.json({
        users: []
    });
});
app.get("/users/:userId/products", function (req, res) {
    res.json({
        products: []
    });
});
app.post("/users", function (req, res) {
    res.status(201).json({
        message: "ok",
        id: 1234
    });
});
app.get("*", function (req, res) {
    res.sendFile("C:/Users/elosc/Documents/APX/ppt-online-db/dist/index.html");
});
app.listen(port, function () {
    console.log("corriendo en ", port);
});
