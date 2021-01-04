import styled from "styled-components";
import { COLORS } from "../../constants";

const StyledButton = styled.button`
	margin: 10px;
	cursor: pointer;
	color: white;
	background: ${COLORS.darkPurple};
	width: 100px;
	height: 50px;
	border-radius: 10px;
	text-transform: uppercase;
	:focus {
		outline: none;
	}
`;

export default StyledButton;
