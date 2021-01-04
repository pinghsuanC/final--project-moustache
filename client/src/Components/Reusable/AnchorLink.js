import styled from "styled-components";

const AnchorLink = ({ children, href }) => {
	return (
		<AnchorLinkWrapper href={href} target="_blank">
			{children}
		</AnchorLinkWrapper>
	);
};
const AnchorLinkWrapper = styled.a``;
export default AnchorLink;
