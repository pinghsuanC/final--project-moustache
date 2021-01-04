// get access token for pet finder
const sendEmail = () => ({
	type: "SENDING_EMAIL",
});
const sendSuccess = () => ({
	type: "SEND_EMAIL_SUCCESS",
});
const sendError = () => ({
	type: "SEND_EMAIL_ERROR",
});

const emailActions = {
	sendEmail,
	sendSuccess,
	sendError,
};
export default emailActions;
