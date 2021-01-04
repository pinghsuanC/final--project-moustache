import styled from "styled-components";
import react from "react";
import { device, COLORS, LOGOS } from "../../constants";
import { useLan } from "../../Context/LanguageContext";
import TemplateDiv from "../Reusable/TemplateDiv";

const VolunteerItem = ({ info }) => {
	const { type, description, requirement } = info;
	const {
		vItemTxt: { typeT, descriptionT, requirementT },
	} = useLan().text;

	return (
		<VolunteerItemWrapper>
			<VILogo>
				<LOGOS.Volunteer_logo size="40px" color={COLORS.exDarkPurple} />
			</VILogo>
			<VIT>
				<VIItemTitle>{type}</VIItemTitle>
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
const VolunteerItemWrapper = styled(TemplateDiv)`
	margin-top: 20px;
	margin-right: 10px;
	max-width: 200px;

	div {
		padding-left: 10px;
		padding-right: 10px;
	}
`;
const VIItemTitle = styled.h3`
	margin-bottom: 15px;
	height: auto;
`;
const VIT = styled.div`
	min-height: 90px;
	font-weight: 600;
	font-size: 1.6rem;
	font-style: underline;
`;
const VILogo = styled.div`
	margin-top: 25px;
`;
const VID = styled.div`
	min-height: 115px;
`;
const VIR = styled(VID)``;

export default VolunteerItem;
