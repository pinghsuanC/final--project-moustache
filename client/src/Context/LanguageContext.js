import React, { useState, useEffect, createContext, useContext } from "react";

const defualtVal = {};
const LanguageContext = createContext(defualtVal);
const LanguageContextProvider = ({ children }) => {
	const [lan, setLan] = useState("en");
	const text = {};

	// english
	text["en"] = {
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
					desctiption:
						"to help with adoption day laundry and cleaning pick up and return",
					requirement: "May need car to transport.",
				},
			},
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
	};

	// french
	text["fr"] = {
		home: {
			homeTitle: "Moustache",
			homeSubTitle: "Adoptez pour la vie.",
			homeMiddleIntro:
				"FR: We are a registered cat rescue organization based in Montreal, run by group of volunteer cat lovers.",
			homeReadMore: "FR: Read more about us...",
			homeItems: {
				item1: { title: "FR: Whiskers's Mission", path_var: "about" },
				item2: { title: "FR: About Adoption", path_var: "adoption" },
				item3: { title: "FR: Posts & Updates", path_var: "updates" },
				item4: { title: "FR: Our Cats", path_var: "ourcats" },
				item5: { title: "FR: Our Calendar", path_var: "calendar" },
				item6: { title: "FR: Staff and Contact", path_var: "contact" },
				item7: { title: "FR: Donation", path_var: "donation" },
				item8: { title: "FR: Education & Resources", path_var: "education" },
			},
			homeMiddleDonate:
				"FR: If you like our work, please consider support us by donation or volunteer.",
			homeDonation: {
				donate:
					"FR: If you like our work, please consider donate, so we could continue our mission. Help save a life!",
				button: "FR: Donate",
			},
		},

		about: {
			aboutUs: "FR: About us...",
			aboutLegal: "FR: Legal Information",
			aboutNP: "Numéro d’entreprise du Québec OBNL: ",
			aboutCH: "Organisme de charité ARC: ",
			aboutIntroTitle: "FR: Our Operation",
			aboutIntro: {
				aboutIntro1:
					"Nous offrons une alternative simple et conviviale pour que des animaux puissent être adoptés au lieu d'aller mourir dans une fourrière ou traîner pendant des années dans un refuge.",
				aboutIntro2: `Aident des chats abandonnés à trouver de nouvelles familles en organisant des journées d'adoption 3 samedis par mois en moyenne.  Ces journées d'adoption prennent place principalement au sein de boutiques pour animaux à Montréal (voir la page "Évènements" pour dates).`,
				aboutIntro3:
					"Stérilisent des chats errants ou de ferme pour éviter la surpopulation féline dans la région du Grand Montréal et environs (TNRM).",
				aboutIntro4:
					"Même si nous hébergeons en moyenne une quarantaine de chats en famille d'accueil, nous essayons autant que possible d'assurer que les personnes qui trouvent ou abandonnent les chats continuent d'en prendre soin jusqu'à ce que nous puissions leur trouver un foyer temporaire ou permanent",
				aboutIntro5:
					"Moustache n'a pas de refuge et un nombre limité de familles d'accueil., therefore, we are always seeking new members to join us.",
				aboutIntro6:
					"Moustache Adoptions ne capture pas les chats errants sur demande et n'accepte pas de mettre des chats sauvages ou semi-sauvages en adoption.",
			},
		},
		volunteerT: {
			volTitle:
				"FR: We appreciate all helps from you. If you are willing to provide help, please see below for what we may need form you!",
			volCat: {
				0: {
					type: "FR: Drivers",
					description: "FR: help to transport cats and supplies",
					requirements:
						"FR: you should be located in Montreal, and able to drive!",
				},
				1: {
					type: "FR: Sellers",
					description: "FR: help to sell books, house items etc on internet.",
					requirements:
						"FR: You may need a car to pick up the items at certain locations and a cell phone.",
				},
				2: {
					type: "FR: Adoption agent",
					description: "FR: help with adoption process.",
					requirement: "FR: French and English communication.",
				},
				3: {
					type: "FR: Garage sale arranger",
					description: "FR: to setup and packing crew members for garage sales",
					requirements: "FR: Able to organize events.",
				},
				4: {
					type: "FR: Adoption day Assistant",
					desctiption:
						"FR: to help with adoption day laundry and cleaning pick up and return",
					requirements: "FR: May need car to transport.",
				},
			},
		},
		nav: {
			nav1: { title: "FR: Home", path_var: "" },
			nav2: { title: "FR: About us", path_var: "about" },
			nav3: { title: "FR: Donate", path_var: "donation" },
			nav4: { title: "FR: Adoption", path_var: "adoption" },
			nav5: { title: "Nos chats", path_var: "ourcats" },
			nav6: { title: "Événements", path_var: "calendar" },
			nav7: { title: "Nouvelles", path_var: "updates" },
			nav8: { title: "FR: Contact", path_var: "contact" },
			nav9: { title: "FR: Education", path_var: "education" },
			nav10: { title: "FR: Volunteer", path_var: "volunteer" },
			nav11: { title: "FR: LogIn", path_var: "login" },
			language_en: "EN",
			language_fr: "FR",
		},
		ourcatsT: {
			success: {
				0: "FR: Until now, we have helped ",
				1: " FR: cats to find their forever home on PetFinder!",
			},
			adoptable:
				"FR: Please see below for our currently adoptable cats! If you have questions about the adoption process, please see the Adoption tab for process and fees.",
		},
		catTabT: {
			appearance: {
				title: "FR:Appearance",
				hair: "FR:Hair",
				colors: "FR:Colors",
			},
			health: {
				title: "FR:Health & Conditions",
				declaw: "FR:Declawed",
				house: "FR:House Trained",
				shot: "FR:Vaccination",
				sterilize: "FR:Sterilized",
				special: "FR:Special Needs",
			},
			friendly: {
				title: "FR:Friendly with",
				cats: "FR:Cats",
				dogs: "FR:Dogs",
				children: "FR:Children",
			},
			click: {
				click0: "FR:Click to sponser, or see more details about ",
				click1: "FR: on PetFinder",
			},
		},
		ourCalT: {
			pageTitle: "FR: Click on the day with a pin to see the events!",
			addEventT: {
				title: "FR: Add An Event to Calendar",
				selectedDate: "FR: Selected Date: ",
				location: "FR: Location: ",
				startT: "FR: Start Time: ",
				endT: "FR: End TIme: ",
				description: "FR: Descriptoin: ",
				addEventBtn: "FR: Add Event",
			},
			dateEventT: "FR: The event(s) of selected day are shown below.",
			dateEventAllT: "FR: All events are listed below.",
		},
		confirmEventT: {
			labelT: {
				title: "FR: Title",
				type: "FR: Type",
				location: "FR: Locatoin",
				startT: "FR: Start Time",
				endT: "FR: End Time",
				description: "FR: Description",
				date: "FR: Date",
			},
			btnT: {
				confirm: "FR: confirm",
				cancel: "FR: cancel",
			},
		},
		calendarEventT: {
			title: { title0: "Event ", title1: " on " },
			labelT: {
				title: "FR: Title",
				type: "FR: Type",
				location: "FR: Locatoin",
				startT: "FR: Start Time",
				endT: "FR: End Time",
				description: "FR: Description",
				date: "FR: Date",
			},
			btnT: {
				cancel: "FR: cancel",
			},
		},
		postT: {
			singlePostT: {
				postedOn: "FR: Posted on: ",
				postedBy: "FR: Posted By: ",
				btnDelete: "FR: delete",
			},
		},
		confirmPostT: {
			title: {
				title0: "FR: Are you sure you want to ",
				title1: "FR: post? Click yes to ",
			},
			labelT: {
				title: "FR:Title",
				content: "FR:Content",
			},
			btnT: {
				confirm: "FR:Yes",
				cancel: "FR:No",
			},
			typeT: {
				add: "FR:add",
				delete: "FR:delete",
			},
		},
		addPostT: {
			titleT: "FR: What's happenning?",
			placeholderT: {
				addTitle: "FR: Give your post a title!",
				addContent:
					"FR: Enter your post here... Add a '\n' at the end of each paragraph to seperate them.",
			},
			addBtn: "FR: POST",
		},
	};

	return (
		<LanguageContext.Provider
			value={{ text: text[lan], setLan: setLan, curLan: lan }}
		>
			{children}
		</LanguageContext.Provider>
	);
};

function useLan() {
	const c = useContext(LanguageContext);
	if (c === defualtVal) {
		throw new Error("The context is defult");
	} else {
		return c;
	}
}

export { LanguageContextProvider, useLan };
