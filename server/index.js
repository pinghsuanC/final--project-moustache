const express = require("express");
const app = express();
const helmet = require("helmet");
const { sendResponse } = require("./util");
app.use(helmet());

PORT = 5656;

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
