import HomeBanner from "./Assets/HomeBanner.jpg";
import HomeIntroBanner from "./Assets/HomeIntroBanner.jpg";
import item1 from "./Assets/item1.jpg";
import item2 from "./Assets/item2.jpg";
import item3 from "./Assets/item3.jpg";
import item4 from "./Assets/item4.jpg";
import item5 from "./Assets/item5.jpg";
import item6 from "./Assets/item6.jpg";
import item7 from "./Assets/item7.jpg";
import item8 from "./Assets/item8.jpg";
import Moustache_logo from "./Assets/Logos/Moustache_logo.jpg";
import stickyNote from "./Assets/stickyNote.png";
import donation from "./Assets/donation.jpg";

/*import ArrowRight from "./Assets/Logos/ArrowRight";
import No from "./Assets/Logos/No";
import Yes from "./Assets/Logos/Yes";*/
import {
	BiRightArrowCircle as ArrowRight,
	BiCheck as Yes,
	BiX as No,
	BiFemaleSign as Female,
	BiMaleSign as Male,
	BiQuestionMark as Unknown,
	BiPin as dayPin,
	BiHeartCircle as volunteerLogo,
} from "react-icons/bi";
import { AiFillFacebook as fbLogo } from "react-icons/ai";

export const mediaQueries = {
	xs: "(max-width: 320px)",
	sm: "(min-width:320px) and (max-width: 720px)",
	md: "(min-width: 720px) and (max-width: 1024px)",
	lg: "(min-width: 1024px)",
};
export const size = {
	xs: "321px",
	sm: "721px",
	md: "1025px",
	lg: "1025px",
};
export const device = {
	//mobileS: `(min-width: ${size.mobileS})`,
	xs: `(max-width: ${size.xs})`,
	sm: `(min-width: ${size.xs}) and (max-width:${size.sm})`,
	md: `(min-width: ${size.sm}) and (max-width: ${size.lg})`,
	lg: `(min-width: ${size.lg})`,
};

export const COLORS = {
	black: "black",
	black_shadow: "rgba(60, 60, 60, 0.84)",
	gray: "#eeeeee",
	lightgray: "#f7f7f7",
	white: "white",
	white_transparent: "rgba(255,255,255, 0.7)",
	blue: "#22A7F0",
	lightblue: "rgb(79,176,184)",
	palePink: "#f9e0ec",
	pink: "#F47983",
	paleYellow: "#fef1e0",
	lightYellow: "#fcf876",
	orange: "#f1b61a",
	lightPurple: "#836B9F",
	darkPurple: "#4e2c76",
	exDarkPurple: "#170243",
	green: "green",
	red: "red",
};

export const IMGS = {
	cat_banner: {
		src: HomeBanner,
		author: "Ryan Manwiller",
		authorLink:
			"https://unsplash.com/@rydama?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
	},
	cat_intro: {
		src: HomeIntroBanner,
		author: "Pierre Herman",
		authorLink: "https://unsplash.com/@lepipotron",
	},
	item1: {
		src: item1,
		author: "Biel Morro",
		authorLink:
			"https://unsplash.com/@bielmorro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
	},
	item2: {
		src: item2,
		author: "Loan",
		authorLink:
			"https://unsplash.com/@l_oan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
	},
	item3: {
		src: item3,
		author: "Jonas Vincent",
		authorLink: "https://unsplash.com/@jonasvincentbe",
	},
	item4: {
		src: item4,
		author: "Eric Han",
		authorLink: "https://unsplash.com/@madeyes",
	},
	item5: {
		src: item5,
		author: "Anton Kraev",
		authorLink: "https://unsplash.com/@antohakraev",
	},
	item6: {
		src: item6,
		author: "Louis Droege",
		authorLink: "https://unsplash.com/@lois184",
	},
	item7: {
		src: item7,
		author: "MIKHAIL VASILYEV",
		authorLink: "https://unsplash.com/@miklevasilyev",
	},
	item8: {
		src: item8,
		author: "Lisheng Chang",
		authorLink: "https://unsplash.com/@changlisheng",
	},
	donation: {
		src: donation,
		author: "Ryunosuke Kikuno",
		authorLink: "https://unsplash.com/@kknrynsk_jp",
	},
	stickyNote: {
		src: stickyNote,
	},
};

export const LOGOS = {
	ArrowRight,
	Moustache_logo,
	Yes,
	No,
	Female,
	Male,
	Unknown,
	dayPin,
	volunteerLogo,
	fbLogo,
};

export const ip = ""; //"https://moustache-back.herokuapp.com/";
