import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Redux/Actions";
// constants and context
import { device } from "../../constants";
import { useLan } from "../../Context/LanguageContext";
import { AppContext } from "../../Context/AppContext";

// other components
import TemplateDiv from "../Reusable/TemplateDiv";
import StyledButton from "../Reusable/StyledButton";
import ConfirmEvent from "./ConfirmEvent";
import Loading from "../Reusable/Loading";
import ErrorPage from "../Reusable/ErrorPage";
import { firestoreApp } from "../../Firebase";
import firebaseApp from "../../Firebase/firebaseApp";

const CalendarEvent = ({ eventInfo, ind }) => {
	//console.log(eventInfo);
	const { appUser } = useContext(AppContext);
	const { type, description, endT, startT, location, date, id } = eventInfo;
	const { calendarEventT } = useLan().text;
	// local state
	const [showConfirmCancel, setShowConfirmCancel] = useState(false);
	const [confirmedCancel, setConfirmedCancel] = useState(false);
	// redux and firestore
	const { firestoreEventActions } = allActions;
	const dispatch = useDispatch();
	const fireStoreEventStatus = useSelector(
		(state) => state.firestoreEventReducer.status
	);
	const allEvents = useSelector((state) => state.firestoreEventReducer.events);

	useEffect(() => {
		if (confirmedCancel) {
			const deleteEvent = () => {
				try {
					firestoreApp
						.collection("events")
						.doc(id)
						.delete()
						.then(() => {
							dispatch(
								firestoreEventActions.deleteFsEventSuccess(
									allEvents.filter((ele) => {
										return ele.id != id;
									})
								)
							);
							console.log("Delete successfully!");
						});
				} catch (err) {
					dispatch(firestoreEventActions.deleteFsEventErr());
				}
			};
			dispatch(firestoreEventActions.deleteFsEvent());
			deleteEvent();
		}
		return setConfirmedCancel(false);
	}, [confirmedCancel]);

	if (fireStoreEventStatus === "loading") {
		return (
			<CalendarEventWrapper>
				<Loading />
			</CalendarEventWrapper>
		);
	}
	if (fireStoreEventStatus === "error") {
		return (
			<CalendarEventWrapper>
				<ErrorPage />
			</CalendarEventWrapper>
		);
	}

	return (
		<CalendarEventWrapper>
			<CalendarEventInnerWrapper>
				<CalendadrEventTitle>
					{`${calendarEventT.title.title0}${ind + 1}${
						calendarEventT.title.title1
					}${date}`}
				</CalendadrEventTitle>
				<CalendarEventUl>
					<CalendarEventLi>
						<CalendarEventLiT>
							{calendarEventT.labelT.type}:&nbsp;
						</CalendarEventLiT>
						{type}
					</CalendarEventLi>
					<CalendarEventLi>
						<CalendarEventLiT>
							{calendarEventT.labelT.location}:&nbsp;
						</CalendarEventLiT>
						{location}
					</CalendarEventLi>
					<CalendarEventLi>
						<CalendarEventLiT>
							{calendarEventT.labelT.date}:&nbsp;
						</CalendarEventLiT>
						{date}
					</CalendarEventLi>
					<CalendarEventLi>
						<CalendarEventLiT>
							{calendarEventT.labelT.startT}:&nbsp;
						</CalendarEventLiT>
						{startT}
					</CalendarEventLi>
					<CalendarEventLi>
						<CalendarEventLiT>
							{calendarEventT.labelT.endT}:&nbsp;
						</CalendarEventLiT>
						{endT}
					</CalendarEventLi>
					<CalendarEventLi>
						<CalendarEventLiT>
							{calendarEventT.labelT.description}:&nbsp;
						</CalendarEventLiT>
						{description}
					</CalendarEventLi>
				</CalendarEventUl>
				{appUser && appUser.email && (
					<CalendarEventCancelBtn onClick={() => setShowConfirmCancel(true)}>
						{calendarEventT.btnT.cancel}
					</CalendarEventCancelBtn>
				)}
				{showConfirmCancel && (
					<ConfirmEvent
						eventInfo={eventInfo}
						setShowConfirm={setShowConfirmCancel}
						setConfirmedEvent={setConfirmedCancel}
						typeConfirm="cancel"
					/>
				)}
			</CalendarEventInnerWrapper>
		</CalendarEventWrapper>
	);
};
const CalendarEventWrapper = styled(TemplateDiv)`
	margin: 5px;
	width: 30%;
	min-height: 200px;
	display: flex;
	flex-direction: column;
	@media ${device.xs} {
	}
	@media ${device.sm} {
		width: 42%;
	}
	@media ${device.lg}, ${device.md} {
		width: 30%;
	}
`;
const CalendarEventInnerWrapper = styled.div`
	width: 100%;
	margin-top: 10px;
	margin-bottom: 10px;
	height: auto;
	text-align: left;

	display: flex;
	flex-direction: column;
	align-items: center;
`;
const CalendadrEventTitle = styled.h1`
	align-self: center;
	font-weight: 800;
	text-decoration: underline;
	font-size: 1.2rem;
`;
const CalendarEventUl = styled.ul`
	width: 100%;
	height: auto;
	padding: 20px;
	list-style-type: none;
	margin-top: 20px;
	text-align: left;
	font-size: 1.1rem;
`;
const CalendarEventLiT = styled.span`
	font-weight: 600;
`;
const CalendarEventLi = styled.li`
	margin-left: 20px;
	width: 90%;
	height: auto;
	line-height: 30px;
	margin-top: 5px;
`;

const CalendarEventCancelBtn = styled(StyledButton)`
	bottom: 1%;
	border-radius: 10px;
`;
export default CalendarEvent;
