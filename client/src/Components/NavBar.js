import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLan } from "../Context/LanguageContext";
import { device, COLORS } from "../constants";
import Hamburger from "hamburger-react";

const NavBar = () => {
	const [displayNav, setDN] = useState(false);
	const { text, setLan, curLan } = useLan(); // get the nav texts & set language
	const { nav } = text;
	const arr = Array.from(Array(Object.keys(nav).length - 2).keys()); // the last two elements are EN/FR

	//handler
	const burgerOnClick = () => {
		setDN(!displayNav);
	};

	return (
		<NavBarWrapper>
			<BurgerWrapper onClick={burgerOnClick}>
				<Hamburger size={20} toggled={displayNav} toggle={setDN} />
				<DropDownWrapper d={displayNav}>
					{arr.map((ind) => {
						const { title, path_var } = nav[`nav${ind + 1}`];
						return (
							<NavBarButton
								key={`nav-button-burger-${ind + 1}`}
								to={`/${path_var}`}
								exact
								burger={true}
							>
								{title}
							</NavBarButton>
						);
					})}
				</DropDownWrapper>
			</BurgerWrapper>
			<NavBarBtnWrapper>
				{arr.map((ind) => {
					const { title, path_var } = nav[`nav${ind + 1}`];
					return (
						<NavBarButton
							key={`nav-button-${ind + 1}`}
							to={`/${path_var}`}
							exact
						>
							{title}
						</NavBarButton>
					);
				})}
			</NavBarBtnWrapper>
			<NavBarLanWrapper>
				<NavBarLan onClick={() => setLan("en")} curLan={curLan} thisLan={"en"}>
					{nav.language_en}
				</NavBarLan>
				&nbsp;&nbsp;/&nbsp;&nbsp;
				<NavBarLan onClick={() => setLan("fr")} curLan={curLan} thisLan={"fr"}>
					{nav.language_fr}
				</NavBarLan>
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
	align-items: center;
	justify-content: space-between;
	@media ${device.xs}, ${device.sm} {
	}
`;
const BurgerWrapper = styled.div`
	width: 100%;
	display: none;
	z-index: 160;
	@media ${device.xs} {
		display: inline-block;
	}
	@media ${device.sm} {
		display: inline-block;
	}
`;
const NavBarBtnWrapper = styled.div`
	width: 100%;
	height: 45px;
	display: flex;
	flex-wrap: nowrap;
	justify-content: initial;
	align-items: center;

	@media ${device.xs}, ${device.sm} {
		display: none;
	}
`;
const DropDownWrapper = styled.div`
	width: 100%;
	display: ${(prop) => (prop.d ? "flex" : "none")};
	flex-direction: column;
	flex-wrap: nowrap;
	position: absolute;
	top: 45px;
`;
const activeClassName = "nav-item-active";
const NavBarButton = styled(NavLink).attrs({ activeClassName })`
	color: ${COLORS.white};
	text-decoration: none;
	cursor: pointer;
	font-size: 1.1rem;
	width: ${(prop) => (prop.burger ? "100%" : "auto")};
	height: ${(prop) => (prop.burger ? "60px" : "45px")};
	line-height: 45px;
	background: ${COLORS.darkPurple};
	flex-grow: 1;
	flex-shrink: 1;

	:hover {
		background: ${COLORS.lightPurple};
	}
	&.${activeClassName} {
		background: ${COLORS.lightPurple};
		text-decoration: underline;
	}
`;
const NavBarLanWrapper = styled.div`
	height: 45px;
	line-height: 45px;
	padding: 0 15px 0 15px;
	@media ${device.xs}, ${device.sm} {
		display: inline-block;
	}
`;
const NavBarLan = styled.span`
	font-size: 1.2rem;
	cursor: pointer;
	:hover {
		text-decoration: underline dotted;
	}
	text-decoration: ${(props) =>
		props.curLan === props.thisLan ? "underline" : "none"};
`;
export default NavBar;
