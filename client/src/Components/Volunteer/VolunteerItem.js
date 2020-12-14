import styled from "styled-components";
import react from "react";
import { device, COLORS, LOGOS } from "../../constants";
import { useLan } from "../../Context/LanguageContext";

const VolunteerItem = ({ info }) => {
	const { type, description, requirement } = info;
	const vItemT = {
		typeT: "",
		descriptionT: "You will be helping with...",
		requirementT: "You will need...",
	};
	const { typeT, descriptionT, requirementT } = vItemT;
	return (
		<VolunteerItemWrapper>
			<VILogo>
				<LOGOS.volunteerLogo size="40px" color={COLORS.exDarkPurple} />
			</VILogo>
			<VIT>
				<VIItemTitle>{typeT}</VIItemTitle>
				{type}
			</VIT>
			<VID>
				<VIItemTitle>{descriptionT}</VIItemTitle>
				{description}
			</VID>
			<VIR>
				<VIItemTitle>{requirementT}</VIItemTitle>
				{requirement}
			</VIR>
		</VolunteerItemWrapper>
	);
};
const VolunteerItemWrapper = styled.ul`
	list-style-type: none;
	margin-top: 50px;
	width: 350px;
	background: ${COLORS.white_transparent};
	border-radius: 10px;
	padding: 20px;
	li {
		margin-top: 15px;
	}
`;
const VILogo = styled.li``;
const VIItemTitle = styled.h3`
	margin-bottom: 5px;
`;
const VIT = styled.li`
	font-weight: 600;
	font-size: 1.6rem;
	font-style: underline;
`;
const VID = styled.li``;
const VIR = styled.li``;

export default VolunteerItem;
