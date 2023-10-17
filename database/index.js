"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var cors = require("cors");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(cors());
app.get("/users", function (req, res) {
    console.log("se recibio la info");
    res.json({
        users: []
    });
});
app.get("/test", function (req, res) {
    res.send("¡El servidor está funcionando correctamente en Vercel!");
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
