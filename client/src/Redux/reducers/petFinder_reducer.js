const initialState = {
	token: null,
	status: "initial",
	animals: [],
	count: -1,
};

export default function pfReducer(state = { ...initialState }, action) {
	switch (action.type) {
		// === access tokens ===
		case "GET_PF_ACCESS_TOKEN": {
			return { ...state, status: "loading" };
		}
		case "RECEIVE_PF_ACCESS_TOKEN": {
			//console.log(action);
			return { ...state, token: action.token, status: "idle" };
		}
		case "RECEIVE_PF_ACCESS_TOKEN_ERROR": {
			return { ...state, status: "error" };
		}
		// === animals ===
		case "GET_PF_ANIMALS": {
			return { ...state, status: "loading" };
		}
		case "RECEIVE_PF_ANIMALS": {
			//console.log(action);
			return { ...state, animals: action.animals, status: "idle" };
		}
		case "RECEIVE_PF_ANIMALS_ERROR": {
			return { ...state, status: "error" };
		}
		// === get adopted amount ===
		case "GET_PF_ADOPTED_COUNT": {
			return { ...state, status: "loading" };
		}
		case "RECEIVE_PF_ADOPTED_COUNT": {
			return { ...state, adoptedCount: action.count, status: "idle" };
		}
		case "RECEIVE_PF_ADOPTED_COUNT_ERROR": {
			return { ...state, status: "error" };
		}
		// reset
		case "RESET_STATE": {
			return { ...initialState };
		}
		default: {
			return { ...state };
		}
	}
}
