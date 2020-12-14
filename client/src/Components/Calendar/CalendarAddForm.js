// hooks & reacts
import styled from "styled-components";
import { getISOLocalDate } from "@wojtekmaj/date-utils";
import { useLan } from "../../Context/LanguageContext";
import { useCalendarContext } from "../../Context/CalendarContext";
import { COLORS } from "../../constants";

const CalendarAddForm = () => {
	const { ourCalT } = useLan().text;
	const { addEventT } = ourCalT;
	const {
		updateEvent,
		setShowConfirmAdd,
		showConfirmAdd,
		register,
		handleSubmit,
		d,
	} = useCalendarContext();

	return (
		<OurCalendarAddEventWrapper>
			<OurCalendarForm
				onSubmit={handleSubmit((data) => {
					updateEvent({ ...data, date: getISOLocalDate(d.date) });
					setShowConfirmAdd(!showConfirmAdd);
					window.scrollTo({ top: 500, left: 0, behavior: "smooth" });
				})}
			>
				<OurCalendarFormCom>
					<OurCalenderFormTitle>{addEventT.title}</OurCalenderFormTitle>
				</OurCalendarFormCom>
				<OurCalendarFormCom>
					<OurCalendarFormDate>
						{addEventT.selectedDate}
						{getISOLocalDate(d.date)}
					</OurCalendarFormDate>
				</OurCalendarFormCom>
				<OurCalendarFormCom>
					<OurCalendarFormInput
						name="type"
						ref={register}
						placeholder="Enter the event type"
						required
					/>
				</OurCalendarFormCom>
				<OurCalendarFormCom>
					<OurCalenderFormLabel htmlFor="endTime">
						{addEventT.location}
					</OurCalenderFormLabel>
					<OurCalendarFormInput
						name="location"
						type="text"
						ref={register}
						placeholder="Enter the location"
						required
					/>
				</OurCalendarFormCom>
				<OurCalenderFormComShort>
					<OurCalenderFormLabel htmlFor="startTime">
						{addEventT.startT}
					</OurCalenderFormLabel>
					<OurCalendarFormInput
						name="startT"
						type="time"
						ref={register}
						required
					/>
				</OurCalenderFormComShort>
				<OurCalenderFormComShort>
					<OurCalenderFormLabel htmlFor="endTime">
						{addEventT.endT}
					</OurCalenderFormLabel>
					<OurCalendarFormInput
						name="endT"
						type="time"
						ref={register}
						required
					/>
				</OurCalenderFormComShort>
				<OurCalendarFormCom>
					<OurCalenderFormLabel htmlFor="description">
						{addEventT.description}
					</OurCalenderFormLabel>
					<OurCalenderFormTA
						name="description"
						type="text"
						ref={register}
						placeholder="Optional description"
					/>
				</OurCalendarFormCom>
				<OurCalendarSubmit type="submit">
					{addEventT.addEventBtn}
				</OurCalendarSubmit>
			</OurCalendarForm>
		</OurCalendarAddEventWrapper>
	);
};

// the form to add event in calendar
const OurCalendarAddEventWrapper = styled.div`
	width: 60%;
	background: ${COLORS.white_transparent};
	border-radius: 10px;
	padding: 10px;
`;
const OurCalendarSubmit = styled.button`
	cursor: pointer;
	color: white;
	background: ${COLORS.darkPurple};
	width: 150px;
	height: 100px;
	border-radius: 10px;
	align-self: center;
	margin-top: 20px;
	:focus {
		outline: none;
	}
`;
const OurCalendarFormDate = styled.div`
	font-size: 1.5rem;
	text-decoration: underline;
`;
const OurCalenderFormTitle = styled.h1`
	font-size: 1.1rem;
	border: 1px solid ${COLORS.darkPurple};
	padding: 10px;
	border-radius: 15px;
	margin-bottom: 15px;
`;
const OurCalendarForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
`;
const OurCalendarFormCom = styled.div`
	width: 100%;
	display: flex;
	height: auto;
	margin-bottom: 10px;
	align-items: center;
	justify-content: center;
`;
const OurCalenderFormLabel = styled.label`
	min-width: 150px;
	width: 150px;
	height: auto;
	line-height: 35px;
`;
const OurCalendarFormInput = styled.input`
	width: 100%;
	height: 40px;
	text-align: left;
	border-radius: 10px;
	outline: none;
	:focus {
		outline: none;
	}
`;
const OurCalenderFormTA = styled.textarea`
	width: 100%;
	height: 200px;
	resize: none;
	border-radius: 10px;
`;
const OurCalenderFormComShort = styled(OurCalendarFormCom)`
	width: 60%;
	input {
		text-align: center;
		font-size: 1.3rem;
	}
`;

export default CalendarAddForm;
