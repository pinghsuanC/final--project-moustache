// helper functions for the server

// function to send back response
const sendResponse = (res, info) => {
	const { data, status, message, error } = info;

	res.status(status).json({ status, data, message, error });
};

module.exports = { sendResponse };
