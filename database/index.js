"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static("../dist"));
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
    // Usa path.resolve para obtener la ruta absoluta al archivo HTML
    var indexPath = path.resolve(__dirname, "../dist/index.html");
    res.sendFile(indexPath);
});
app.listen(port, function () {
    console.log("corriendo en ", port);
});
