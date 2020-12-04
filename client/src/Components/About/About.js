import styled from "styled-components";
import react from "react";
import { device, COLORS, IMGS } from "../../constants";
import { useLan } from "../../Context/LanguageContext";

const About = () => {
	const { text } = useLan();
	const { aboutUs, aboutNP, aboutCH } = text["about"];
	return (
		<AboutWrapper>
			<AboutTitle>{aboutUs}</AboutTitle>
			<AboutLegal>
				<AboutSubTitle>Legal Information: </AboutSubTitle>
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
		</AboutWrapper>
	);
};

const AboutWrapper = styled.div``;
const AboutTitle = styled.h1``;
const AboutSubTitle = styled.h2``;
const AboutLegal = styled.div``;
const AboutRegistrat = styled.ul``;
const AboutReSub = styled.li``;
const ABoutReSubN = styled.div``;
export default About;
