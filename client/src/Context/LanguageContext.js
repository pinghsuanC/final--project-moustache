import React, { useState, useEffect, createContext, useContext } from "react";

const defualtVal = {};
const LanguageContext = createContext(defualtVal);
const LanguageContextProvider = ({ children }) => {
	const [lan, setLan] = useState("en");
	const text = {};

	// english
	text["en"] = {
		homeTitle: "Whiskers",
		homeSubTitle: "Adoption is for life.",
		homeMiddleIntro:
			"We are a registered cat rescue organization based in Montreal, run by group of volunteer cat lovers.",
		homeReadMore: "Read more about us...",
		homeItems: {
			item1: "Whiskers's Mission",
			item2: "About Adoption",
			item3: "Posts & Updates",
			item4: "Our Cats",
			item5: "Our Calendar",
			item6: "Staff and Contact",
			item7: "Donation",
			item8: "Education & Resources",
		},
		homeMiddleDonate:
			"If you like our work, please consider support us by donation or volunteer.",
		homeDonation: {
			donate: "We need your help to continue our mission. Help save a life!",
			button: "Donate",
		},
		about: {
			aboutUs: "About us...",
			aboutNP: "Non-Profit Registration Number: ",
			aboutCH: "Charity Status Registration Number: ",
		},
		nav: {
			nav1: "Home",
			nav2: "About us",
			nav3: "Donate/Sponsor",
			nav4: "Adoption",
			nav5: "Meet our cats",
			nav6: "Calendar/Events",
			nav7: "Staff & Contact",
			nav8: "Volunteer",
			nav9: "LogIn / SignUp",
			language_en: "EN",
			language_fr: "FR",
		},
	};

	// french
	text["fr"] = {
		homeTitle: "Moustache",
		homeSubTitle: "Adoptez pour la vie.",
		homeMiddleIntro:
			"FR: We are a registered cat rescue organization based in Montreal, run by group of volunteer cat lovers.",
		homeReadMore: "FR: Read more about us...",
		homeItems: {
			item1: "FR: Whiskers's Mission & Adoption",
			item2: "FR: About Adoption",
			item3: "FR: Posts & Updates",
			item4: "FR: Our Cats",
			item5: "FR: Our Calendar",
			item6: "FR: Staff and contact",
			item7: "FR: Donation",
			item8: "FR: Education & Resources",
		},
		homeMiddleDonate:
			"FR: If you like our work, please consider support us by donation or volunteer.",
		homeDonation: {
			donate:
				"FR: If you like our work, please consider donate, so we could continue our mission. Help save a life!",
			button: "FR: Donate",
		},
		about: {
			aboutUs: "FR: About us...",
			aboutNP: "Numéro d’entreprise du Québec OBNL: ",
			aboutCH: "Organisme de charité ARC: ",
		},
		nav: {
			nav1: "FR: Home",
			nav2: "FR: About us",
			nav3: "FR: Donate/Sponsor",
			nav4: "FR: Adoption",
			nav5: "FR: Meet our cats",
			nav6: "FR: Calendar/Events",
			nav7: "FR: Staff & Contact",
			nav8: "FR: Volunteer",
			nav9: "FR: LogIn / SignUp",
			language_en: "EN",
			language_fr: "FR",
		},
	};

	return (
		<LanguageContext.Provider value={{ text: text[lan], lanSetter: setLan }}>
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
