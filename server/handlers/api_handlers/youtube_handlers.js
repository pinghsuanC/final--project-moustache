const request = require("request");
const fetch = require("node-fetch");
const { sendResponse } = require("../../util");
const { google } = require("googleapis");

// prepare for the data fetching
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const channelIds = [
	"UCheL-cUqfzUB8dfM_rFOfDQ",
	"UC5VvB6tmC4lu_WCx7hE0PZA",
	"UCTl8bLnzuZzID1kIhpbS5vQ",
	"UCkgBbSLieovNsPR6Df-T19g",
	"UCtEnS6HGyK1oe71sxbJuhcw",
];
const channelParts = ["brandingSettings", "snippet"];
// Jackson Galaxy, Kitten lady, butterTeam, ÉduCHATeur, helpful vancouver vet
// initialize google
const ytGoogle = google.youtube({
	version: "v3",
	auth: YOUTUBE_API_KEY,
});

const getChannelsData = async (req, res) => {
	try {
		// get general channel informations
		const channelInfo = {};
		const channels = await ytGoogle.channels.list({
			part: [...channelParts],
			id: [...channelIds],
		});
		//console.log(channels.data.items);
		// cleanup not-needed properties
		const needed = ["brandingSettings", "snippet", "id"];
		const channelData = channels.data.items.map((ele) => {
			const new_e = {};
			needed.forEach((p) => (new_e[p] = ele[p]));
			return new_e;
		});
		// add to channelInfo element
		channelData.forEach((ele) => (channelInfo[ele.id] = ele));

		// get section playlists
		let id;
		for (id of channelIds) {
			const playlists = await ytGoogle.playlists.list({
				channelId: id,
				part: ["id"],
			});
			channelInfo[id].playlistsIds = playlists.data.items.map((ele) => ele.id);
		}

		sendResponse(res, {
			data: channelInfo,
			status: 200,
			message: "Successfully retrieve informations from youtube.",
			error: false,
			success: true,
		});
		return;
	} catch (err) {
		console.log(err);
		sendResponse(res, {
			data: "",
			status: 500,
			message: "Failed to retrieve data.",
			error: "Something went wrong in the server!",
			success: false,
		});
		return;
	}
};

module.exports = { getChannelsData };
