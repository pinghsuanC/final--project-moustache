import styled from "styled-components";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import StyledButton from "../Reusable/StyledButton";
import { COLORS, ip } from "../../constants";

import DonationFormConfirm from "./DonationFormConfirm";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Redux/Actions";

const formInitial = {
	firtName: "",
	lastName: "",
	email: "",
};
const DonationForm = ({ formText, setSendSuccess }) => {
	// text
	const {
		DFormTitle,
		DFormLabels,
		DFormVars,
		DFormBtnT,
		confirmFormT,
	} = formText;

	// form hook
	const { register, handleSubmit, reset } = useForm({
		defaultValues: { ...formInitial },
	});

	// redux
	const emailStatus = useSelector((state) => state.emailReducer.status);
	const dispatch = useDispatch();

	// states
	const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
	const [formData, setFormData] = useState({});
	const [confirmSendEmail, setSendEmail] = useState(false);

	useEffect(() => {
		const reqSendEmail = async () => {
			dispatch(allActions.emailActions.sendEmail());
			try {
				const d = await fetch(`${ip}/api/email/send`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						formData: { ...formData, timeStamp: new Date().toISOString() },
					}),
				});
				if (d.status === 200) {
					dispatch(allActions.emailActions.sendSuccess());
					setSendSuccess("success");
					setTimeout(() => {
						setSendSuccess("initial");
					}, 5000);
					reset();
				} else {
					console.log(d);
					throw new Error();
				}
			} catch (err) {
				setSendSuccess("fail");
				dispatch(allActions.emailActions.sendError());
			}
		};

		if (confirmSendEmail) {
			reqSendEmail();
		}

		return () => {
			setSendEmail(false);
		};
	}, [confirmSendEmail]);

	return (
		<DonationFormWrapper>
			{showSubmitConfirm && (
				<DonationFormConfirm
					formData={formData}
					confirmFormT={{ ...confirmFormT, confirmLabels: [...DFormLabels] }}
					setShowSubmitConfirm={setShowSubmitConfirm}
					setSendEmail={setSendEmail}
				/>
			)}
			<DonationFormInner
				onSubmit={handleSubmit((data) => {
					setFormData({ ...data });
					setShowSubmitConfirm(!showSubmitConfirm);
					window.scrollTo({ top: 500, left: 0, behavior: "smooth" });
				})}
			>
				<DonationFormTitle>{DFormTitle}</DonationFormTitle>
				{DFormVars.map((ele, ind) => {
					return (
						<DonationInputWrapper key={`formData-${ind}`}>
							<DonationFormLabel htmlFor={ele}>
								{DFormLabels[ind]}
							</DonationFormLabel>
							<DonationInput
								name={ele}
								ref={register}
								type={ele === "email" ? "email" : "text"}
								required
							/>
						</DonationInputWrapper>
					);
				})}
				<StyledButton>{DFormBtnT}</StyledButton>
			</DonationFormInner>
		</DonationFormWrapper>
	);
};
const DonationFormWrapper = styled.div``;
const DonationFormInner = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	border: 3px solid ${COLORS.darkPurple};
	border-radius: 15px;
`;
const DonationInputWrapper = styled.div`
	width: 80%;
	display: flex;
	margin: 10px 0 0 0;
	align-items: center;
`;
const DonationFormTitle = styled.h2`
	font-size: 1.1rem;
	padding: 10px;
	border-radius: 15px;
	margin-bottom: 15px;
`;
const DonationFormLabel = styled.label`
	min-width: 150px;
	width: 150px;
	height: auto;
	line-height: 35px;
	text-align: right;
	margin-right: 15px;
`;
const DonationInput = styled.input`
	width: 100%;
	height: 40px;
	text-align: left;
	border-radius: 10px;
	outline: none;
	:focus {
		outline: none;
	}
`;
export default DonationForm;
