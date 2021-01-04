import { AiOutlineTable } from "react-icons/ai";
import styled from "styled-components";
import { useLan } from "../../Context/LanguageContext";

const AdoptionFee = () => {
	const { adoptionFeeTxt } = useLan().text;

	const {
		title,
		tableTHeader: { title_type, title_price },
		tableT,
		tableSpecialT,
	} = adoptionFeeTxt;

	return (
		<AdoptionFeeWrapper>
			<AdoptionFeeTitle>{title}</AdoptionFeeTitle>
			<table>
				<AdoptionFeeTable>
					<TR>
						<TH h={true}>{title_type}</TH>
						<TH h={true}>{title_price}</TH>
					</TR>
					{tableT.map((ele, ind) => (
						<TR key={`adoptionfee-table-${ind}`}>
							<TH>{ele.thT_type}</TH>
							<TD>{`$CAD ${ele.tdT_price}`}</TD>
						</TR>
					))}
				</AdoptionFeeTable>
			</table>
			<P>{tableSpecialT}</P>
		</AdoptionFeeWrapper>
	);
};
const AdoptionFeeWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const AdoptionFeeTitle = styled.h2`
	font-size: 1.1rem;
	font-weight: 700;
	margin: 15px 0 15px 0;
`;
const AdoptionFeeTable = styled.tbody`
	height: auto;
`;
const TR = styled.tr`
	line-height: 25px;
`;
const TH = styled.th`
	text-align: ${(prop) => (prop.h ? "center" : "left")};
	padding: 0 15px 0 0;
`;
const TD = styled.td``;
const P = styled.p`
	margin: 20px 0 20px 0;
	font-style: italic;
`;
export default AdoptionFee;
