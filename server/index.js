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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.use("/api/petfinder", require("./controllers/petfinder_api"));
app.use("/api/firebase", require("./controllers/firebase_api"));
app.use("/api/facebook", require("./controllers/facebook_api"));
app.use("/api/youtube", require("./controllers/youtube_api"));
app.use("/api/email", require("./controllers/email_api"));

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
