const t_en = {
	home: {
		homeTitle: "Whiskers",
		homeSubTitle: "Adoption is for life.",
		homeMiddleIntro:
			"We are a registered cat rescue organization based in Montreal, run by group of volunteer cat lovers.",
		homeReadMore: "Read more about us...",
		homeItems: {
			item1: { title: "Whiskers's Mission", path_var: "about" },
			item2: { title: "About Adoption", path_var: "adoption" },
			item3: { title: "Posts & Updates", path_var: "updates" },
			item4: { title: "Our Cats", path_var: "ourcats" },
			item5: { title: "Our Calendar", path_var: "calendar" },
			item6: { title: "Contact", path_var: "contact" },
			item7: { title: "Donation", path_var: "donation" },
			item8: { title: "Education & Resources", path_var: "education" },
		},
		homeMiddleDonate:
			"If you like our work, please consider support us by donation or volunteer.",
		homeDonation: {
			donate: "We need your help to continue our mission. Help save a life!",
			button: "Donate",
		},
	},
	about: {
		aboutUs: "About us...",
		aboutLegal: "Legal Information",
		aboutNP: "Non-Profit Registration Number: ",
		aboutCH: "Charity Status Registration Number: ",
		aboutIntroTitle: "Our Operation",
		aboutLinkTitle: "Find us here",
		aboutIntro: {
			aboutIntro1:
				"Whiskers prides itself on offering a friendly alternative to promote pet adoptions instead of letting them die in a pound or spend years in a shelter.",
			aboutIntro2:
				'Help abandoned and abused cats find a new forever home mainly through adoption days 3 Saturdays a month . These adoption days take place primarily in pet boutiques in Montreal. See page titled "Events" to see the dates. ',
			aboutIntro3:
				"Sterilize strays and farm cats in order to prevent feline over-population in the Greater Montreal and area (TNRM).",
			aboutIntro4:
				"We have about 40 cats under our care on average all in foster homes. We attempt to convince people who are wanting to give up their cats to hold off until we can find them a place whether it be with a foster volunteer or a permanent home.  ",
			aboutIntro5:
				"Whiskers does not have an actual shelter and we currently have a limited number of volunteers and fosters, therefore, we are always seeking new members to join us.",
			aboutIntro6:
				"Whiskers Adoptions does not capture stray cats upon demand nor do we adopt out feral or semi-feral cats.",
		},
	},
	DonationT: {
		DTitle: "Donation and income tax receipt",
		DInfo:
			"We currently only accept e-transfer. If you would like to donate, please send your donation to PLACE_HOLDER . Please also fill the form below and press the submit button so that we can identify and send you your income tax receipts!",
		DFormInfo: {
			DFormTitle: "Form for donation",
			DFormLabels: [
				"First name",
				"Last name",
				"Civic Address",
				"City",
				"Province",
				"Email",
			],
			DFormVars: [
				"firstName",
				"lastName",
				"civicAddress",
				"city",
				"province",
				"email",
			],
			DFormBtnT: "Submit",
			confirmFormT: {
				confirmTitle: "Please confirm your information!",
				btnT: { confirm: "CONFIRM", cancel: "CANCEL" },
			},
		},
		emailSendStatus: {
			emailSendSuccess:
				"The information was sent successfully. We will verify the information and get back to you ASAP",
			emailSendFail:
				"The information wasn't sent successfully (maybe due to server error). Please consider email the information directly to us!",
		},
	},
	volunteerT: {
		volTitle:
			"We appreciate all helps from you. If you are willing to provide help, please see below for what we may need form you!",
		volCat: {
			0: {
				type: "Drivers",
				description: "help to transport cats and supplies",
				requirement: "you should be located in Montreal, and able to drive!",
			},
			1: {
				type: "Sellers",
				description: "help to sell books, house items etc on internet.",
				requirement:
					"You may need a car to pick up the items at certain locations and a cell phone.",
			},
			2: {
				type: "Adoption agent",
				description: "help with adoption process.",
				requirement: "French and English communication.",
			},
			3: {
				type: "Garage sale arranger",
				description: "to setup and packing crew members for garage sales",
				requirement: "Able to organize events.",
			},
			4: {
				type: "Adoption day Assistant",
				description:
					"to help with adoption day laundry and cleaning pick up and return",
				requirement: "May need car to transport.",
			},
		},
		fosterT: {
			fosterTitleT:
				"We are absolutely also looking for foster homes. Please see below for more detailed information on fostering.",

			fosterProvideT: {
				fosterPTitle:
					"What we provide, and what we need the foster home to provide",
				provideTableHeader: ["Moustache", "Foster home"],
				moustacheP: [
					"Food",
					"Medication and vet care",
					"Adoption process",
					"Litter box and scoop",
					"Cat carrier",
					"Bowls",
					"Toys",
					"Counselling on behavioural issues",
				],
				fosterP: [
					"Litter filler",
					"Daily care",
					"Affection",
					"Socialization when required",
				],
			},
			fosterTypeT: {
				fosterTypesTitle: "Here are some possible types of fosters",
				fosterTypes: [
					{
						type: "Beginner",
						description:
							"to house a cat that is already socialized and requires no special care other than pills or other simple medication",
					},
					{
						type: "Intermediate",
						description:
							"to house a cat that needs to improve its socialization skills or that requires several medications or treatments (diabetes, thyroid issues, ...)",
					},
					{
						type: "Experienced",
						description:
							"to do the socialization process from the start. You need to have done it before and have a good knowledge of cat psychology and common behaviour issues.",
					},
					{
						type: "Quarantine foster homes",
						description:
							"you need a small easy to clean room with a window or an extra large dog crate and experience in manipulating not yet socialized cats, giving medication etc. These foster homes receive the cats that were just received until they see the vet. We normally go to the vet every Wednesday. They may return to quarantine if they have rhino or another problem.",
					},
					{
						type: "Short-term foster homes",
						description:
							"to foster cats while their foster home are away on vacation.",
					},
					{
						type: "Relay",
						description:
							"to house for a few days or a few hours cats that are in transit between two locations as the whole trip is not done by the same volunteer. For example, a volunteer picks up a few cats from Montréal during the day and brings them to a relay from where a second volunteer will pick them up after work to bring them to the vet.  For short relay the cats stay in their carriers.  For longer relay you need a bathroom or small easy to clean room or an extra-large dog crate of at least 5 feet long.",
					},
				],
			},
		},
	},
	vItemTxt: {
		typeT: "",
		descriptionT: "You will be helping with...",
		requirementT: "You will need...",
	},
	nav: {
		nav1: { title: "Home", path_var: "" },
		nav2: { title: "About us", path_var: "about" },
		nav3: { title: "Donate", path_var: "donation" },
		nav4: { title: "Adoption", path_var: "adoption" },
		nav5: { title: "Our Cats", path_var: "ourcats" },
		nav6: { title: "Events", path_var: "calendar" },
		nav7: { title: "News", path_var: "updates" },
		nav8: { title: "Volunteer", path_var: "volunteer" },
		nav9: { title: "Education", path_var: "education" },
		nav10: { title: "Contact", path_var: "contact" },
		nav11: { title: "LogIn", path_var: "login" },
		language_en: "EN",
		language_fr: "FR",
	},
	ourcatsT: {
		success: {
			0: "Until now, we have helped ",
			1: " cats to find their forever home on PetFinder!",
		},
		adoptable:
			"Please see below for our currently adoptable cats! If you have questions about the adoption, please see the Adoption tab for process and fees.",
	},
	catTabT: {
		appearance: {
			title: "Appearance",
			hair: "Hair",
			colors: "Colors",
		},
		health: {
			title: "Health & Conditions",
			declaw: "Declawed",
			house: "House Trained",
			shot: "Vaccination",
			sterilize: "Sterilized",
			special: "Special Needs",
		},
		friendly: {
			title: "Friendly with",
			cats: "Cats",
			dogs: "Dogs",
			children: "Children",
		},
		click: {
			click0: "Click to sponser, or see more details about ",
			click1: " on PetFinder",
		},
	},
	ourCalT: {
		pageTitle: "Click on the day with a pin to see the events!",
		addEventT: {
			title: "Add An Event to Calendar",
			selectedDate: "Selected Date: ",
			location: "Location: ",
			startT: "Start Time: ",
			endT: "End TIme: ",
			description: "Descriptoin: ",
			addEventBtn: "Add Event",
		},
		dateEventT: "The event(s) of selected day are shown below",
		dateEventAllT: "All events are listed below.",
	},
	confirmEventT: {
		title: {
			title0: "Are you sure you want to ",
			title1: " the following event? Click yes to ",
		},
		labelT: {
			title: "Title",
			type: "Type",
			location: "Locatoin",
			startT: "Start Time",
			endT: "End Time",
			description: "Description",
			date: "Date",
		},
		btnT: {
			confirm: "Yes",
			cancel: "No",
		},
		typeT: {
			add: "add",
			cancel: "cancel",
		},
	},
	calendarEventT: {
		title: { title0: "Event ", title1: " on " },
		labelT: {
			title: "Title",
			type: "Type",
			location: "Locatoin",
			startT: "Start Time",
			endT: "End Time",
			description: "Description",
			date: "Date",
		},
		btnT: {
			cancel: "cancel",
		},
	},
	postT: {
		singlePostT: {
			postedOn: "Posted on: ",
			postedBy: "Posted By: ",
			btnDelete: "delete",
		},
	},
	confirmPostT: {
		title: {
			title0: "Are you sure you want to ",
			title1: " post? Click yes to ",
		},
		labelT: {
			title: "Title",
			content: "Content",
		},
		btnT: {
			confirm: "Yes",
			cancel: "No",
		},
		typeT: {
			add: "add",
			delete: "delete",
		},
	},
	addPostT: {
		titleT: "What's happenning?",
		placeholderT: {
			addTitle: "Give your post a title!",
			addContent:
				"Enter your post here... Add a '\n' at the end of each paragraph to seperate them.",
		},
		addBtn: "POST",
	},

	eduTxt: {
		title:
			"please see below for useful links and youtube videos for education in cats. The orders are arbitrary!",
		titleLink: "Some useful links",
		titleVideos:
			"Here are some youtubers we recommend you to checkout if you want to learn more about our feline friends!",
	},
	channelTabTxt: {
		tagTitle: "Keywords",
	},
	logInTxt: {
		RestrictionT:
			"Only the staff of moustache de chat will be able to log in. If you are a member and want to log in, please contact staff for authorization.",
		userCurrentT: "Current User",
		logT: { logOptions: "LogIn Options", logOut: "Log Out" },
		options: { optionGoogle: "GOOGLE" },
	},
	adoptionTxt: {
		title: "Fees & Proceudres of adoption from us",
		introT: {
			introTitle: "Why we need to charge?",
			introContent:
				"To cover costs, and to save more cats! We use the fund for vet bills, food bills and all other expenses. The charge keeps us running and is crucial! It's also symbolicly seen as an adopter's commitment to accept the cat as a family.",
		},
	},
	adoptionFeeTxt: {
		title: "General Fee Table",
		tableTHeader: { title_type: "Cat", title_price: "Charge" },
		tableT: [
			{ thT_type: "Kittens", tdT_price: 250 },
			{ thT_type: "Cats over 6 months old", tdT_price: 220 },
			{ thT_type: "Cats over 7 years old", tdT_price: 180 },
			{ thT_type: "Cats over 10 years old", tdT_price: 140 },
			{ thT_type: "Cats with FIV+ and in good health", tdT_price: 150 },
			{
				thT_type: "Compassion adoption for special need cats",
				tdT_price: 100,
			},
		],
		tableSpecialT:
			"Special cases may occur, see our petFinder for details on each cat!",
	},
	adoptionProcedureTxt: {
		title: "Interested in a cat?",
		content:
			"If a cat interests you, let us know by contacting us at PLACE_HOLDER and...",
		contentProcess: [
			"Request our adoption form and filling out the form",
			"If your adoption request is approved, we invite you to meet the cat(s) you are interested in.",
			"You will then be required to sign our adoption contract upon meeting the cat you wish to adopt which re-states the rules to respect when you adopt from us.",
		],
	},
	contactTxt: {
		title: "Please email PLACE_HOLDER for any inquires!",
		titleSub: {
			fb: "Follow us on Facebook for latest updates",
			pf: "See full info of our cats on Petfinder",
		},
		emailT: {
			btnT: "Click to open your mailbox",
			subject: "Email sent from Moustache webpage",
			content: "Hi, I am sending the email because:",
		},
	},
};

export default t_en;
