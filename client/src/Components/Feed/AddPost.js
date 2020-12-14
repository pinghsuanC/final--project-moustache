import styled from "styled-components";
import { useLan } from "../../Context/LanguageContext";
import { useContext } from "react";
import { COLORS } from "../../constants";
import { usePostContext } from "../../Context/PostContext";
import { firestoreApp } from "../../Firebase";

import ConfirmPostEvent from "./ConfirmPostEvent";

const AddPost = ({ setShowConfirm, setNewPost, setConfirmedAdd }) => {
	// this form can only been seen by the logged-in members
	// context
	const { register, handleSubmit } = usePostContext();
	const { addPostT } = useLan().text;

	const onSubmit = (data) => {
		setNewPost(data);
		setShowConfirm(true);
		console.log(data);
		// do not reset form yet
	};

	const { titleT, placeholderT, addBtn } = addPostT;

	return (
		<AddPostWrapper>
			<AddPostForm autocomplete="off">
				<AddPostHr />
				<AddPostHeader>{titleT}</AddPostHeader>
				<PostFormCom>
					<AddPostTitle
						name="title"
						ref={register}
						placeholder={placeholderT.addTitle}
						autocomplete="off"
						required
					/>
				</PostFormCom>
				<PostFormCom>
					<AddPostTxtArea
						name="content"
						ref={register}
						placeholder={placeholderT.addContent}
						required
					/>
				</PostFormCom>
				<AddPostButton onClick={handleSubmit(onSubmit)}>{addBtn}</AddPostButton>
				<AddPostHr />
			</AddPostForm>
		</AddPostWrapper>
	);
};
const AddPostWrapper = styled.div`
	width: 100%;
	color: ${COLORS.white};
	display: flex;
	justify-content: center;
`;
const AddPostHr = styled.hr`
	border: 0;
	height: 3px;
	background-image: linear-gradient(
		to right,
		rgba(255, 255, 255, 0),
		rgba(255, 255, 255, 0.75),
		rgba(255, 255, 255, 0)
	);
`;
const AddPostHeader = styled.h1`
	font-size: 2rem;
	margin-bottom: 20px;
`;
const AddPostForm = styled.form`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const PostFormCom = styled.div`
	width: 100%;
	height: auto;
	margin-bottom: 20px;
`;
const AddPostTitle = styled.input`
	width: 100%;
	border-radius: 10px;
	height: 30px;
	font-size: 25px;
	padding: 10px;

	:focus {
		outline: none;
	}
`;
const AddPostTxtArea = styled.textarea`
	width: 100%;
	height: 300px;
	border-radius: 10px;
	font-size: 20px;
	resize: none;
	overflow-y: scroll;
	padding: 15px;

	:focus {
		outline: none;
	}
`;
const AddPostButton = styled.button`
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

export default AddPost;
