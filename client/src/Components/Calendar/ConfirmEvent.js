import styled from "styled-components";
import react from "react";
import { COLORS } from "../../constants";
import { useLan } from "../../Context/LanguageContext";

const ConfirmEvent = ({
	eventInfo,
	setConfirmedEvent,
	setShowConfirm,
	typeConfirm,
}) => {
	const { type, location, startT, endT, description, date } = eventInfo;
	const { confirmEventT } = useLan().text;
	return (
		<ConfirmEventWrapper>
			<ConfirmEventPop>
				<ConfirmEventInnerWrapper>
					<ConfirmEventTitle>
						{`${confirmEventT.title.title0}${confirmEventT.typeT[typeConfirm]}${confirmEventT.title.title1}${confirmEventT.typeT[typeConfirm]}.`}
					</ConfirmEventTitle>
					<ConfirmEventUl>
						<ConfirmEventLi>
							<ConfirmEventLiT>
								{confirmEventT.labelT.type}:&nbsp;
							</ConfirmEventLiT>
							{type}
						</ConfirmEventLi>
						<ConfirmEventLi>
							<ConfirmEventLiT>
								{confirmEventT.labelT.location}:&nbsp;
							</ConfirmEventLiT>
							{location}
						</ConfirmEventLi>
						<ConfirmEventLi>
							<ConfirmEventLiT>
								{confirmEventT.labelT.date}:&nbsp;
							</ConfirmEventLiT>
							{date}
						</ConfirmEventLi>
						<ConfirmEventLi>
							<ConfirmEventLiT>
								{confirmEventT.labelT.startT}:&nbsp;
							</ConfirmEventLiT>
							{startT}
						</ConfirmEventLi>
						<ConfirmEventLi>
							<ConfirmEventLiT>
								{confirmEventT.labelT.endT}:&nbsp;
							</ConfirmEventLiT>
							{endT}
						</ConfirmEventLi>
						<ConfirmEventLi>
							<ConfirmEventLiT>
								{confirmEventT.labelT.description}:&nbsp;
							</ConfirmEventLiT>
							{description}
						</ConfirmEventLi>
					</ConfirmEventUl>
					<ConfirmEventBtnWrapper>
						<ConfirmEventBtn
							onClick={() => {
								setConfirmedEvent(true); // confimed add, start pushing
								setShowConfirm(false); // remove the confirmation
							}}
						>
							{confirmEventT.btnT.confirm}
						</ConfirmEventBtn>
						<ConfirmEventBtn
							onClick={() => {
								setConfirmedEvent(false); // cancel confirmation, don't do anything
								setShowConfirm(false);
							}}
						>
							{confirmEventT.btnT.cancel}
						</ConfirmEventBtn>
					</ConfirmEventBtnWrapper>
				</ConfirmEventInnerWrapper>
			</ConfirmEventPop>
		</ConfirmEventWrapper>
	);
};
const ConfirmEventWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0px;
	right: 0px;
	left: 0px;
	bottom: 0px;
	background: ${COLORS.white_transparent};
`;
const ConfirmEventPop = styled.div`
	position: absolute;
	left: 25%;
	right: 25%;
	top: 25%;
	bottom: 25%;
	margin: auto;
	background: ${COLORS.white};

	display: flex;
	justify-content: center;
	align-items: center;
`;
const ConfirmEventTitle = styled.h1`
	margin-bottom: 20px;
	text-decoration: underline;
`;
const ConfirmEventUl = styled.ul`
	list-style-type: none;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;
const ConfirmEventLiT = styled.span`
	font-weight: 600;
`;
const ConfirmEventLi = styled.li`
	height: 30px;
`;
const ConfirmEventInnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const ConfirmEventBtnWrapper = styled.div``;
const ConfirmEventBtn = styled.button`
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

export default ConfirmEvent;
