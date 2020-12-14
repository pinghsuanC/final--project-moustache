const lodash = require("lodash");
const fb = require("express").Router();

const { createUser } = require("../handlers/client_handlers/firebase_handlers");

fb.post("/users", createUser);

module.exports = fb;
