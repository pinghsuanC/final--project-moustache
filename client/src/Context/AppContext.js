import React, { useState, useEffect } from "react";
import { firebaseAppAuth, firebaseApp, firebase } from "../Firebase";
import withFirebaseAuth from "react-with-firebase-auth";
import { ip } from "../constants";

export const AppContext = React.createContext(null);
const AppProvider = ({ children, signInWithGoogle, signOut, user }) => {
	const [appUser, setAppUser] = useState({});
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState(-1);

	const handleSignOut = () => {
		signOut();
		setAppUser({});
		setMessage("");
	};

	useEffect(() => {
		//console.log(user);
		if (user) {
			//console.log(user);
			fetch(`${ip}/api/firebase/users`, {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					displayName: user.displayName,
					email: user.email,
					photoURL: user.photoURL,
				}),
			})
				.then((res) => res.json())
				.then((info) => {
					if (info.status === 200) {
						setAppUser(info.data);
						setMessage(info.message);
						setStatus(200);
					} else if (info.status === 401) {
						setAppUser({});
						setMessage(info.message);
						setStatus(401);
					}
				});
		}
	}, [user]);

	return (
		<AppContext.Provider
			value={{ appUser, signInWithGoogle, handleSignOut, message, status }}
		>
			{children}
		</AppContext.Provider>
	);
};

const providers = {
	googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
	providers,
	firebaseAppAuth,
})(AppProvider);
