import { combineReducers } from "redux";

import pfReducer from "./petFinder_reducer";
import firestoreEventReducer from "./firestore_eventReducer";
import firestorePostReducer from "./firestore_postReducer";
import ytReducer from "./yt_reducer";
import emailReducer from "./email_reducer";

export default combineReducers({
	pfReducer,
	ytReducer,
	firestoreEventReducer,
	firestorePostReducer,
	emailReducer,
});
