import styled from "styled-components";
import AdoptionFee from "./AdoptionFee";
import AdoptionProcedure from "./AdoptionProcedure";
import TemplateDiv from "../Reusable/TemplateDiv";
import H1 from "../Reusable/H1";
import { COLORS } from "../../constants";
import { useLan } from "../../Context/LanguageContext";

// Adoption component
const Adoption = () => {
	const { adoptionTxt } = useLan().text;

	const {
		title,
		introT: { introTitle, introContent },
	} = adoptionTxt;

	return (
		<AdoptionWrapper>
			<H1>{title}</H1>
			<AdoptionParts>
				<AdoptionPart>
					<AdoptionIntroTItle>{introTitle}</AdoptionIntroTItle>
					<AdoptionIntroContent>{introContent}</AdoptionIntroContent>
				</AdoptionPart>
				<AdoptionPart>
					<AdoptionFee />
				</AdoptionPart>
				<AdoptionPart>
					<AdoptionProcedure />
				</AdoptionPart>
			</AdoptionParts>
		</AdoptionWrapper>
	);
};
const AdoptionWrapper = styled.div`
	width: 100%;
	text-align: center;
	margin-top: 60px;
`;

const AdoptionIntroTItle = styled.h2`
	margin: 15px 0 15px 0;
`;
const AdoptionIntroContent = styled.div`
	width: 50%;
	margin: 0px 0 20px 0;
	padding: 0 0 0 25%;
	line-height: 20px;
`;
const AdoptionParts = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const AdoptionPart = styled(TemplateDiv)`
	width: 70%;
	max-width: 1500px;
	height: auto;
	margin: 10px;
`;
export default Adoption;
