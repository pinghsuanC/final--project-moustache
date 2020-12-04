import styled from "styled-components";
import react from "react";
import { COLORS } from "../../constants";
import GotoBtn from "../Reusable/GoToBtn";

const Item = ({ imgInfo, itemTitle }) => {
	return (
		<ItemWrapper>
			<ItemImg src={imgInfo.src} />
			<ItemTitleWrapper>
				<ItemTitleInner>{itemTitle}</ItemTitleInner>
				<GotoBtn width="25px" height="25px" color={COLORS.white} />
			</ItemTitleWrapper>
		</ItemWrapper>
	);
};
const ItemWrapper = styled.div`
	cursor: pointer;
	object-fit: cover;
	overflow: hidden;
	width: 330px;
	height: 200px;
	border-radius: 13px;
	margin: 20px;
	position: relative;

	:hover img {
		-webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
		filter: blur(5px);
		-webkit-transform: scale(1.3);
		transform: scale(1.3);
	}
	:hover h2 {
		font-size: 2rem;
	}
`;
const ItemImg = styled.img`
	object-fit: cover;
	overflow: hidden;
	width: 100%;
	height: 100%;
	border-radius: 13px;
	-webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: all 0.3s ease-in;
	transition: all 0.3s ease-in;
`;
const ItemTitleWrapper = styled.h2`
	font-size: 1.5rem;
	width: 100%;
	height: 100%;
	color: ${COLORS.white};
	position: absolute;
	top: 0px;
	text-align: center;
	text-shadow: 5px 3px 6px rgba(3, 3, 3, 0.77);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	-webkit-transition: all 0.3s ease-in;
	transition: all 0.3s ease-in;
`;
const ItemTitleInner = styled.div`
	margin-bottom: 10px;
`;

export default Item;
