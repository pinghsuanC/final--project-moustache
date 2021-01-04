require("dotenv").config();
const { sendResponse } = require("../../util");

const nodemailer = require("nodemailer");
const MAIL_SENDER = process.env.MAIL_SENDER;
const MAIL_PASS = process.env.MAIL_PASS;
const MAIL_RECEIVER = process.env.MAIL_RECEIVER;

const em_sendMail = async (req, res) => {
	// construct string for the body
	const {
		firstName,
		lastName,
		civicAddress,
		city,
		province,
		email,
		timeStamp,
	} = req.body.formData;
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: MAIL_SENDER,
			pass: MAIL_PASS,
		},
	});
	const mailOptions = {
		from: MAIL_SENDER,
		to: MAIL_RECEIVER,
		subject: "Donation Form Submission from Moustache Web",
		text: `First name: ${firstName},
        Last name: ${lastName},
        Civic Address: ${civicAddress},
        City: ${city},
        Province: ${province},
		Email: ${email}
		TimeStamp: ${timeStamp}`,

		cc: email,
	};
	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			sendResponse(res, {
				data: "",
				status: 500,
				message: "Fail to send email",
				error: err.toString(),
				success: false,
			});
			return;
		}

		sendResponse(res, {
			data: "",
			status: 200,
			message: "Successfully sent email!",
			error: false,
			success: true,
		});
		return;
	});
};

module.exports = { em_sendMail };
