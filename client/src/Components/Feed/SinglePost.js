import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Redux/Actions";
// context
import { AppContext } from "../../Context/AppContext";
import { useLan } from "../../Context/LanguageContext";

import { COLORS } from "../../constants";
import ConfirmPostEvent from "./ConfirmPostEvent";
import { firestoreApp } from "../../Firebase";

const SinglePost = ({ postInner }) => {
	// context vars
	const { appUser } = useContext(AppContext);
	const { postT } = useLan().text;
	const { singlePostT } = postT;
	const { postedOn, postedBy, btnDelete } = singlePostT;
	const dispatch = useDispatch();
	const allPosts = useSelector((state) => state.firestorePostReducer.posts);
	const { firestorePostActions } = allActions;
	// information and data transformation
	const { content, title, time, userId, userDisplayName, id } = postInner;
	const d = time.toDate().toLocaleString();
	const contentParagraphs = content.split(/\\n/g);
	// state to remove a post
	const [showConfirmDelete, setShowConfirmDelete] = useState(false);
	const [confirmedDelete, setConfirmedDelete] = useState(false);

	useEffect(() => {
		if (confirmedDelete) {
			// delete and reset data
			const deletePost = async () => {
				dispatch(firestorePostActions.deleteFsPost());
				try {
					await firestoreApp
						.collection("posts")
						.doc(id)
						.delete()
						.then(() => {
							// remove the post from the list
							dispatch(
								firestorePostActions.deleteFsPostSuccess(
									allPosts.filter((ele) => {
										return ele.id !== id;
									})
								)
							);
						});
				} catch (err) {
					console.log(err);
					dispatch(firestorePostActions.deleteFsPostErr());
				}
			};

			deletePost();
		}
		return () => setConfirmedDelete(false);
	}, [confirmedDelete]);

	return (
		<PostWrapper>
			<PostTitle>{title}</PostTitle>
			<PostBasicInfo>
				<PostT>
					<PostInfoText>{postedOn}&nbsp;&nbsp;</PostInfoText>
					{d}
				</PostT>
				<PostUser>
					<PostInfoText>{postedBy}&nbsp;&nbsp;</PostInfoText>
					{userDisplayName}
				</PostUser>
			</PostBasicInfo>
			<PostContent>
				{contentParagraphs.map((ele, ind) => {
					return (
						<ContentDiv key={`post-${id}-content-${ind}`}>
							<p>{ele}</p>
							<br />
						</ContentDiv>
					);
				})}
			</PostContent>
			{appUser && appUser.email && (
				<PostDelete onClick={() => setShowConfirmDelete(true)}>
					{btnDelete}
				</PostDelete>
			)}
			{showConfirmDelete && (
				<ConfirmPostEvent
					postInfo={postInner}
					typeConfirm="delete"
					setConfirmedEvent={setConfirmedDelete}
					setShowConfirm={setShowConfirmDelete}
				/>
			)}
		</PostWrapper>
	);
};

const PostWrapper = styled.div`
	width: 60%;
	height: auto;
	min-height: 300px;
	background: ${COLORS.white_transparent};
	border-radius: 10px;
	margin: 10px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
const PostTitle = styled.h1`
	font-size: 2rem;
	color: ${COLORS.exDarkPurple};
`;
const PostBasicInfo = styled.div`
	width: auto;
	font-size: 0.8rem;
	align-self: flex-end;
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-top: 20px;
	padding-right: 20px;
`;
const PostInfoText = styled.span`
	text-decoration: underline;
	font-style: italic;
`;
const PostT = styled.div`
	margin-left: 10px;
`;
const PostUser = styled.div`
	margin-left: 10px;
	margin-top: 5px;
`;

const PostContent = styled.div`
	width: 65%;
	text-align: left;
	line-height: 25px;
	margin-top: 20px;
	margin-bottom: 20px;
`;
const ContentDiv = styled.div`
	text-indent: 20px;
`;
const PostDelete = styled.button`
	margin: 10px;
	cursor: pointer;
	color: white;
	bottom: 1%;
	background: ${COLORS.darkPurple};
	width: 100px;
	height: 50px;
	border-radius: 10px;
	align-self: center;
	text-transform: uppercase;

	:focus {
		outline: none;
	}
`;
export default SinglePost;
