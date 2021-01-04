// hooks & reacts
import styled from "styled-components";
import { useEffect, useContext } from "react";

// react-calendar component
import Calendar from "react-calendar";
import { getISOLocalDate } from "@wojtekmaj/date-utils";
import "./Calendar.css";

// context and redux
import { useLan } from "../../Context/LanguageContext";
import { useCalendarContext } from "../../Context/CalendarContext";
import { AppContext } from "../../Context/AppContext";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Redux/Actions";

// components & other constants
import ConfirmEvent from "./ConfirmEvent";
import CalendarEvent from "./CalendarEvent";
import CalendarAddForm from "./CalendarAddForm";
import Loading from "../Reusable/Loading";
import ErrorPage from "../Reusable/ErrorPage";
import H1 from "../Reusable/H1";
import { COLORS, LOGOS, device } from "../../constants";
import { firestoreApp } from "../../Firebase";

// initial values used to reset
const OurCalendar = () => {
	// user context
	const { appUser } = useContext(AppContext);
	// get text form context
	const { curLan, text } = useLan();
	const { ourCalT } = text;
	const { pageTitle, dateEventT, dateEventAllT } = ourCalT;
	// redux state
	const { firestoreEventActions } = allActions;
	const dispatch = useDispatch();
	const fireStoreEventStatus = useSelector(
		(state) => state.firestoreEventReducer.status
	);
	const allEvents = useSelector((state) => state.firestoreEventReducer.events);
	// calendar context
	const {
		// initial values
		newEventInitial,
		dInitial,
		// the date clicked on the calendar
		d,
		setD,
		// store event to add
		newEvent,
		updateEvent,
		// show confirmation to add
		showConfirmAdd,
		setShowConfirmAdd,
		// clicked confirm to add
		confirmedAdd,
		setConfirmedAdd,
		// hook form fields
		reset,
	} = useCalendarContext();

	// handlers
	// add tile content, need to use with firestore information
	const ClickingTileContent = ({ activeStartDate, date, view }) => {
		//console.log(getISOLocalDate(date) === getISOLocalDate(d.date));
		return isMarked(allEvents, getISOLocalDate(date)) ? (
			<OurCalenderLogoWrapper>
				<LOGOS.dayPin
					size="20px"
					color={COLORS.darkPurple}
					className="daypin"
				/>
			</OurCalenderLogoWrapper>
		) : null;
	};

	// fetch information from firestore while start
	useEffect(() => {
		// request data from fs
		const getEvents = async () => {
			let qs;
			try {
				qs = await firestoreApp.collection("events").get();
				return qs;
			} catch (err) {
				console.log(err);
				dispatch(firestoreEventActions.requestFsEventsErr());
			}
		};
		dispatch(firestoreEventActions.requestFsEvents());
		getEvents().then((info) => {
			const es = [];
			info.forEach((doc) => {
				es.push({ ...doc.data(), id: doc.id });
			});
			dispatch(firestoreEventActions.requestFsEventsSuccess(es));
		});
	}, []);

	// push the data to firestore
	useEffect(() => {
		// update data to firestore events
		if (confirmedAdd) {
			// add data to firestore
			const postEvent = async () => {
				let qs;
				try {
					qs = await firestoreApp
						.collection("events")
						.add({ ...newEvent })
						.then((info) => {
							console.log("New event added!");
							dispatch(firestoreEventActions.postFsEventSuccess(newEvent));
							// if successfully update,
							reset(); // 1. clear form
							setD({ date: dInitial }); // 2. set date
							updateEvent(newEventInitial); //3. reset event
						});
					return qs;
				} catch (err) {
					console.log(err);
					dispatch(firestoreEventActions.postFsEventError());
				}
			};

			// dispatch state
			dispatch(firestoreEventActions.postFsEvent());
			postEvent();
		}
		// set confirmed to add to false when unmount
		return () => setConfirmedAdd(false);
	}, [confirmedAdd]);

	if (fireStoreEventStatus === "loading") {
		return (
			<OurCalendarWrapper>
				<Loading />
			</OurCalendarWrapper>
		);
	}
	if (fireStoreEventStatus === "error") {
		return (
			<OurCalendarWrapper>
				<ErrorPage />
			</OurCalendarWrapper>
		);
	}

	return (
		<OurCalendarWrapper>
			<H1>{pageTitle}</H1>
			<CalendarWrapper>
				<Calendar
					onClickDay={(dateClicked, ev) => setD({ date: dateClicked })}
					locale={curLan}
					tileContent={ClickingTileContent}
				/>
			</CalendarWrapper>
			{appUser && appUser.email && <CalendarAddForm />}
			{showConfirmAdd && (
				<ConfirmEvent
					eventInfo={newEvent}
					setShowConfirm={setShowConfirmAdd}
					setConfirmedEvent={setConfirmedAdd}
					typeConfirm="add"
				/>
			)}

			<CalendarDateEventWrapper>
				<CalendarDateEventTitle>{dateEventT}</CalendarDateEventTitle>
				<CalendarDateEventInnerWrapper>
					{allEvents
						.filter((ele) => {
							return ele.date === getISOLocalDate(d.date);
						})
						.sort((a, b) => {
							if (a.date < b.date) {
								return -1;
							} else if (a.date >= b.date) {
								if (a.startT < b.startT) {
									return -1;
								} else if (a.startT > b.startT) {
									return 1;
								}
								return 0;
							}
						})
						.map((ele, ind) => {
							return (
								<CalendarEvent
									key={`${ele.date}-event-${ind}`}
									eventInfo={ele}
									ind={ind}
								/>
							);
						})}
				</CalendarDateEventInnerWrapper>
			</CalendarDateEventWrapper>
			<CalendarDateEventWrapper>
				<CalendarDateEventTitle>{dateEventAllT}</CalendarDateEventTitle>
				<CalendarDateEventInnerWrapper>
					{allEvents
						.sort((a, b) => {
							if (a.date < b.date) {
								return -1;
							} else if (a.date >= b.date) {
								if (a.startT < b.startT) {
									return -1;
								} else if (a.startT > b.startT) {
									return 1;
								}
								return 0;
							}
						})
						.map((ele, ind) => {
							return (
								<CalendarEvent
									key={`${ele.date}-all-event-${ind}`}
									eventInfo={ele}
									ind={ind}
								/>
							);
						})}
				</CalendarDateEventInnerWrapper>
			</CalendarDateEventWrapper>
		</OurCalendarWrapper>
	);
};

