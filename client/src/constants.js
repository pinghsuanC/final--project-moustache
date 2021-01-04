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
import Petfinder_logo from "./Assets/Logos/Petfinder_logo";
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
	BiHeartCircle as Volunteer_logo,
} from "react-icons/bi";
import { AiFillFacebook as Fb_Logo } from "react-icons/ai";

export const mediaQueries = {
	xs: "(min-width: 320px) and (max-width:767px) ",
	sm: "(min-width:768px) and (max-width: 991px)",
	md: "(min-width: 992px) and (max-width: 1023px)",
	lg: "(min-width: 1024px)",
};

export const device = {
	//mobileS: `(min-width: ${size.mobileS})`,
	xs: "(min-width: 320px) and (max-width:767px) ",
	sm: "(min-width: 768px) and (max-width: 991px)",
	md: "(min-width: 992px) and (max-width: 1023px)",
	lg: "(min-width: 1023px)",
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

export const LINKSADDED = {
	link_moustacheFB: "https://www.facebook.com/MoustacheAdoptionsMtl/",
	link_moustachePF:
		"https://www.petfinder.com/member/ca/qc/montreal/moustache-qc64/",
	link_moustacheAdopted:
		"https://www.petfinder.com/search/pets-adopted/?shelter_id%5B0%5D=QC64&sort%5B0%5D=recently_added",

	recommendedLinks: [
		{
			title: "Éduchateur",
			description: "Feline behaviour experts / Experts en comportement félin",
			link: "https://educhateur.com/en/",
		},
		{
			title: "Jackson Galaxy",
			description: "Feline behaviour expert (English only)",
			link: "http://jacksongalaxy.com",
		},
		{
			title: "MAPAQ - Situation juridique de l’animal",
			description: "La situation juridique de l'animal au Québec.",
			link:
				"https://www.mapaq.gouv.qc.ca/fr/Productions/santeanimale/securitebea/Pages/situationjuridiqueanimal.aspx#:~:text=L'animal%20n'est%20plus,sensibilit%C3%A9%20ayant%20des%20imp%C3%A9ratifs%20biologiques.",
		},
		{
			title: "BaileyBlue",
			description:
				"Nutrition experts and host for our adoption days / Experts en nutrition et hôte pour nos journées d'adoption",
			link: "http://www.baileyblu.com ",
		},
		{
			title: "La cohabitation entre chats",
			description:
				"L’arrivée d’un nouveau chat chez vous lorsque vous en possédez déjà un n’est pas un problème mais doit être préparée.",
			link:
				"https://www.wanimo.com/veterinaire/comportement-du-chat/cohabitation-entre-chats.html",
		},
		{
			title: "Enregistrer mon animal",
			description:
				"Enregistrement des animaux domestiques pour les municipalités desservies par ProAnima",
			link: "https://www.proanima.com/fr/nos-services/enregistrer-mon-animal/",
		},
	],
};

export const moustache_email = "estelleblais@hotmail.com";
export const email_moustacheDonate = "estelle.blais@mac.com";
export const LOGOS = {
	ArrowRight,
	Yes,
	No,
	Female,
	Male,
	Unknown,
	dayPin,

	Moustache_logo,
	Petfinder_logo,
	Volunteer_logo,
	Fb_Logo,
};

//export const ip = "";
export const ip = "https://moustache-back.herokuapp.com"; //"https://moustache-back.herokuapp.com/";
