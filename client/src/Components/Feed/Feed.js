import styled from "styled-components";
import { useEffect, useContext } from "react";
import firebase from "firebase";

//redux
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Redux/Actions";
//context
import { usePostContext } from "../../Context/PostContext";
import { AppContext } from "../../Context/AppContext";
// components
import SinglePost from "./SinglePost";
import AddPost from "./AddPost";
import ErrorPage from "../Reusable/ErrorPage";
import Loading from "../Reusable/Loading";

import { firestoreApp } from "../../Firebase";
import ConfirmPostEvent from "./ConfirmPostEvent";

const Feed = () => {
	// context
	const {
		newPostInitial,
		showConfirmAdd,
		setShowConfirmAdd,
		confirmedAdd,
		setConfirmedAdd,
		newPost,
		setNewPost,
		reset,
	} = usePostContext();
	const { appUser } = useContext(AppContext);

	// redux
	const dispatch = useDispatch();
	const { firestorePostActions } = allActions;
	const fireStorePostStatus = useSelector(
		(state) => state.firestorePostReducer.status
	);
	const allPosts = useSelector((state) => state.firestorePostReducer.posts);
	useEffect(() => {
		// fetch from the database
		dispatch(firestorePostActions.requestFsPosts());
		const getPosts = async () => {
			try {
				const ps = [];
				await firestoreApp
					.collection("posts")
					.get()
					.then((qs) => {
						qs.forEach((doc) => {
							ps.push({ id: doc.id, ...doc.data() });
						});
					});
				dispatch(firestorePostActions.requestFsPostsSuccess(ps));
			} catch (err) {
				console.log(err);
				dispatch(firestorePostActions.requestFsPostsErr());
			}
		};

		getPosts();
	}, []);

	useEffect(() => {
		if (confirmedAdd) {
			// connect to firestore and add post
			const time = firebase.firestore.Timestamp.fromDate(new Date());
			const data = {
				...newPost,
				userId: appUser.email,
				userDisplayName: appUser.displayName,
				time,
			};
			//console.log(appUser.email);
			dispatch(firestorePostActions.postFsPost());
			const addPost = async () => {
				try {
					await firestoreApp
						.collection("posts")
						.add(data)
						.then((id) => {
							dispatch(firestorePostActions.postFsPostSuccess({ ...data, id }));
							// reset some values
							reset(); // reset form to empty
							setNewPost(newPostInitial); // reset newPost to initial post
						});
				} catch (err) {
					console.log(err);
					dispatch(firestorePostActions.postFsPostError());
				}
			};
			addPost();
		}
		return () => setConfirmedAdd(false);
	}, [confirmedAdd]);

	if (fireStorePostStatus === "loading") {
		return (
			<FeedWrapper>
				<Loading />
			</FeedWrapper>
		);
	}
	if (fireStorePostStatus === "error") {
		return (
			<FeedWrapper>
				<ErrorPage />
			</FeedWrapper>
		);
	}

	return (
		<FeedWrapper>
			{appUser && appUser.email && (
				<AddPost setShowConfirm={setShowConfirmAdd} setNewPost={setNewPost} />
			)}
			<PostWrapper>
				{allPosts
					.sort((a, b) => {
						return a.time.toDate() - b.time.toDate();
					})
					.map((ele) => {
						return <SinglePost key={`post-${ele.id}`} postInner={ele} />;
					})
					.reverse()}
			</PostWrapper>
			{showConfirmAdd && (
				<ConfirmPostEvent
					postInfo={{ ...newPost }}
					typeConfirm="add"
					setConfirmedEvent={setConfirmedAdd}
					setShowConfirm={setShowConfirmAdd}
				/>
			)}
		</FeedWrapper>
	);
};
const FeedWrapper = styled.div`
	padding-top: 50px;
`;
const PostWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export default Feed;
