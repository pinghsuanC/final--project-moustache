// =============== get events ===============
// get events from firestore
const requestFsEvents = () => ({
	type: "REQUEST_FS_EVENTS",
});
const requestFsEventsSuccess = (events) => ({
	type: "REQUEST_FS_EVENTS_SUCCESS",
	events,
});
const requestFsEventsErr = () => ({
	type: "REQUEST_FS_EVENTS_ERROR",
});

// =============== post event ===============
// add events to firestore
const postFsEvent = () => ({
	type: "POST_FS_EVENT",
});
// add events to firestore
const postFsEventSuccess = (event) => ({
	type: "POST_FS_EVENT_SUCCESS",
	event,
});
// add events to firestore
const postFsEventError = () => ({
	type: "POST_FS_EVENT_ERROR",
});

// =============== remove event ===============
// delete events from firestore
const deleteFsEvent = (event) => ({
	type: "DELETE_FS_EVENT",
	event,
});
const deleteFsEventSuccess = (events) => ({
	type: "DELETE_FS_EVENT_SUCCESS",
	events,
});
const deleteFsEventErr = (event) => ({
	type: "DELETE_FS_EVENT_ERROR",
});

const firestoreEventActions = {
	requestFsEvents,
	requestFsEventsSuccess,
	requestFsEventsErr,
	postFsEvent,
	postFsEventSuccess,
	postFsEventError,
	deleteFsEvent,
	deleteFsEventSuccess,
	deleteFsEventErr,
};

export default firestoreEventActions;
