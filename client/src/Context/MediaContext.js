import React, { useState, useEffect, createContext, useContext } from "react";

// context
const defaultValue = {};
const MediaContext = createContext(defaultValue);

const MediaContextProvider = ({ children, mediaQueries }) => {
	// provide the media query for the children
	const [queryMatch, setQueryMatch] = useState({});

	// side-effect of resizing
	useEffect(() => {
		const mediaQueryL = {}; // the place to store the result
		const keys = Object.keys(mediaQueries); // the keys, xs, sm, md, lg
		let isAttached = false; // flag

		// callback handler for listener
		const handleQueryListener = () => {
			// check whether the query mathes
			const updatedMatches = keys.reduce((acc, media) => {
				// check "emptiness" and whether the media query list matches
				acc[media] = !!(mediaQueryL[media] && mediaQueryL[media].matches);
				return acc;
			}, {});
			setQueryMatch(updatedMatches);
		};

		if (window && window.matchMedia) {
			const matches = {};
			keys.forEach((m) => {
				if (typeof mediaQueries[m] === "string") {
					// create the media query list for each one, and store in mediaQuery list
					mediaQueryL[m] = window.matchMedia(mediaQueries[m]);
					// store whether the window matches the MQL and store in matches
					matches[m] = mediaQueryL[m].matches;
				} else {
					// something went wrong in the media queries that's not a string
					matches[m] = false;
				}
			});
			// update query match
			setQueryMatch(matches);
			// turn flag to true
			isAttached = true;
			keys.forEach((media) => {
				if (typeof mediaQueries[media] === "string") {
					// add handler for each media query list
					// listen to each query change
					mediaQueryL[media].addListener(handleQueryListener);
				}
			});
		}

		return () => {
			if (isAttached) {
				keys.forEach((media) => {
					if (typeof mediaQueries[media] === "string") {
						// remove the listener from the window
						mediaQueryL[media].removeListener(handleQueryListener);
					}
				});
			}
		};
	}, [mediaQueries]);

	return (
		<MediaContext.Provider value={queryMatch}>{children}</MediaContext.Provider>
	);
};
// manually hook the context
function useMedia() {
	const context = useContext(MediaContext);
	if (context === defaultValue) {
		throw new Error();
	}
	return context;
}

export { MediaContextProvider, useMedia };
