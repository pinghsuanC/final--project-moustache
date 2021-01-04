import styled from "styled-components";
import { COLORS, LOGOS, LINKSADDED, moustache_email } from "../../constants";
import AnchorLink from "../Reusable/AnchorLink";
import StyledButton from "../Reusable/StyledButton";
import H1 from "../Reusable/H1";
import { useLan } from "../../Context/LanguageContext";

const Contact = () => {
	//const t = useLan().text;
	const { contactTxt } = useLan().text;
	const {
		title,
		titleSub: { fb, pf },
		emailT: { btnT, subject, content },
	} = contactTxt;
	const l = title.split("PLACE_HOLDER");

	return (
		<ContactWrapper>
			<H1>
				{l[0]}
				<EmailFont>{moustache_email}</EmailFont>
				{l[1]}
			</H1>
			<ContactPart>
				<ContactPartSub>
					<ContactEmailBtn
						onClick={() =>
							window.open(
								`mailto:${moustache_email}?subject=${subject}&body=${content}\n `
							)
						}
					>
						{btnT}
					</ContactEmailBtn>
				</ContactPartSub>
				<ContactPartSub>
					<ContactPartTitle>{fb}</ContactPartTitle>
					<AnchorLink href={LINKSADDED.link_moustacheFB} target="_blank">
						<LOGOS.Fb_Logo size="50px" color={COLORS.darkPurple} />
					</AnchorLink>
				</ContactPartSub>
				<ContactPartSub>
					<ContactPartTitle>{pf}</ContactPartTitle>
					<AnchorLink href={LINKSADDED.link_moustachePF} target="_blank">
						<LOGOS.Petfinder_logo height="50px" color={COLORS.darkPurple} />
					</AnchorLink>
				</ContactPartSub>
			</ContactPart>
		</ContactWrapper>
	);
};

const ContactWrapper = styled.div`
	padding-top: 50px;
	color: ${COLORS.white};
`;
const EmailFont = styled.span`
	text-decoration: underline;
	font-weight: 600;
	font-style: italic;
`;
const ContactEmailBtn = styled(StyledButton)`
	padding: 10px;
	width: 150px;
	height: 80px;
	height: auto;
`;
const ContactPart = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const ContactPartTitle = styled.h2`
	padding-bottom: 10px;
`;
const ContactPartSub = styled.div`
	width: 315px;
	padding: 20px 0 20px 0;
	border-top: 3px solid ${COLORS.darkPurple};
`;
export default Contact;
