const admin = require("firebase-admin");
require("dotenv").config();
const emailList = ["chuehpinghsuan@gmail.com"];

const FIRE_PRIVATE_KEY = Buffer.from(
	process.env.FIRE_PRIVATE_KEY_B64,
	"base64"
).toString("ascii");

admin.initializeApp({
	credential: admin.credential.cert({
		type: "service_account",
		project_id: process.env.FIRE_PROJECT_ID,
		private_key_id: process.env.FIRE_PRIVATE_KEY_ID,
		private_key: FIRE_PRIVATE_KEY.replace(/\\n/g, "\n"),
		client_email: process.env.FIRE_CLIENT_EMAIL,
		client_id: process.env.FIRE_CLIENT_ID,
		auth_uri: "https://accounts.google.com/o/oauth2/auth",
		token_uri: "https://oauth2.googleapis.com/token",
		auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
		client_x509_cert_url: process.env.FIRE_CLIENT_CERT,
	}),
	databaseURL: process.env.FIRE_DATABASE_URL,
});

const db = admin.firestore();

const queryDatabase = async (key) => {
	let data = {};
	try {
		const snapshot = await db.collection(key).get();
		snapshot.forEach((doc) => {
			//console.log(doc.data());
			data[doc.id] = doc.data();
		});
	} catch (err) {
		console.log(err);
		throw new Error("something went wrong reading the database.");
	}

	return data;
};

const getUser = async (email) => {
	const data = (await queryDatabase(`users`)) || {};
	const dataValue = Object.values(data).find((obj) => obj.email === email);

	return dataValue || false;
};

const createUser = async (req, res) => {
	// check if authorized
	if (!emailList.includes(req.body.email)) {
		res.status(401).json({
			status: 401,
			data: req.body,
			message: "You are not authorized to log in!",
		});
		return;
	}
	const returningUser = await getUser(req.body.email);
	//console.log(returningUser);
	if (returningUser) {
		res
			.status(200)
			.json({ status: 200, data: req.body, message: "Welcome back!" });
		return;
	} else {
		const newUser = db.collection("users").doc(req.body.email);
		await newUser.set(req.body).then(() => {
			res.status(200).json({
				status: 200,
				data: req.body,
				message: "Successfully registered!",
			});
		});
	}
};

module.exports = { createUser };
