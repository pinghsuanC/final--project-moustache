import styled from "styled-components";
import react, { useContext, useState } from "react";
import { COLORS } from "../../constants";
import { AppContext } from "../../Context/AppContext";

const LogIn = () => {
	const {
		appUser,
		message,
		status,
		signInWithGoogle,
		handleSignOut,
	} = useContext(AppContext);

	return (
		<LogInWrapper>
			<LogInInnerWrapper>
				<LogInRestrictInfo>
					Only the staff of moustache de chat will be able to log in. If you are
					a member and want to log in, please contact staff for authorization.
				</LogInRestrictInfo>
				{appUser && appUser.email ? (
					// current user information and signout button
					<LogInContentWrapper>
						<LogInVertical>
							<LogInSuccess>Current User</LogInSuccess>
							<LogInUserInner>
								<Avatar src={appUser.photoURL} />
							</LogInUserInner>
							<LogInUserInner>
								<LogInUserInfo>{appUser.displayName}</LogInUserInfo>
								<LogInUserInfo> ({appUser.email})</LogInUserInfo>
							</LogInUserInner>
						</LogInVertical>
						<LogButton onClick={handleSignOut}>Log Out</LogButton>
					</LogInContentWrapper>
				) : (
					// sign in button
					<LogInContentWrapper>
						<LogInContentTitle>LogIn Options</LogInContentTitle>
						<LogButton onClick={signInWithGoogle}>GOOGLE</LogButton>
					</LogInContentWrapper>
				)}
				<LogInInfoBox status={status}>{message}</LogInInfoBox>
			</LogInInnerWrapper>
		</LogInWrapper>
	);
};
const LogInInfoBox = styled.div`
	width: 300px;
	height: 200px;
	border: 1px solid red;
	position: relative;
	margin-top: 50px;
	color: white;
	text-align: center;
	border-radius: 10px;
`;
const LogInWrapper = styled.div`
	width: 100%;
	margin-top: 100px;
	display: flex;
	justify-content: center;
`;
const LogInInnerWrapper = styled.div`
	width: 70%;
`;
const LogInRestrictInfo = styled.div`
	color: white;
	font-size: 1.5rem;
`;
const LogInContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const LogInContentTitle = styled.div``;
const LogInUserInner = styled.div`
	width: auto;
	margin-top: 25px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const LogInVertical = styled.div`
	width: 70%;
	margin-top: 50px;
	padding: 10px;
	border: 1px solid white;
	border-radius: 10px;
	height: auto;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const LogInSuccess = styled.div`
	font-size: 2rem;
	text-decoration: underline;
`;
const LogInUserInfo = styled.div`
	font-size: 1rem;
	margin-top: 10px;
	margin-bottom: 10px;
`;
const Avatar = styled.img`
	border-radius: 50%;
	height: 50px;
	width: 50px;
`;
const LogButton = styled.button`
	cursor: pointer;
	margin-top: 50px;
	border-radius: 10px;
	width: 150px;
	height: 80px;
	align-self: center;
	color: white;
	font-weight: 600;
	font-size: 1.5rem;
	background: ${COLORS.darkPurple};
	:focus {
		outline: none;
	}
`;

export default LogIn;
