import styled from "styled-components";
import react from "react";
import { NavLink } from "react-router-dom";
import { useLan } from "../Context/LanguageContext";
import { device, COLORS } from "../constants";

const NavBar = () => {
	const { text, setLan } = useLan(); // get the nav texts & set language
	const { nav } = text;
	const arr = Array.from(Array(Object.keys(nav).length - 2).keys());
	return (
		<NavBarWrapper>
			{arr.map((ind) => {
				const { title, path_var } = nav[`nav${ind + 1}`];
				return (
					<NavBarButton key={`nav-button-${ind + 1}`} to={`/${path_var}`} exact>
						{title}
					</NavBarButton>
				);
			})}
			<NavBarLanWrapper>
				<NavBarLan onClick={() => setLan("en")}>{nav.language_en}</NavBarLan>
				&nbsp;&nbsp;/&nbsp;&nbsp;
				<NavBarLan onClick={() => setLan("fr")}>{nav.language_fr}</NavBarLan>
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
const activeClassName = "nav-item-active";
const NavBarButton = styled(NavLink).attrs({ activeClassName })`
	color: ${COLORS.white};
	text-decoration: none;
	cursor: pointer;
	font-size: 1.1rem;
	width: 100%;
	height: 45px;
	line-height: 45px;
	background: ${COLORS.darkPurple};

	:hover {
		background: ${COLORS.lightPurple};
	}
	&.${activeClassName} {
		background: ${COLORS.lightPurple};
		text-decoration: underline;
	}
`;
const NavBarLanWrapper = styled.div`
	width: 100%;
	height: 45px;
	line-height: 45px;
`;
const NavBarLan = styled.span`
	font-size: 1.2rem;
	cursor: pointer;
	:hover {
		text-decoration: underline dotted;
	}
`;
export default NavBar;
