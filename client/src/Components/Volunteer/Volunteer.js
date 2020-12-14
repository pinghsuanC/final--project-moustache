import styled from "styled-components";
import react from "react";
import { device, COLORS, LOGOS } from "../../constants";
import { useLan } from "../../Context/LanguageContext";
import VolunteerItem from "./VolunteerItem";

const Volunteer = () => {
	const { volunteerT } = useLan().text;
	const { volTitle, volCat } = volunteerT;

	return (
		<VolunteerWrapper>
			<VolunteerTitle>{volTitle}</VolunteerTitle>
			<VolunteerInnerWrap>
				{Object.values(volCat).map((ele) => {
					return <VolunteerItem info={ele} />;
				})}
			</VolunteerInnerWrap>
		</VolunteerWrapper>
	);
};

const VolunteerWrapper = styled.div`
	padding-top: 100px;
	width: 80%;
	height: auto;
	margin-left: 10%;
`;

// ========= Overall wrapper =========
const VolunteerTitle = styled.h1`
	font-size: 2rem;
	color: ${COLORS.white};
`;
const VolunteerInnerWrap = styled.div`
	width: 90%;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;

export default Volunteer;
