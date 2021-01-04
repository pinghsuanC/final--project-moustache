import styled from "styled-components";
import { COLORS } from "../../constants";
import { useLan } from "../../Context/LanguageContext";

import EducationPlayList from "./EducationPlayList";

const ChannelTab = ({ channelInfo }) => {
	const {
		channelTabTxt: { tagTitle },
	} = useLan().text;
	const { brandingSettings, snippet, playlistsIds } = channelInfo;
	// get banner and channel keywords
	const {
		channel: { title, keywords },
		image: { bannerExternalUrl },
	} = brandingSettings;
	// get the photo and description from snippet
	// sometimes the channel property doesn't contain description. To avoid undefined values, use the one in snippet.
	const {
		thumbnails: { medium },
		localized: { description },
	} = snippet;

	const keywordsList = keywords
		.split('"')
		.filter((ele) => ele.length > 0 && ele !== " ");

	return (
		<ChannelTabWrapper>
			<ChannelHeaderWrapper>
				<ChannelBanner src={bannerExternalUrl} />
				<ChannelInfoWrapper>
					<ChannelInfoInner>
						<ChannelAvatar src={medium.url} />
						<ChannelTabTitle>{title}</ChannelTabTitle>
					</ChannelInfoInner>
					{description.length > 0 && (
						<ChannelDescription>{description}</ChannelDescription>
					)}
				</ChannelInfoWrapper>
			</ChannelHeaderWrapper>
			<ChannelTagsWrapper>
				<ChannelTagsTitle>{tagTitle}</ChannelTagsTitle>
				{keywordsList &&
					keywordsList.map((ele, ind) => (
						<ChannelTags key={`${title}-tag-${ind}`}>&nbsp;{ele}</ChannelTags>
					))}
			</ChannelTagsWrapper>
			<ChannelVideosWrapper>
				{playlistsIds &&
					playlistsIds.map((ele, ind) => (
						<EducationPlayList
							key={`${title}-video-${ind}`}
							playListId={ele}
							height={315}
						/>
					))}
			</ChannelVideosWrapper>
		</ChannelTabWrapper>
	);
};
const ChannelTabWrapper = styled.div`
	margin-top: 50px;
	padding-bottom: 30px;
	color: ${COLORS.white};
	width: 100%;
	height: auto;
	overflow: hidden;
	border: 4px solid ${COLORS.exDarkPurple};
	border-radius: 10px;
`;
// title, banner and headshots
// size of banner: 1546x423, visible = 719x129
const ChannelHeaderWrapper = styled.div`
	width: 100%;
	position: relative;
`;

const ChannelBanner = styled.img`
	width: 100%;
	height: 240px;
	margin: 0px;
	overflow: hidden;
	object-fit: cover;
	filter: blur(5px);
	position: absolute;
	top: 0;
	left: 0;
`;
const ChannelInfoWrapper = styled.div`
	width: 80%;
	margin-left: 10%;

	position: absolute;
	left: 60px;
	top: 60px;

	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;
const ChannelInfoInner = styled.div`
	padding-right: 20px;
`;
const ChannelAvatar = styled.img`
	border-radius: 50%;
	width: 220px;
	height: 220px;
`;
const ChannelDescription = styled.div`
	width: 50%;
	height: auto;
	text-align: left;
	color: ${COLORS.black};
	background: ${COLORS.white_transparent};
	padding: 20px;
	border-radius: 20px;
	line-height: 20px;
`;
const ChannelTabTitle = styled.h2`
	width: 100%;
	text-align: center;
	margin-top: 20px;
	font-size: 2.5rem;
`;

// videowrapper
const ChannelVideosWrapper = styled.div`
	margin-top: 30px;
`;
//tags
const ChannelTagsTitle = styled.span`
	font-size: 12px;
	font-weight: 600;
	text-transform: uppercase;
	text-decoration: underline;
	margin-right: 20px;
`;
const ChannelTagsWrapper = styled.div`
	margin-top: 390px;
	height: auto;
	line-height: 20px;
	font-size: 10px;
	padding: 10px;
	width: 80%;
	margin-left: 10%;
	text-align: left;
`;
const ChannelTags = styled.span`
	border: 1px solid ${COLORS.darkPurple};
	border-radius: 20px;
	margin: 5px;
	padding: 5px;
	line-height: 20px;
	white-space: nowrap;
	display: inline-block;
`;
export default ChannelTab;
