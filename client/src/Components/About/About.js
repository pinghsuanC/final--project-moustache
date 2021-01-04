import styled from "styled-components";
import { COLORS, LOGOS, LINKSADDED, device } from "../../constants";
import { useLan } from "../../Context/LanguageContext";
import Reusable from "../Reusable";
import H1 from "../Reusable/H1";
import TemplateDiv from "../Reusable/TemplateDiv";

const About = () => {
	const { text } = useLan();
	const {
		aboutUs,
		aboutLegal,
		aboutNP,
		aboutCH,
		aboutIntroTitle,
		aboutIntro,
		aboutLinkTitle,
	} = text["about"];
	return (
		<AboutWrapper>
			<H1>{aboutUs}</H1>
			<AboutInnerWrapper>
				<AboutInfoWrapper>
					<AboutInfoInnerWrapper>
						<AboutInfoTitle>{aboutIntroTitle}</AboutInfoTitle>
						<AboutInfo>
							{Object.keys(aboutIntro).map((ele, ind) => {
								return (
									<AboutInfoLi key={`aboutIntro-${ind}`}>
										{aboutIntro[ele]}
									</AboutInfoLi>
								);
							})}
						</AboutInfo>
					</AboutInfoInnerWrapper>
				</AboutInfoWrapper>
				<AboutVerticleWrapper>
					<AboutInfoLogoWrapper>
						<AboutInfoLogo src={LOGOS.Moustache_logo} />
					</AboutInfoLogoWrapper>
					<AboutLegal>
						<AboutSubTitle>{aboutLegal}</AboutSubTitle>
						<AboutRegistrat>
							<AboutReSub>
								{aboutNP}
								<ABoutReSubN>116825942</ABoutReSubN>
							</AboutReSub>
							<AboutReSub>
								{aboutCH}
								<ABoutReSubN>82345 9730 RR0001</ABoutReSubN>
							</AboutReSub>
						</AboutRegistrat>
					</AboutLegal>
					<AboutSocial>
						<AboutSubTitle>{aboutLinkTitle}</AboutSubTitle>
						<Reusable.AnchorLink href={LINKSADDED.link_moustacheFB}>
							<LOGOS.Fb_Logo size="30px" color={COLORS.darkPurple} />
						</Reusable.AnchorLink>
						<Reusable.AnchorLink href={LINKSADDED.link_moustachePF}>
							<LOGOS.Petfinder_logo color={COLORS.darkPurple} height="30px" />
						</Reusable.AnchorLink>
					</AboutSocial>
				</AboutVerticleWrapper>
			</AboutInnerWrapper>
		</AboutWrapper>
	);
};

const AboutWrapper = styled.div`
	padding-top: 50px;
	width: 90%;
	height: auto;
	margin-left: 5%;
`;

// ========= Overall wrapper =========
const AboutInnerWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	@media ${device.sm} {
		flex-direction: column;
	}
`;
const AboutSubTitle = styled.h2`
	font-size: 2rem;
	color: black;
	padding-top: 20px;
`;
const AboutVerticleWrapper = styled.div`
	width: 25%;
	@media ${device.sm}, ${device.xs} {
		width: 90%;
		margin-left: 5%;
		margin-top: 25px;
	}
`;

// ========= Legal Information =========
const AboutLegal = styled(TemplateDiv)`
	min-height: 290px;
	padding: 10px;
	-webkit-box-shadow: 12px 13px 2px -3px ${COLORS.black_shadow};
	box-shadow: 12px 13px 2px -3px ${COLORS.black_shadow};
`;
const AboutRegistrat = styled.ul`
	list-style-type: none;
	height: auto;
	color: black;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	text-align: center;
	margin-bottom: 20px;
`;
const AboutReSub = styled.li`
	font-weight: 600;
	text-align: center;
	line-height: 25px;
	margin-top: 20px;
`;
const ABoutReSubN = styled.div`
	font-weight: 100;
	margin-top: 10px;
	text-align: center;
`;
const AboutSocial = styled(AboutLegal)`
	min-height: 180px;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

// === insert logo ===
const AboutInfoLogoWrapper = styled.div`
	margin-bottom: 10px;
`;
const AboutInfoLogo = styled.img`
	object-fit: cover;
	width: 250px;
	height: 250px;
	@media ${device.sm}, ${device.xs} {
		display: none;
	}
`;
// ========= about information =========
const AboutInfoWrapper = styled.div`
	width: 60%;
	height: 100%;
	@media ${device.sm} {
		width: 90%;
		margin-left: 5%;
	}
`;
const AboutInfoInnerWrapper = styled(TemplateDiv)`
	-webkit-box-shadow: 12px 13px 2px -3px ${COLORS.black_shadow};
	box-shadow: 12px 13px 2px -3px ${COLORS.black_shadow};
`;

const AboutInfoTitle = styled(AboutSubTitle)``;
const AboutInfo = styled.ul`
	height: 100%;
	font-size: 1.2rem;
	padding: 60px;
	padding-top: 10px;
	padding-left: 60px; // include the bullet points
	width: auto;
	//height: auto;
	text-align: left;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;
const AboutInfoLi = styled.li`
	margin-top: 10px;
	margin-bottom: 10px;
	line-height: 25px;
`;
export default About;
