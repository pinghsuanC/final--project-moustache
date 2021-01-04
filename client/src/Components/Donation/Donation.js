import styled from "styled-components";
import { email_moustacheDonate } from "../../constants";
import { useState } from "react";
import H1 from "../Reusable/H1";
import { useLan } from "../../Context/LanguageContext";
import TemplateDiv from "../Reusable/TemplateDiv";
import DonationForm from "./DonationForm";

const Donation = () => {
	const { DonationT } = useLan().text;
	const {
		DTitle,
		DInfo,
		DFormInfo,
		emailSendStatus: { emailSendSuccess, emailSendFail },
	} = DonationT;

	const DInfoL = DInfo.split("PLACE_HOLDER");
	const [sendSuccess, setSendSuccess] = useState("initial");

	return (
		<DonationWrapper>
			<H1>{DTitle}</H1>
			{sendSuccess === "success" ? (
				<DonationSendSuccess>{emailSendSuccess}</DonationSendSuccess>
			) : sendSuccess === "fail" ? (
				<DonationSendSuccess>{emailSendFail}</DonationSendSuccess>
			) : (
				<></>
			)}
			<DonationInfoWrapper>
				<DonationInfoInner>
					{DInfoL[0]}
					<DonationEmail>{email_moustacheDonate}</DonationEmail>
					{DInfoL[1]}
				</DonationInfoInner>
				<DonationForm formText={DFormInfo} setSendSuccess={setSendSuccess} />
			</DonationInfoWrapper>
		</DonationWrapper>
	);
};
const DonationWrapper = styled.div`
	margin-top: 50px;
	width: 100%;
`;
const DonationInfoWrapper = styled(TemplateDiv)`
	width: 70%;
	margin-left: 15%;
	line-height: 25px;
`;
const DonationInfoInner = styled.div`
	width: 70%;
	margin-left: 15%;
`;
const DonationSendSuccess = styled(TemplateDiv)`
	font-size: 25px;
	margin: 10px 0 20px 0;
`;
const DonationEmail = styled.span`
	font-weight: 600;
	font-style: italic;
	text-decoration: underline;
`;

export default Donation;
