import styled from "styled-components";
import { useEffect } from "react";

// constants & context
import { ip, COLORS, LINKSADDED, device } from "../../constants";
import { useLan } from "../../Context/LanguageContext";

// components
import Loading from "../Reusable/Loading";
import ErrorPage from "../Reusable/ErrorPage";
import H1 from "../Reusable/H1";
import ChannelTab from "./ChannelTab";
import LinkReco from "./LinkReco";

// redux
import allActions from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";

const Education = () => {
	// redux
	const { ytActions } = allActions;
	const dispatch = useDispatch();
	const status = useSelector((state) => state.ytReducer.status);
	const channels = useSelector((state) => state.ytReducer.channels);
	// context
	const { eduTxt } = useLan().text;
	const { title, titleLink, titleVideos } = eduTxt;
	// links to be recommended
	const { recommendedLinks } = LINKSADDED;

	// fetch data from server at start
	useEffect(() => {
		const getYoutubeInfo = async () => {
			dispatch(ytActions.getYtInfo());
			let data = await fetch(`${ip}/api/youtube/channels`);
			data = await data.json();
			//console.log(data);
			if (data.status === 200) {
				dispatch(ytActions.receiveYtInfo(Object.values(data.data)));
			} else {
				console.log(data.error);
				dispatch(ytActions.receiveYtInfoErr());
			}
		};

		getYoutubeInfo();
	}, []);

	return (
		<EducationWrapper>
			<EducationTitle>{title}</EducationTitle>
			<EducationPart>
				<EducationPartTitle>{titleLink}</EducationPartTitle>
				<EducationLinkWrapper>
					{recommendedLinks.map((ele, ind) => (
						<LinkReco key={`linkRecommended-${ind}`} linkInfo={ele} />
					))}
				</EducationLinkWrapper>
			</EducationPart>
			<EducationPart>
				<EducationPartTitle>{titleVideos}</EducationPartTitle>
				<EducationVideoWrapper>
					{status === "error" ? (
						<ErrorPage />
					) : status === "loading" ? (
						<Loading />
					) : (
						channels &&
						channels
							.sort((a, b) => {
								if (a.id === b.id) {
									return 0; // shouldn't occur
								}
								if (a.id > b.id) {
									return 1;
								} else {
									return -1;
								}
							})
							.map((ele, ind) => (
								<ChannelTab key={`channel-${ind}`} channelInfo={ele} />
							))
					)}
				</EducationVideoWrapper>
			</EducationPart>
		</EducationWrapper>
	);
};
const EducationWrapper = styled.div`
	width: 95%;
	margin-left: 2.5%;
	padding-top: 50px;
	padding-bottom: 50px;
`;
const EducationLinkWrapper = styled.div`
	width: 100%;
	padding-bottom: 10px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	flex-grow: 1;
	flex-shrink: 2;
`;
const EducationVideoWrapper = styled.div`
	width: 100%;
`;
const EducationTitle = styled(H1)`
	width: 70%;
	margin: 20px 0 50px 15%;
`;
const EducationPart = styled.div`
	width: 100%;
	border-bottom: 5px solid ${COLORS.exDarkPurple};
	border-top: 5px solid ${COLORS.exDarkPurple};
	border-radius: 10px;
	border-collapse: collapse;
	padding-top: 50px;
	padding-bottom: 50px;
`;
const EducationPartTitle = styled.h2`
	width: 60%;
	margin-left: 20%;
	color: ${COLORS.white};
	margin-bottom: 50px;
	font-size: 1.85rem;
`;
export default Education;
