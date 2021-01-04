import styled from "styled-components";
import { COLORS } from "../../constants";
import StyledButton from "../Reusable/StyledButton";

const DonationFormConfirm = ({
	formData,
	confirmFormT,
	setShowSubmitConfirm,
	setSendEmail,
}) => {
	//const { firstName, lastName, civicAddress, city, province, email } = formData;
	const { confirmTitle, btnT, confirmLabels } = confirmFormT;

	return (
		<DonationFormConfirmWrapper>
			<DonationFormConfirmInner>
				<DonationFormConfirmTitle>{confirmTitle}</DonationFormConfirmTitle>
				{Object.values(formData).map((ele, ind) => (
					<div
						key={`formdataConfirm-${ind}`}
					>{`${confirmLabels[ind]}: ${ele}`}</div>
				))}
				<StyledButton
					onClick={() => {
						setShowSubmitConfirm(false);
						setSendEmail(true);
					}}
				>
					{btnT.confirm}
				</StyledButton>
				<StyledButton
					onClick={() => {
						setShowSubmitConfirm(false);
					}}
				>
					{btnT.cancel}
				</StyledButton>
			</DonationFormConfirmInner>
		</DonationFormConfirmWrapper>
	);
};
const DonationFormConfirmTitle = styled.h3``;
const DonationFormConfirmWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background: ${COLORS.white_transparent};
`;
const DonationFormConfirmInner = styled.div`
	position: sticky;
	height: auto;
	left: 25%;
	right: 25%;
	top: 25%;
	bottom: 25%;
	background: ${COLORS.white};
	border-radius: 15px;
	padding-top: 50px;
`;
export default DonationFormConfirm;
