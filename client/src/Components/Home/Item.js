import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS, device } from "../../constants";
import GotoBtn from "../Reusable/GoToBtn";

const Item = ({ imgInfo, itemInfo, media }) => {
	return (
		<ItemWrapper>
			<ItemLink to={`/${itemInfo.path_var}`}>
				<ItemImg src={imgInfo.src} />
				<ItemTitleWrapper>
					<ItemTitleInner>{itemInfo.title}</ItemTitleInner>
					{(media.lg || media.md) && (
						<GotoBtn width="25px" height="25px" color={COLORS.white} />
					)}
				</ItemTitleWrapper>
			</ItemLink>
		</ItemWrapper>
	);
};
const ItemWrapper = styled.div`
	cursor: pointer;
	object-fit: cover;
	overflow: hidden;
	border-radius: 13px;
	margin: 7px;
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
	@media ${device.xs} {
	}
	@media ${device.sm} {
		width: 300px;
		height: 80px;
	}
	@media ${device.md} {
		width: 300px;
		height: 180px;
	}
	@media ${device.lg} {
		width: 310px;
		height: 200px;
	}
`;
const ItemLink = styled(Link)`
	text-decoration: none;
	:hover :active {
		text-decoration: none;
	}
`;
const ItemImg = styled.img`
	object-fit: cover;
	overflow: hidden;
	width: 100%;
	height: 100%;
	border-radius: 13px;
	-webkit-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
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
