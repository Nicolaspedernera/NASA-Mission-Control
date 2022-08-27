const express = require("express");
const planetsRouter = require("./planets/planets.router");
const lounchesRouter = require("./launches/launches.router");

const api = express.Router();

api.use("/planets", planetsRouter);
api.use("/launches", lounchesRouter);


module.exports= api;