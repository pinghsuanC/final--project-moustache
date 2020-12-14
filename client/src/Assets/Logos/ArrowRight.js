import styled from "styled-components";
import react from "react";

const ArrowRight = ({ color, width, height }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 16 16"
			className="bi bi-arrow-right-circle"
			fill={color}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
			/>
			<path
				fillRule="evenodd"
				d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"
			/>
		</svg>
	);
};
const ArrowRightWrapper = styled.div``;
export default ArrowRight;
