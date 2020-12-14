const initialState = {
	posts: [],
	status: "initial",
};

export default function firestorePostReducer(
	state = { ...initialState },
	action
) {
	switch (action.type) {
		// get posts
		case "GET_FS_POSTS": {
			return { ...state, status: "loading" };
		}
		case "REQUEST_FS_POSTS_SUCCESS": {
			return { ...state, status: "idle", posts: [...action.posts] };
		}
		case "GET_FS_POSTS_ERR": {
			return { ...state, status: "error" };
		}
		// post post
		case "POST_FS_POST": {
			return { ...state, status: "loading" };
		}
		case "POST_FS_POST_SUCCESS": {
			return {
				...state,
				status: "idle",
				posts: [...state.posts, action.post],
			};
		}
		case "POST_FS_POST_ERROR": {
			return { ...state, status: "error" };
		}
		// delete a post
		case "DELETE_FS_POST": {
			return { ...state, status: "loading" };
		}
		case "DELETE_FS_POST_SUCCESS": {
			return { ...state, status: "idle", posts: [...action.posts] };
		}
		case "DELETE_FS_POST_ERROR": {
			return { ...state, status: "error" };
		}
		default: {
			return { ...state };
		}
	}
}
