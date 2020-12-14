const request = require("request");
const fetch = require("node-fetch");
const { sendResponse } = require("../../util");

// get the keys
const CLIENT_ID = process.env.PET_FINDER_APIKEY;
const CLIENT_SECRET = process.env.PET_FINDER_APISECRET;
const ORG_ID = process.env.ORG_ID;
let CLIENT_TOKEN_INFO = null;
const MOUSTACHE_ID = "qc64"; // need the id of organizatoion
const resetClientToken = () => {
	CLIENT_TOKEN_INFO = null;
};
const pf_getToken = async (req, res) => {
	if (!CLIENT_TOKEN_INFO) {
		const dataString = `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
		const data = await fetch("https://api.petfinder.com/v2/oauth2/token", {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			method: "POST",
			body: dataString,
		})
			.then((info) => info.json())
			.catch((err) => {
				// { data, status, message, error }
				sendResponse(res, {
					data: "",
					status: 400,
					message: "",
					error: "Token Request Failed",
					success: false,
				});
				return;
			});

		CLIENT_TOKEN_INFO = data;

		setTimeout(() => {
			resetClientToken(); // reset tokento null after expiration
		}, data.expires_in * 1000 - 1000);

		sendResponse(res, {
			data: CLIENT_TOKEN_INFO.access_token, // send only the token
			status: 201,
			message: "Token initial request success",
			error: false,
			success: true,
		});
		return;
	}
	sendResponse(res, {
		data: CLIENT_TOKEN_INFO.access_token,
		status: 200,
		message: "Retrieved token from server.",
		error: false,
		success: true,
	});
};

const pf_getMous = async (req, res) => {
	if (CLIENT_TOKEN_INFO) {
		//curl -H "Authorization: Bearer {YOUR_ACCESS_TOKEN}" GET https://api.petfinder.com/v2/{CATEGORY}/{ACTION}?{parameter_1}={value_1}&{parameter_2}={value_2}

		let data = await fetch(
			`https://api.petfinder.com/v2/organizations/${MOUSTACHE_ID}`,
			{
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: `${CLIENT_TOKEN_INFO.token_type} ${CLIENT_TOKEN_INFO.access_token}`,
				},
			}
		);
		data = await data.json();
		//console.log(data);
		if (!data.status) {
			sendResponse(res, {
				data: data.organization,
				status: 200,
				message: "Retrieved organization info!",
				error: false,
				success: true,
			});
			return;
		} else {
			sendResponse(res, {
				data: data,
				status: data.status,
				message: "",
				error: data.detail,
				success: false,
			});
			return;
		}
	}

	sendResponse(res, {
		data: "",
		status: 400,
		message: "",
		error: "Please retrieve the access token first!",
		success: false,
	});
};

const pf_getAnimals = async (req, res) => {
	if (CLIENT_TOKEN_INFO) {
		try {
			let data = await fetch(
				`https://api.petfinder.com/v2/animals?organization=${MOUSTACHE_ID}&status=adoptable&limit=100`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `${CLIENT_TOKEN_INFO.token_type} ${CLIENT_TOKEN_INFO.access_token}`,
					},
				}
			);
			data = await data.json();
			if (!data.status) {
				sendResponse(res, {
					data: data.animals,
					status: 200,
					message: "Success!",
					error: false,
					success: true,
				});
			} else {
				throw new Error("Something went wrong in the server!");
			}
			return;
		} catch (err) {
			console.log(err);
			sendResponse(res, {
				data: "",
				status: 404,
				message: "",
				error: "Something went wrong in the server!",
				success: false,
			});
			return;
		}
	}

	sendResponse(res, {
		data: "",
		status: 400,
		message: "",
		error: "Please retrieve the access token first!",
		success: false,
	});
	return;
};

// get number of animals adopted through the moustahce
const pf_getAdoptedCount = async (req, res) => {
	if (CLIENT_TOKEN_INFO) {
		try {
			let data = await fetch(
				`https://api.petfinder.com/v2/animals?organization=${MOUSTACHE_ID}&status=adopted`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `${CLIENT_TOKEN_INFO.token_type} ${CLIENT_TOKEN_INFO.access_token}`,
					},
				}
			);
			data = await data.json();
			if (!data.status) {
				sendResponse(res, {
					data: data.pagination.total_count,
					status: 200,
					message: "Success!",
					error: false,
					success: true,
				});
			} else {
				throw new Error("Something went wrong in the server!");
			}
			return;
		} catch (err) {
			console.log(err);
			sendResponse(res, {
				data: "",
				status: 404,
				message: "",
				error: "Something went wrong in the server!",
				success: false,
			});
			return;
		}
	}

	sendResponse(res, {
		data: "",
		status: 400,
		message: "",
		error: "Please retrieve the access token first!",
		success: false,
	});
	return;
};

module.exports = { pf_getToken, pf_getMous, pf_getAnimals, pf_getAdoptedCount };
