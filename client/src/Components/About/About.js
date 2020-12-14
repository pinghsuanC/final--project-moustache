import styled from "styled-components";
import react from "react";
import { device, COLORS, LOGOS } from "../../constants";
import { useLan } from "../../Context/LanguageContext";

const About = () => {
	const { text } = useLan();
	const {
		aboutUs,
		aboutLegal,
		aboutNP,
		aboutCH,
		aboutIntroTitle,
		aboutIntro,
	} = text["about"];
	return (
		<AboutWrapper>
			<AboutTitle>{aboutUs}</AboutTitle>
			<AboutInnerWrapper>
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
						<AboutLink
							href="https://www.facebook.com/MoustacheAdoptionsMtl/"
							target="_blank"
						>
							<LOGOS.fbLogo size="40px" color={COLORS.darkPurple} />
						</AboutLink>
					</AboutSocial>
				</AboutVerticleWrapper>
				<AboutInfoWrapper>
					<AboutInfoInnerWrapper>
						<AboutInfoTitle>{aboutIntroTitle}</AboutInfoTitle>
						<AboutInfo>
							{Object.keys(aboutIntro).map((ele) => {
								return (
									<AboutInfoLi key={`aboutIntro-${ele}`}>
										{aboutIntro[ele]}
									</AboutInfoLi>
								);
							})}
						</AboutInfo>
					</AboutInfoInnerWrapper>
				</AboutInfoWrapper>
			</AboutInnerWrapper>
		</AboutWrapper>
	);
};

const AboutWrapper = styled.div`
	padding-top: 100px;
	width: 80%;
	height: auto;
	margin-left: 10%;
`;

// ========= Overall wrapper =========
const AboutInnerWrapper = styled.div`
	width: 100%;
	margin-top: 50px;
	display: flex;
	justify-content: space-evenly;
`;
const AboutTitle = styled.h1`
	font-size: 5rem;
	color: ${COLORS.white};
`;
const AboutSubTitle = styled.h2`
	font-size: 2rem;
	color: black;
	padding-top: 20px;
`;
const AboutVerticleWrapper = styled.div`
	width: 23%;
`;
// ========= Legal Information =========
const AboutLegal = styled.div`
	background: ${COLORS.white_transparent};
	height: auto;
	min-height: 290px;
	border-radius: 10px;
	padding: 10px;
	text-align: center;
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
	min-height: 0px;
	margin-top: 20px;
`;
const AboutLink = styled.a`
	text-decoration: none;
`;
// === insert logo ===
const AboutInfoLogoWrapper = styled.div`
	margin-bottom: 10px;
`;
const AboutInfoLogo = styled.img`
	object-fit: cover;
	width: 100%;
`;
// ========= about information =========
const AboutInfoWrapper = styled.div`
	width: 65%;
	height: 100%;
`;
const AboutInfoInnerWrapper = styled.div`
	width: 100%;
	height: 100%;
	background: ${COLORS.white_transparent};
	border-radius: 10px;
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
