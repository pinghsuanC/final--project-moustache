const lodash = require("lodash");
const em = require("express").Router();

const { em_sendMail } = require("../handlers/client_handlers/email_handlers");

em.post("/send", em_sendMail);

em.get("*", (req, res) => {
	res.send("HI, nothing here.");
});

module.exports = em;
