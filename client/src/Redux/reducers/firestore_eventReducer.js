const initialState = {
	events: [],
	status: "initial",
};

export default function firestoreEventReducer(
	state = { ...initialState },
	action
) {
	switch (action.type) {
		// get events
		case "GET_FS_EVENTS": {
			return { ...state, status: "loading" };
		}
		case "REQUEST_FS_EVENTS_SUCCESS": {
			return { ...state, status: "idle", events: [...action.events] };
		}
		case "GET_FS_EVENTS_ERR": {
			return { ...state, status: "error" };
		}
		// post events
		case "POST_FS_EVENT": {
			return { ...state, status: "loading" };
		}
		case "POST_FS_EVENT_SUCCESS": {
			return {
				...state,
				status: "idle",
				events: [...state.events, action.event],
			};
		}
		case "POST_FS_EVENT_ERROR": {
			return { ...state, status: "error" };
		}
		// delete events
		case "DELETE_FS_EVENT": {
			return { ...state, status: "loading" };
		}
		case "DELETE_FS_EVENT_SUCCESS": {
			return { ...state, status: "idle", events: [...action.events] };
		}
		case "DELETE_FS_EVENT_ERROR": {
			return { ...state, status: "error" };
		}
		default: {
			return { ...state };
		}
	}
}
