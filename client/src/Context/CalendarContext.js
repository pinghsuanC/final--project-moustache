import React, { useState, useEffect, createContext, useContext } from "react";
import { useForm } from "react-hook-form";

const defaultValue = {};
const CalendarContext = createContext(defaultValue);
const CalendarContextProvider = ({ children }) => {
	const dInitial = new Date();
	const formInitial = {
		date: dInitial,
		startT: "",
		endT: "",
		description: "",
		type: "",
		location: "",
	};
	const newEventInitial = {};

	// states of calendar and event
	const [d, setD] = useState({ date: dInitial }); // calendar clicked date, an object
	const [newEvent, updateEvent] = useState(newEventInitial); // store new event

	// show confirmation to add event
	const [showConfirmAdd, setShowConfirmAdd] = useState(false); // show the confirmation for add
	// click confirmed to Add
	const [confirmedAdd, setConfirmedAdd] = useState(false); // clicked confirmed to add or not

	// form hook
	const { register, handleSubmit, reset } = useForm({
		defaultValues: { ...formInitial },
	});

	// store events from firestore
	const [fsEvents, setFsEvents] = useState([]);

	return (
		<CalendarContext.Provider
			value={{
				newEventInitial,
				formInitial,
				dInitial,
				d,
				setD,
				newEvent,
				updateEvent,
				showConfirmAdd,
				setShowConfirmAdd,
				confirmedAdd,
				setConfirmedAdd,
				fsEvents,
				setFsEvents,
				register,
				handleSubmit,
				reset,
			}}
		>
			{children}
		</CalendarContext.Provider>
	);
};

function useCalendarContext() {
	const context = useContext(CalendarContext);
	if (context === defaultValue) {
		throw new Error();
	}
	return context;
}

export { CalendarContextProvider, useCalendarContext };