// chekc if the list of events contains the date
function isMarked(list, date) {
	let doc;
	for (doc of list) {
		if (doc.date === date) {
			return true;
		}
	}
	return false;
}

const OurCalenderTitle = styled.h1`
	font-size: 2rem;
	color: ${COLORS.white};
	margin-bottom: 20px;
`;
// the calendar and logo
const OurCalenderLogoWrapper = styled.div`
	display: inline-block;
	transform: rotate(60deg);
`;
const OurCalendarWrapper = styled.div`
	margin-top: 50px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const CalendarWrapper = styled.div`
	margin-top: 50px;
	width: 50%;
	height: auto;
	margin-bottom: 50px;
	border-radius: 10px;
	@media ${device.xs} {
	}
	@media ${device.sm} {
		width: 80%;
		max-width: 600px;
	}
	@media ${device.lg}, ${device.md} {
		width: 70%;
		max-width: 900px;
	}
`;
// the events displayed at the bottom
const CalendarDateEventWrapper = styled.div`
	border: 1px solid ${COLORS.darkPurple};
	border-radius: 10px;
	margin-top: 40px;
	padding: 20px;
	width: 85%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const CalendarDateEventInnerWrapper = styled.div`
	margin-top: 20px;
	width: 90%;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
`;
const CalendarDateEventTitle = styled.h1`
	color: ${COLORS.white};
	font-size: 1.1rem;
`;

export default OurCalendar;
