import styled from "styled-components";
import react from "react";
import { device, COLORS, LOGOS } from "../../constants";
import { useLan } from "../../Context/LanguageContext";
import VolunteerItem from "./VolunteerItem";
import H1 from "../Reusable/H1";
import TemplateDiv from "../Reusable/TemplateDiv";

const Volunteer = () => {
	const { volunteerT } = useLan().text;
	const { volTitle, volCat, fosterT } = volunteerT;

	const {
		fosterTitleT,
		fosterProvideT: { fosterPTitle, provideTableHeader, moustacheP, fosterP },
		fosterTypeT: { fosterTypesTitle, fosterTypes },
	} = fosterT;

	return (
		<VolunteerWrapper>
			<StyledH1>{volTitle}</StyledH1>
			<VolunteerInnerWrap>
				{Object.values(volCat).map((ele, ind) => {
					return <VolunteerItem info={ele} key={`volunteer-${ind}`} />;
				})}
			</VolunteerInnerWrap>
			<StyledH1>{fosterTitleT}</StyledH1>
			{/*foster information*/}
			<VolunteerInnerWrap>
				<FosterDiv>
					<FosterTitle>{fosterPTitle}</FosterTitle>
					<FosterInnerWrapper type="row">
						<PUl>
							<LiTitle h={true}>{provideTableHeader[0]}</LiTitle>
							{moustacheP.map((ele, ind) => (
								<PUl key={`moustache-provide-${ind}`}>
									<PLi>{ele}</PLi>
								</PUl>
							))}
						</PUl>
						<PUl>
							<LiTitle h={true}>{provideTableHeader[1]}</LiTitle>
							{fosterP.map((ele, ind) => (
								<PUl key={`foster-provide-${ind}`}>
									<PLi>{ele}</PLi>
								</PUl>
							))}
						</PUl>
					</FosterInnerWrapper>
				</FosterDiv>
			</VolunteerInnerWrap>
			<VolunteerInnerWrap>
				<FosterDiv>
					<FosterTitle>{fosterTypesTitle}</FosterTitle>
					<FosterInnerWrapper type="column">
						{fosterTypes.map((ele, ind) => (
							<FosterTypeTab key={`fosterType-${ind}`}>
								<FosterTypeTitle>{ele.type}</FosterTypeTitle>
								<FosterTypeContent>{ele.description}</FosterTypeContent>
							</FosterTypeTab>
						))}
					</FosterInnerWrapper>
				</FosterDiv>
			</VolunteerInnerWrap>
		</VolunteerWrapper>
	);
};

const VolunteerWrapper = styled.div`
	padding-top: 50px;
	width: 90%;
	height: auto;
	margin-left: 5%;
`;
const StyledH1 = styled(H1)`
	width: 60%;
	text-align: center;
	margin-left: 20%;
`;

// ========= Overall wrapper =========
const VolunteerInnerWrap = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	@media ${device.xs} {
	}
	@media ${device.sm} {
	}
	@media ${device.md} {
		width: 100%;
	}
	@media ${device.lg} {
	}
`;

// ===== Foster sections =====
const FosterDiv = styled(TemplateDiv)`
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media ${device.xs} {
	}
	@media ${device.sm} {
	}
	@media ${device.md} {
		width: 90%;
	}
	@media ${device.lg} {
		width: 60%;
	}
`;

const FosterTitle = styled.h2`
	text-decoration: underline;
	font-size: 1.3rem;
	padding: 15px 0 15px 0;
`;
const FosterInnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-self: center;
	flex-direction: ${(prop) => prop.type};
	padding-left: 25px;
	padding-bottom: 20px;
`;
const LiTitle = styled.h2`
	width: 220px;
	padding: 15px 0 5px 0;
`;
const PUl = styled.ul`
	padding-left: 5px;
	width: 220px;
	line-height: 25px;
	list-style-type: disc;
	margin: 5px 20px 5px 20px;
`;
const PLi = styled.li`
	width: 220px;
	text-align: left;
`;
const FosterTypeTab = styled.div`
	max-width: 90%;
	line-height: 20px;
	height: auto;
	margin: 10px;
	padding: 5px 0 5px 0;
	border: 2px solid ${COLORS.darkPurple};
	border-radius: 10px;
	border-collapse: collapse;
	display: flex;
	align-items: center;
`;
const FosterTypeTitle = styled.h3`
	text-decoration: underline;
	max-width: 100px;
	min-width: 100px;
	width: 100px;
	height: 90%;
	padding: 0 10px 0 10px;
	border-right: 2px solid ${COLORS.exDarkPurple};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const FosterTypeContent = styled.div`
	padding: 10px 25px 10px 25px;
	text-align: left;
`;

export default Volunteer;
