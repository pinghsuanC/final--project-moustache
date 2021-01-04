const lodash = require("lodash");
const firebase = require("express").Router();

const { createUser } = require("../handlers/client_handlers/firebase_handlers");

firebase.post("/users", createUser);

module.exports = firebase;
