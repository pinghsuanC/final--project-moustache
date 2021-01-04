import styled from "styled-components";
import { COLORS } from "../../constants";
import { useLan } from "../../Context/LanguageContext";

const ConfirmPostEvent = ({
	postInfo,
	setConfirmedEvent,
	setShowConfirm,
	typeConfirm,
}) => {
	const { title, content } = postInfo;
	const { confirmPostT } = useLan().text;

	return (
		<ConfirmPostWrapper>
			<ConfirmPostPop>
				<ConfirmPostInnerWrapper>
					<ConfirmPostTitle>
						{`${confirmPostT.title.title0}${confirmPostT.typeT[typeConfirm]}${confirmPostT.title.title1}${confirmPostT.typeT[typeConfirm]}.`}
					</ConfirmPostTitle>
					<ConfirmPostUl>
						<ConfirmPostLi>
							<ConfirmPostLiT>
								{confirmPostT.labelT.title}:&nbsp;
							</ConfirmPostLiT>
							{title}
						</ConfirmPostLi>
						<ConfirmPostLi>
							<ConfirmPostLiT>
								{confirmPostT.labelT.content}:&nbsp;
							</ConfirmPostLiT>
							{content}
						</ConfirmPostLi>
					</ConfirmPostUl>
					<ConfirmPostBtnWrapper>
						<ConfirmPostBtn
							onClick={() => {
								setConfirmedEvent(true); // confimed add, start pushing
								setShowConfirm(false); // remove the confirmation
							}}
						>
							{confirmPostT.btnT.confirm}
						</ConfirmPostBtn>
						<ConfirmPostBtn
							onClick={() => {
								setConfirmedEvent(false); // cancel confirmation, don't do anything
								setShowConfirm(false);
							}}
						>
							{confirmPostT.btnT.cancel}
						</ConfirmPostBtn>
					</ConfirmPostBtnWrapper>
				</ConfirmPostInnerWrapper>
			</ConfirmPostPop>
		</ConfirmPostWrapper>
	);
};
const ConfirmPostWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0px;
	right: 0px;
	left: 0px;
	bottom: 0px;
	background: ${COLORS.white_transparent};
`;
const ConfirmPostPop = styled.div`
	position: absolute;
	left: 10%;
	right: 10%;
	top: 10%;
	bottom: 10%;
	margin: auto;
	background: ${COLORS.white};

	display: flex;
	justify-content: center;
	align-items: center;
`;
const ConfirmPostTitle = styled.h1`
	margin-bottom: 10px;
	text-decoration: underline;
`;
const ConfirmPostUl = styled.ul`
	list-style-type: none;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;
const ConfirmPostLiT = styled.span`
	font-weight: 600;
`;
const ConfirmPostLi = styled.li`
	min-height: 30px;
	text-align: left;
	padding: 10px;
`;
const ConfirmPostInnerWrapper = styled.div`
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const ConfirmPostBtnWrapper = styled.div``;
const ConfirmPostBtn = styled.button`
	margin: 10px;
	cursor: pointer;
	color: white;
	background: ${COLORS.darkPurple};
	width: 100px;
	height: 50px;
	border-radius: 10px;
	align-self: center;
	margin-top: 20px;
	text-transform: uppercase;
	:focus {
		outline: none;
	}
`;

export default ConfirmPostEvent;
