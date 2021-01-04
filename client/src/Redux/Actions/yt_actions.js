// get access token for pet finder
const getYtInfo = () => ({
	type: "GET_YT_INFO",
});
const receiveYtInfo = (channelInfo) => ({
	type: "RECEIVE_YT_INFO_SUCCESS",
	channelInfo,
});
const receiveYtInfoErr = () => ({
	type: "RECEIVE_YT_ERROR",
});

const ytActions = {
	getYtInfo,
	receiveYtInfo,
	receiveYtInfoErr,
};
export default ytActions;
