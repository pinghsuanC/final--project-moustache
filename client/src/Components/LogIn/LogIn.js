import styled from "styled-components";
import { useContext } from "react";
import { COLORS } from "../../constants";
import { AppContext } from "../../Context/AppContext";
import { useLan } from "../../Context/LanguageContext";
import StyledButton from "../Reusable/StyledButton";
import TemplateDiv from "../Reusable/TemplateDiv";

const LogIn = () => {
	const {
		appUser,
		message,
		status,
		signInWithGoogle,
		handleSignOut,
	} = useContext(AppContext);

	const { logInTxt } = useLan().text;

	const {
		RestrictionT,
		userCurrentT,
		logT: { logOptions, logOut },
		options: { optionGoogle },
	} = logInTxt;

	return (
		<LogInWrapper>
			<LogInInnerWrapper>
				<LogInRestrictInfo>{RestrictionT}</LogInRestrictInfo>
				{appUser && appUser.email ? (
					// current user information and signout button
					<LogInContentWrapper>
						<LogInVertical>
							<LogInSuccess>{userCurrentT}</LogInSuccess>
							<LogInUserInner>
								<Avatar src={appUser.photoURL} />
							</LogInUserInner>
							<LogInUserInner>
								<LogInUserInfo>{appUser.displayName}</LogInUserInfo>
								<LogInUserInfo> ({appUser.email})</LogInUserInfo>
							</LogInUserInner>
						</LogInVertical>
						<LogButton onClick={handleSignOut}>{logOut}</LogButton>
					</LogInContentWrapper>
				) : (
					// sign in button
					<LogInContentWrapper>
						<LogInContentTitle>{logOptions}</LogInContentTitle>
						<LogButton onClick={signInWithGoogle}>{optionGoogle}</LogButton>
					</LogInContentWrapper>
				)}
				{message && <LogInInfoBox status={status}>{message}</LogInInfoBox>}
			</LogInInnerWrapper>
		</LogInWrapper>
	);
};

const LogInInnerWrapper = styled.div`
	width: 70%;
`;
const LogInInfoBox = styled.div`
	width: 50%;
	margin-left: 25%;
	height: 200px;
	border-radius: 10px;
	border: 2px solid ${COLORS.exDarkPurple};
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const LogInWrapper = styled.div`
	width: 100%;
	margin-top: 100px;
	display: flex;
	justify-content: center;
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
const LogInContentTitle = styled.div`
	margin: 50px 0 20px 0;
	color: ${COLORS.white};
`;
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
const LogButton = styled(StyledButton)`
	width: auto;
	height: 80px;
	align-self: center;
	color: white;
	font-weight: 600;
	font-size: 1.5rem;
`;

export default LogIn;
