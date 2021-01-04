import styled from "styled-components";
import { COLORS, device } from "../../constants";
import GoToBtn from "../Reusable/GoToBtn";

const LinkReco = ({ linkInfo }) => {
	const { title, link, description } = linkInfo;
	return (
		<LinkRecoLink href={link} target="_blank">
			<LinkRecoInfoInner>
				<LinkRecoInfoTitle>{title}</LinkRecoInfoTitle>
				<LinkRecoDescription>{description}</LinkRecoDescription>
			</LinkRecoInfoInner>
			<GoToBtn colorInput={COLORS.exDarkPurple} />
		</LinkRecoLink>
	);
};
const LinkRecoLink = styled.a`
	width: 400px;
	height: auto;
	background: ${COLORS.gray};
	text-decoration: none;
	color: ${COLORS.exDarkPurple};
	margin: 5px;
	margin-left: 10px;
	padding: 10px;
	padding-left: 0;
	border: 1px solid ${COLORS.exDarkPurple};
	border-radius: 10px;

	:hover {
		background: ${COLORS.white};
	}
	:active {
		text-decoration: none;
	}

	display: flex;

	align-items: center;
	justify-content: space-evenly;
	color: ${COLORS.exDarkPurple};
`;

const LinkRecoInfoTitle = styled.div`
	text-decoration: underline;
	font-weight: 800;
	font-size: 1.3rem;
	margin-bottom: 10px;
`;
const LinkRecoInfoInner = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const LinkRecoDescription = styled.div`
	text-align: left;
	line-height: 25px;
	padding-left: 20px;
`;
export default LinkReco;
