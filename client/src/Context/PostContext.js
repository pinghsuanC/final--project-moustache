import React, { useState, useEffect, createContext, useContext } from "react";
import { useForm } from "react-hook-form";

const defaultValue = {};
const formInitial = { title: "", content: "" };
const PostContext = createContext(defaultValue);
const PostContextProvider = ({ children }) => {
	// state

	const [showConfirm, setShowConfirm] = useState(false);

	// states to add new post
	const [confirmedAdd, setConfirmedAdd] = useState(false);
	const [showConfirmAdd, setShowConfirmAdd] = useState(false);
	const [newPost, setNewPost] = useState({});

	// form
	const { register, handleSubmit, reset } = useForm({
		defaultValues: { ...formInitial },
	});

	return (
		<PostContext.Provider
			value={{
				showConfirm,
				setShowConfirm,
				confirmedAdd,
				setConfirmedAdd,

				showConfirmAdd,
				setShowConfirmAdd,

				newPost,
				setNewPost,

				// form
				register,
				handleSubmit,
				reset,
			}}
		>
			{children}
		</PostContext.Provider>
	);
};

function usePostContext() {
	const context = useContext(PostContext);
	if (context === defaultValue) {
		throw new Error();
	}
	return context;
}

export { usePostContext, PostContextProvider };
