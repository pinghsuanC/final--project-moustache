import React, { useState, useEffect, createContext, useContext } from "react";
import t_en from "./LanguageTexts/language_en";
import t_fr from "./LanguageTexts/language_fr";

const defualtVal = {};
const LanguageContext = createContext(defualtVal);
const LanguageContextProvider = ({ children }) => {
	const [lan, setLan] = useState("en");
	const text = {};

	// english
	text["en"] = t_en;

	// french
	text["fr"] = t_fr;

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
