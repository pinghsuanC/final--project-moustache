import styled from "styled-components";
import react from "react";
import { COLORS, IMGS, LOGOS } from "../../constants";

const GoToBtn = ({ colorInput }) => {
	return (
		<LOGOS.ArrowRight
			type="solid"
			color={colorInput ? colorInput : COLORS.white}
			size="40px"
		/>
	);
};
const GoToBtnWrapper = styled.div`
	:hover {
		text-decoration: underline;
	}
`;
export default GoToBtn;
