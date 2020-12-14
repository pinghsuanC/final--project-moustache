const lodash = require("lodash");
const pf = require("express").Router();

const {
	pf_getToken,
	pf_getMous,
	pf_getAnimals,
	pf_getAdoptedCount,
} = require("../handlers/api_handlers/petfinder_handlers");

pf.get("/token", pf_getToken);
pf.get("/moustache", pf_getMous);
pf.get("/moustache/animals", pf_getAnimals);
pf.get("/moustache/adoptedCount", pf_getAdoptedCount);

pf.get("*", (req, res) => {
	res.send("HI, nothing here.");
});

module.exports = pf;
