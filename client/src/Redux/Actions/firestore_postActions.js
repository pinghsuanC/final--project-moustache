// =============== get Posts ===============
// get Posts from firestore
const requestFsPosts = () => ({
	type: "REQUEST_FS_POSTS",
});
const requestFsPostsSuccess = (posts) => ({
	type: "REQUEST_FS_POSTS_SUCCESS",
	posts,
});
const requestFsPostsErr = () => ({
	type: "REQUEST_FS_POSTS_ERROR",
});

// =============== post Post ===============
// add Posts to firestore
const postFsPost = (post) => ({
	type: "POST_FS_POST",
	post,
});
// add Posts to firestore
const postFsPostSuccess = (post) => ({
	type: "POST_FS_POST_SUCCESS",
	post,
});
// add Posts to firestore
const postFsPostError = () => ({
	type: "POST_FS_POST_ERROR",
});

// =============== remove Post ===============
// delete Posts from firestore
const deleteFsPost = (post) => ({
	type: "DELETE_FS_POST",
	post,
});
const deleteFsPostSuccess = (posts) => ({
	type: "DELETE_FS_POST_SUCCESS",
	posts,
});
const deleteFsPostErr = () => ({
	type: "DELETE_FS_POST_ERROR",
});

const firestorePostActions = {
	requestFsPosts,
	requestFsPostsSuccess,
	requestFsPostsErr,
	postFsPost,
	postFsPostSuccess,
	postFsPostError,
	deleteFsPost,
	deleteFsPostSuccess,
	deleteFsPostErr,
};

export default firestorePostActions;
