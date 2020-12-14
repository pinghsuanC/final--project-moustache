// helper functions for the server

// function to send back response
const sendResponse = (res, info) => {
	//const { data, status, message, error } = info;

	res.status(info.status).json({ ...info });
};

//const fk = Buffer.from(process.env.FIRE_PRIVATE_KEY).toString("base64");
//console.log(fk);

module.exports = { sendResponse };
