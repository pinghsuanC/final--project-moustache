const lodash = require("lodash");
const youtube = require("express").Router();

//console.log(reqChannelStr);

//const scope = "https://www.googleapis.com/auth/youtube.readonly";
const {
	getChannelsData,
} = require("../handlers/api_handlers/youtube_handlers");


youtube.get("/channels", getChannelsData);

module.exports = youtube;
