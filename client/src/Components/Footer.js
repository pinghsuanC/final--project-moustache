import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS, LOGOS, LINKSADDED } from "../constants";
import AnchorLink from "./Reusable/AnchorLink";
import { useLan } from "../Context/LanguageContext";

const Footer = () => {
	const { nav } = useLan().text;
	const arr = Array.from(Array(Object.keys(nav).length - 2).keys());

	return (
		<FooterWrapper>
			<LinkWrapper>
				{arr.map((ind) => {
					const { title, path_var } = nav[`nav${ind + 1}`];
					return (
						<StyledLink key={`nav-button-${ind + 1}`} to={`/${path_var}`} exact>
							{title}
						</StyledLink>
					);
				})}
			</LinkWrapper>
			<LinkWrapper2>
				<AnchorLink href={LINKSADDED.link_moustacheFB}>
					<LOGOS.Fb_Logo size="30px" color={COLORS.lightPurple} />
				</AnchorLink>
				<AnchorLink href={LINKSADDED.link_moustachePF}>
					<LOGOS.Petfinder_logo color={COLORS.lightPurple} height="30px" />
				</AnchorLink>
			</LinkWrapper2>
		</FooterWrapper>
	);
};
const FooterWrapper = styled.div`
	width: 90%;
	background: ${COLORS.darkPurple};
	padding: 30px 5% 30px 5%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const LinkWrapper = styled.div`
	width: 70%;
	text-align: center;
	display: flex;
	flex-wrap: wrap;
`;
const StyledLink = styled(Link)`
	color: white;
	width: 30%;
	height: auto;
	line-height: auto;
	margin: 10px 5px 5px 0px;
`;
const LinkWrapper2 = styled.div`
	width: 30%;
	display: flex;
	justify-content: space-evenly;
`;

export default Footer;
