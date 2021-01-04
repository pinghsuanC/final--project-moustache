import styled from "styled-components";
import { moustache_email } from "../../constants";
import { useLan } from "../../Context/LanguageContext";

const AdoptionProcedure = () => {
	const { adoptionProcedureTxt } = useLan().text;
	const { title, content, contentProcess } = adoptionProcedureTxt;
	const contentL = content.split("PLACE_HOLDER");

	return (
		<AdoptionProcedureWrapper>
			<AdoptionProcTitle>{title}</AdoptionProcTitle>
			<AdoptionProcContent>
				{contentL[0]}
				<AdoptionEmail>{moustache_email}</AdoptionEmail>
				{contentL[1]}
			</AdoptionProcContent>
			<AdoptionUl>
				{contentProcess.map((ele, ind) => (
					<AdoptionLi key={`adoptionProcedure-${ind}`}>{ele}</AdoptionLi>
				))}
			</AdoptionUl>
		</AdoptionProcedureWrapper>
	);
};
const AdoptionProcedureWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const AdoptionProcTitle = styled.h2`
	margin: 20px 0 20px 0;
`;
const AdoptionProcContent = styled.div``;
const AdoptionEmail = styled.span`
	font-style: italic;
	text-decoration: underline;
`;
const AdoptionUl = styled.ul`
	width: 50%;
	list-style-type: decimal;
`;
const AdoptionLi = styled.li`
	padding-left: 10px;
	margin: 20px 0 20px 0;
	text-align: left;
	line-height: 22px;
`;
export default AdoptionProcedure;
