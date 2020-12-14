import { combineReducers } from "redux";

import pfReducer from "./petFinder_reducer";
import firestoreEventReducer from "./firestore_eventReducer";
import firestorePostReducer from "./firestore_postReducer";

export default combineReducers({
	pfReducer,
	firestoreEventReducer,
	firestorePostReducer,
});
