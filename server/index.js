const express = require("express");
const app = express();
const helmet = require("helmet");
PORT = 5656;

app.use(helmet());

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
