require("dotenv").config();
require("@babel/register");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const { sendResponse } = require("./util");
const cors = require("cors");
const corsOptions = {
	origin: "*",
	optionsSuccessStatus: 200,
};
PORT = process.env.PORT || 5656;
const app = express();
app.use(helmet());
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
// // Add headers
// app.use(function (req, res, next) {
// 	// Website you wish to allow to connect
// 	res.setHeader(
// 		"Access-Control-Allow-Origin",
// 		"https://moustache-app-cb9b0.web.app"
// 	);

// 	// Request methods you wish to allow
// 	res.setHeader(
// 		"Access-Control-Allow-Methods",
// 		"GET, POST, OPTIONS, PUT, PATCH, DELETE"
// 	);

// 	// Request headers you wish to allow
// 	res.setHeader(
// 		"Access-Control-Allow-Headers",
// 		"X-Requested-With,content-type"
// 	);

// 	// Set to true if you need the website to include cookies in the requests sent
// 	// to the API (e.g. in case you use sessions)
// 	res.setHeader("Access-Control-Allow-Credentials", true);

// 	// Pass to next layer of middleware
// 	next();
// });
// // Add headers
// app.options("*", function (req, res) {
// 	res.setHeader("Access-Control-Allow-Origin", "*");
// 	res.setHeader("Access-Control-Allow-Methods", "*");
// 	res.setHeader("Access-Control-Allow-Headers", "*");
// 	res.end();
// });
// app.options("*", cors(corsOptions));
/*app.use(function (req, res, next) {
	// Website you wish to allow to connect
	res.setHeader(
		"Access-Control-Allow-Origin",
		"https://moustache-app-cb9b0.web.app/"
	);

	// Request methods you wish to allow
	res.setHeader(
		"Access-Control-Allow-Methods",
		"OPTIONS, GET, POST, OPTIONS, PUT, PATCH, DELETE"
	);

	// Request headers you wish to allow
	res.setHeader(
		"Access-Control-Allow-Headers",
		"X-Requested-With,content-type"
	);

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader("Access-Control-Allow-Credentials", true);

	// Pass to next layer of middleware
	next();
});*/

app.use("/api/petfinder", require("./controllers/petfinder_api"));
app.use("/api/firebase", require("./controllers/firebase_api"));

app.get("*", (req, res) => {
	const info = {
		status: 404,
		data: "",
		message: "",
		error: "No endpoint found.",
	};
	sendResponse(res, info);
});
app.listen(PORT, () => {
	console.log(`Listening to port http://localhost:${PORT}`);
});
