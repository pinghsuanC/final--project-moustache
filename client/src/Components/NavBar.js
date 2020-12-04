import styled from "styled-components";
import react from "react";
import { useHistory } from "react-router-dom";
import { useLan } from "../Context/LanguageContext";
import { device, COLORS, IMGS } from "../constants";

function switchPage(target) {}

const NavBar = () => {
	const history = useHistory();
	const { text, setLan } = useLan(); // get the nav texts & set language
	const { nav } = text;

	// handle click on button to navigate to other page
	const handleClick = (target) => {
		history.push(`/${target}`);
	};

	return (
		<NavBarWrapper>
			<NavBarButton onClick={() => handleClick("")}>{nav.nav1}</NavBarButton>
			<NavBarButton onClick={() => handleClick("about")}>
				{nav.nav2}
			</NavBarButton>
			<NavBarButton>{nav.nav3}</NavBarButton>
			<NavBarButton>{nav.nav4}</NavBarButton>
			<NavBarButton>{nav.nav5}</NavBarButton>
			<NavBarButton>{nav.nav6}</NavBarButton>
			<NavBarButton>{nav.nav7}</NavBarButton>
			<NavBarButton>{nav.nav8}</NavBarButton>
			<NavBarButton>{nav.nav9}</NavBarButton>
			<NavBarLanWrapper>
				<NavBarLan>{nav.language_en}</NavBarLan>&nbsp;&nbsp;/&nbsp;&nbsp;
				<NavBarLan>{nav.language_fr}</NavBarLan>
			</NavBarLanWrapper>
		</NavBarWrapper>
	);
};
const NavBarWrapper = styled.div`
	width: 100%;
	height: 45px;
	background: ${COLORS.darkPurple};
	color: ${COLORS.white};

	display: flex;
	flex-wrap: nowrap;
	justify-content: space-evenly;
	align-items: center;
`;
const NavBarButton = styled.div`
	cursor: pointer;
	font-size: 1.1rem;
`;
const NavBarLanWrapper = styled.div``;
const NavBarLan = styled.span`
	font-size: 1.2rem;
	cursor: pointer;
	:hover {
		text-decoration: underline dotted;
	}
`;
export default NavBar;
