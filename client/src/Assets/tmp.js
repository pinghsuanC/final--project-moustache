const save = `@media ${device.xs} {
}
@media ${device.sm} {
}
@media ${device.md} {
}
@media ${device.lg} {
}`;

const tmp = `
import styled from "styled-components";
import react from "react";

const XX = () => {
	return <XXWrapper>XX</XXWrapper>;
};
const XXWrapper = styled.div``;
export default XX;
`;
