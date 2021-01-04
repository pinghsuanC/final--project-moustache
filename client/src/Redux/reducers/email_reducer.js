const initialState = {
	status: "initial",
};

export default function emailReducer(state = { ...initialState }, action) {
	switch (action.type) {
		case "SENDING_EMAIL": {
			return { ...state, status: "loading" };
		}
		case "SEND_EMAIL_SUCCESS": {
			return { ...state, status: "idle" };
		}
		case "SEND_EMAIL_ERROR": {
			return { ...state, status: "error" };
		}
		default: {
			return { ...state };
		}
	}
}
